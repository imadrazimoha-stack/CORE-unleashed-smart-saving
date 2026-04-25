// models/mockDb.js
// Mocking a database for demonstration purposes
const users = {
    'user123': { balance: 850 },
    'user456': { balance: 250 }, // Will trigger the < 300 safeguard
};

// Mocking 30 days of irregular income
const incomeHistory = {
    'user123': [0, 500, 0, 1200, 300, 0, 1500, 0, 0, 700, 400, 0, 1800, 200, 0, 0, 2200, 600, 0, 900, 0, 0, 1300, 500, 0, 0, 2500, 300, 0, 800],
    'user456': [100, 0, 0, 50, 0, 200] // Sparse data
};

exports.getUserBalance = async (userId) => {
    return users[userId] ? users[userId].balance : 0;
};

exports.getIncomeHistory = async (userId, limit = 30) => {
    const history = incomeHistory[userId] || [];
    return history.slice(-limit);
};

exports.saveFeedback = async (userId, suggested, actual, score) => {
    console.log(`Feedback saved for ${userId}: Score ${score.toFixed(2)}`);
    return { success: true };
};