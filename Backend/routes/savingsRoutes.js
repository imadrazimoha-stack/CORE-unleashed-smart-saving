// routes/savingsRoutes.js
const express = require('express');
const router = express.Router();
const savingsController = require('../controllers/savingsController');

router.post('/suggest', savingsController.suggestSavings);
router.post('/feedback', savingsController.recordFeedback);

module.exports = router;