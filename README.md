# RootFund 

> A smart, adaptive savings system built for gig workers, freelancers, and daily wage earners.

---

## Overview

Most financial tools are built for people with fixed salaries. For the millions who earn irregularly — from driving, freelancing, or daily wages — these tools simply don't work.

**RootFund** solves this by dynamically calculating how much a user should save each day, based on their actual income, income stability, and current financial safety. No fixed percentages. No one-size-fits-all rules.

---

##  The Problem

- Traditional savings tools assume **fixed, predictable income**
- Gig workers and freelancers have **highly variable earnings**
- Fixed saving percentages can force savings even when the user **cannot afford it**
- This leads to financial stress and abandoned savings habits

---

##  The Solution

RootFund uses a **heuristic-based adaptive formula** that adjusts savings recommendations in real time based on three factors:

| Factor | What it measures |
|---|---|
| Income amount | How much was earned today |
| Income stability | How consistent income has been over time |
| Current balance | Whether the user can afford to save right now |

The result is a savings suggestion that is always **realistic, safe, and personalised**.

---

##  The Formula

```
Savings = Income × BaseFactor × StabilityFactor × SafeFactor
```

| Variable | Value / Description |
|---|---|
| `BaseFactor` | `0.10` — fixed 10% baseline |
| `StabilityFactor` | `0.5` to `1.5` — computed from income history |
| `SafeFactor` | `min(1, CurrentBalance / MinimumSafeBalance)` |
| `MinimumSafeBalance` | `₹1000` — below this, savings are reduced |

### Safety Guardrails

- ✅ Savings are **capped at 30%** of income
- ✅ A **minimum floor** (e.g. ₹10) ensures small but consistent saving
- ✅ Savings are **skipped entirely** when balance is critically low

---

##  Stability Calculation

Stability is measured using standard statistical methods:

- **Mean** — average income over a rolling window
- **Standard Deviation** — measures income variability

```
Higher stability  →  StabilityFactor closer to 1.5  →  Higher savings
Lower stability   →  StabilityFactor closer to 0.5  →  Lower, safer savings
```

This ensures the system never punishes a user for having an irregular income.

---

##  Risk Classification

Users are automatically categorised based on their income stability:

| Risk Level | Stability | Behaviour |
|---|---|---|
| 🟢 **LOW** | Stable income | Saves more aggressively |
| 🟡 **MEDIUM** | Moderate variability | Balanced savings |
| 🔴 **HIGH** | Highly irregular | Conservative savings |

---

##  System Flow

```
1. User enters daily income
        ↓
2. Backend fetches income history + current balance
        ↓
3. ML/Statistical service computes StabilityFactor
        ↓
4. SafeFactor is calculated from current balance
        ↓
5. Savings suggestion generated using formula
        ↓
6. Result returned to user with explanation
```

---

##  Architecture

```
Frontend  →  Backend (Node.js / Express)  →  ML Service (Python / FastAPI)  →  Database (PostgreSQL)
```

| Layer | Role |
|---|---|
| **Frontend** | User input, visualisations, dashboard |
| **Backend** | Business logic, API routing, formula execution |
| **ML Service** | Computes `StabilityFactor` from income history |

---

##  Visualisations

RootFund provides three key charts to help users understand their finances:

1. **Income vs Savings Graph** — dual line graph showing how savings track income over time
2. **Stability Trend** — how consistent the user's income has been
3. **Risk Level Indicator** — current classification (Low / Medium / High) with history

---

##  Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js, Express |
| ML Service | Python, FastAPI |
| Database | PostgreSQL |
| Visualisation | Chart.js / Recharts |

---

##  Algorithm Design

RootFund deliberately avoids complex black-box machine learning for the core savings logic. Instead it uses:

- **Heuristic problem-solving** — human-interpretable rules
- **Statistical analysis** — mean and standard deviation
- **Rule-based decision system** — clear, auditable decisions
- **Deterministic formula** — same inputs always produce the same output

ML is used **only** to estimate stability — not to make the final savings decision. This keeps the system **transparent, trustworthy, and explainable** to users.

---

##  Impact

| Problem | RootFund's Answer |
|---|---|
| Inconsistent saving habits | Daily adaptive suggestions keep users on track |
| Over-saving on bad days | SafeFactor prevents financial stress |
| Under-saving on good days | High StabilityFactor encourages saving more |
| No financial visibility | Visualisations show patterns clearly |

---

##  Future Improvements

- [ ] **Feedback loop** — system learns from whether users accept or reject suggestions
- [ ] **Better ML models** — LSTM or time-series forecasting for stability
- [ ] **Automated income detection** — parse SMS / UPI notifications automatically
- [ ] **Mobile app** — native iOS and Android with push nudges
- [ ] **Multi-goal support** — save for different targets simultaneously (emergency fund, equipment, tax)

---

##  Project Structure

```
RootFund/
│
├── Backend/
│   ├── config/          # Constants, DB config
│   ├── controllers/     # API request handlers
│   ├── routes/          # API routes (endpoints)
│   ├── services/        # Core logic (savings calculation, ML calls)
│   ├── models/          # Database models & queries
│   ├── ML_model/        # Python FastAPI (stability calculation)
│   │   └── main.py
│   ├── app.js           # Express app setup
│   └── package.json
│
├── Frontend/
│   ├── public/          # Static files
│   ├── src/
│   │   ├── assets/      # Images, icons
│   │   ├── components/  # UI components (graphs, dashboard)
│   │   ├── stores/      # State management
│   │   └── App.jsx
│   ├── index.html
│   └── package.json
│
└── README.md

---

##  Getting Started

### Prerequisites

- Node.js v18+
- Python 3.9+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/rootfund.git
cd rootfund

# Install backend dependencies
cd backend
npm install

# Install ML service dependencies
cd ../ml-service
pip install -r requirements.txt

# Start the ML service
cd ml-service
uvicorn main:app --reload --port 8001

# Start the backend
cd ../backend
npm run dev
```

---

