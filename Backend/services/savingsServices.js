// services/savingsService.js
const { 
    BASE_FACTOR, MIN_SAFE_BALANCE, SKIP_SAVING_THRESHOLD, 
    MAX_SAVINGS_PERCENTAGE, MIN_SAVINGS_AMOUNT, RISK_THRESHOLDS 
} = require('../config/constants');

exports.classifyRisk = (stabilityFactor) => {
    if (stabilityFactor >= RISK_THRESHOLDS.HIGH_STABILITY) return 'LOW';
    if (stabilityFactor >= RISK_THRESHOLDS.MEDIUM_STABILITY) return 'MEDIUM';
    return 'HIGH';
};

exports.calculateSavings = (income, currentBalance, stabilityFactor) => {
    // 1. Hard Safeguard Check
    if (currentBalance < SKIP_SAVING_THRESHOLD) {
        return {
            suggestedSavings: 0,
            safeFactor: 0,
            message: "Current balance is critically low. Skip saving today."
        };
    }

    // 2. Core Formula Calculation
    const safeFactor = Math.min(1, currentBalance / MIN_SAFE_BALANCE);
    let rawSavings = income * BASE_FACTOR * stabilityFactor * safeFactor;

    // 3. Clamps and Constraints
    const maxAllowed = income * MAX_SAVINGS_PERCENTAGE;
    
    if (rawSavings > maxAllowed) {
        rawSavings = maxAllowed;
    }
    
    if (rawSavings > 0 && rawSavings < MIN_SAVINGS_AMOUNT) {
        rawSavings = MIN_SAVINGS_AMOUNT;
    }

    return {
        suggestedSavings: Math.round(rawSavings),
        safeFactor: parseFloat(safeFactor.toFixed(2))
    };
};