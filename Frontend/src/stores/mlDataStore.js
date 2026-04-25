// src/store/mlDataStore.js

// Initial structure (matches your backend response)
export const initialMLData = {
  today_income: 0,
  recommended_savings: 0,
  savings_percent: 0,
  stability_score: 0,
  risk_level: "LOW"
};

// Adapter function (VERY IMPORTANT)
export const adaptMLData = (apiData) => {
  return {
    today_income: apiData.income,
    recommended_savings: apiData.suggestedSavings,
    stability_score: apiData.stabilityFactor,
    risk_level: apiData.riskLevel,
    savings_percent:
      apiData.baseFactor * apiData.stabilityFactor * apiData.safeFactor
  };
};