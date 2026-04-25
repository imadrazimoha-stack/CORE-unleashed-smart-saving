// config/constants.js
module.exports = {
    BASE_FACTOR: 0.10,
    MIN_SAFE_BALANCE: 1000,
    SKIP_SAVING_THRESHOLD: 300,
    MAX_SAVINGS_PERCENTAGE: 0.30,
    MIN_SAVINGS_AMOUNT: 10,
    RISK_THRESHOLDS: {
        HIGH_STABILITY: 1.2,  // stability >= 1.2 means LOW risk
        MEDIUM_STABILITY: 0.8 // stability >= 0.8 means MEDIUM risk
    },
    ML_SERVICE_URL: process.env.ML_SERVICE_URL || 'http://localhost:8000/predict'
};