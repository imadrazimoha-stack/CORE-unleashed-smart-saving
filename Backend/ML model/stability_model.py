import numpy as np
import pandas as pd

class DynamicStabilityScorer:
    def __init__(self, variance_weight=0.55, frequency_weight=0.45):
        self.w_var = variance_weight
        self.w_freq = frequency_weight
        self.min_clamp = 0.5
        self.max_clamp = 1.5

    def extract_signals(self, income_series):
        income_array = np.array(income_series)

        total_days = len(income_array)
        income_days = np.sum(income_array > 0)

        mean_income = np.mean(income_array) + 1e-9
        std_dev = np.std(income_array)

        active_days = np.nonzero(income_array)[0]
        if len(active_days) > 0:
            last_income_index = active_days[-1]
            days_since_last_income = (total_days - 1) - last_income_index
        else:
            days_since_last_income = total_days

        return mean_income, std_dev, income_days, days_since_last_income

    def calculate_stability(self, income_series):
        mean, std, inc_days, gap_days = self.extract_signals(income_series)
        total_days = len(income_series)

        if inc_days == 0:
            return self.min_clamp

        ratio = std / mean if mean > 0 else float("inf")

        # HARD SAFETY OVERRIDE
        if ratio > 3 and inc_days < 0.2 * total_days:
            return self.min_clamp

        variance_score = 1 / (1 + ratio)
        variance_score = max(0.5, min(1.5, variance_score))

        effective_freq = inc_days / (inc_days + gap_days + 1)
        frequency_score = 0.5 + effective_freq

        raw_stability = (self.w_var * variance_score) + (self.w_freq * frequency_score)
        final_stability = max(self.min_clamp, min(self.max_clamp, raw_stability))

        return round(final_stability, 2)


# ==========================================
# SAFETY + SAVINGS ENGINE
# ==========================================

def compute_safety_factor(current_balance, min_safe_balance):
    if min_safe_balance <= 0:
        return 1.0
    return min(1.0, current_balance / min_safe_balance)


def recommend_savings(income_today, stability, safety_factor, trend=0):
    if stability >= 1.1:
        base_rate = 0.1
    elif stability >= 0.8:
        base_rate = 0.1
    else:
        base_rate = 0.1

    #Adjust based on trend
    if trend == -1:
        base_rate = 0.1
    elif trend == 1:
        base_rate = 0.1

    savings = income_today * base_rate * stability * safety_factor
    return round(savings, 2), base_rate


# ==========================================
# INTERPRETATION LAYER (NEW)
# ==========================================

def classify_stability(score):
    if score >= 0.95:
        return "High"
    elif score >= 0.75:
        return "Medium"
    else:
        return "Low"


def classify_volatility(ratio):
    if ratio < 0.5:
        return "low"
    elif ratio < 1.5:
        return "medium"
    else:
        return "high"


def detect_pattern(freq, ratio):
    if freq < 0.15:
        return "Sparse income with long gaps"
    elif freq < 0.5:
        return "Irregular income with occasional payouts"
    elif ratio > 1.5:
        return "Irregular income with high volatility"
    else:
        return "Consistent income pattern"


def detect_trend(data):
    if len(data) < 14:
        return 0

    recent = np.mean(data[-7:])
    past = np.mean(data[-14:-7])

    #Ignore extremely sparse data
    if np.count_nonzero(data) < len(data) * 0.1:
        return 0

    if recent > past:
        return 1
    elif recent < past:
        return -1
    return 0


def generate_user_profile(model, income_data):
    mean, std, inc_days, gap = model.extract_signals(income_data)
    total_days = len(income_data)

    stability = float(model.calculate_stability(income_data))
    ratio = float(std / mean)
    freq = float(inc_days / total_days)

    return {
        "stability_factor": round(stability,2),
        "stability_level": classify_stability(stability),
        "pattern": detect_pattern(freq, ratio),
        "trend": detect_trend(income_data),
        "volatility": classify_volatility(ratio),
        "income_frequency": round(freq, 2)
    }


# ==========================================
# M5 DATASET CALIBRATION
# ==========================================

def run_m5_calibration(file_path):
    df = pd.read_csv(file_path)

    df["total_sales"] = df.iloc[:, 6:].sum(axis=1)
    df_sorted = df.sort_values("total_sales")

    low_row = df_sorted.iloc[0]
    mid_row = df_sorted.iloc[len(df_sorted)//2]
    high_row = df_sorted.iloc[-1]

    def extract_series(row):
        return list(row.iloc[6:-1].values)

    return {
        "LOW (Sparse)": extract_series(low_row),
        "MID (Mixed)": extract_series(mid_row),
        "HIGH (Consistent)": extract_series(high_row),
    }


# ==========================================
# MAIN EXECUTION
# ==========================================

if __name__ == "__main__":
    model = DynamicStabilityScorer()

    datasets = run_m5_calibration("sales_train_validation.csv")

    print("\n M5 DATASET CALIBRATION")
    print("-----------------------------------")

    for label, data in datasets.items():
        profile = generate_user_profile(model, data)

        print(f"\n🔹 {label}")
        print("---------------------------")
        print(profile)

    # ==========================================
    # SAVINGS SIMULATION
    # ==========================================

    print("\nSAVINGS SIMULATION")
    print("-----------------------------------")

    income_today = 12450
    current_balance = 842000
    min_safe_balance = 1000

    stability = profile["stability_factor"]
    trend = profile["trend"]

    safety = compute_safety_factor(current_balance, min_safe_balance)
    savings, rate = recommend_savings(income_today, stability, safety, trend)

    print(f"Income Today: ₹{income_today}")
    print(f"Stability: {stability}")
    print(f"Base Rate: {int(rate * 100)}%")
    print(f"Safety Factor: {round(safety, 2)}")

    print(f"\nRecommended Savings: ₹{savings}")
