// services/mlService.js
const { ML_SERVICE_URL } = require('../config/constants');

exports.getStabilityFactor = async (incomeHistory) => {
    try {
        // Using native fetch (Node 18+)
        const response = await fetch(ML_SERVICE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ history: incomeHistory })
        });

        if (!response.ok) {
            throw new Error(`ML Service responded with status: ${response.status}`);
        }

        const data = await response.json();
        return data.stabilityFactor; // Expecting float between 0.5 and 1.5

    } catch (error) {
        console.error('ML Service Error:', error.message);
        // Fallback to the safest floor if the ML service is down
        return 0.5; 
    }
};