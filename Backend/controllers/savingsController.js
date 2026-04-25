// controllers/savingsController.js
const db = require('../models/mockDb');
const mlService = require('../services/mlServices');
const savingsService = require('../services/savingsServices');
const { BASE_FACTOR } = require('../config/constants');

exports.suggestSavings = async (req, res) => {
    try {
        const { userId, income } = req.body;

        if (!userId || typeof income !== 'number' || income < 0) {
            return res.status(400).json({ error: "Invalid userId or income." });
        }

        // Fetch user context
        const currentBalance = await db.getUserBalance(userId);
        const incomeHistory = await db.getIncomeHistory(userId, 30);

        // Get ML prediction
        const stabilityFactor = await mlService.getStabilityFactor(incomeHistory);

        // Calculate business logic
        const { suggestedSavings, safeFactor, message } = savingsService.calculateSavings(
            income, 
            currentBalance, 
            stabilityFactor
        );

        const riskLevel = savingsService.classifyRisk(stabilityFactor);

        // Build Response
        const responseData = {
            income,
            baseFactor: BASE_FACTOR,
            stabilityFactor,
            safeFactor,
            suggestedSavings,
            riskLevel
        };

        if (message) {
            responseData.message = message;
        }

        return res.status(200).json(responseData);

    } catch (error) {
        console.error('Controller Error:', error);
        return res.status(500).json({ error: "Internal server error processing savings suggestion." });
    }
};

exports.recordFeedback = async (req, res) => {
    try {
        const { userId, actualSavings, suggestedSavings } = req.body;

        if (!userId || typeof actualSavings !== 'number' || typeof suggestedSavings !== 'number') {
            return res.status(400).json({ error: "Invalid feedback parameters." });
        }

        // Calculate score: > 1 means they saved more than suggested, < 1 means less.
        // Prevent division by zero if suggested was 0
        const score = suggestedSavings > 0 ? (actualSavings / suggestedSavings) : (actualSavings > 0 ? 1 : 0);

        await db.saveFeedback(userId, suggestedSavings, actualSavings, score);

        return res.status(200).json({ message: "Feedback recorded successfully", score });

    } catch (error) {
        console.error('Feedback Error:', error);
        return res.status(500).json({ error: "Internal server error saving feedback." });
    }
};