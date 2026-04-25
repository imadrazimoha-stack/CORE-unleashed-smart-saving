const express = require('express');
const cors = require('cors'); // ✅ ADD THIS
const app = express();

const savingsRoutes = require('./routes/savingsRoutes');

// ✅ VERY IMPORTANT: Put CORS BEFORE routes
app.use(cors({
  origin: "http://localhost:5173", // your frontend
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// Routes
app.use('/api/savings', savingsRoutes);

// ===== IN-MEMORY SETTINGS STORE (replace with DB in production) =====
let userSettings = {
  baseRate: 0.10,
  riskTolerance: 'MEDIUM',
  minSafeBalance: 50000,
  aiMode: 'Balanced',
  emailNotifications: true,
  pushNotifications: false,
};

// GET settings
app.get('/api/settings', (req, res) => {
  res.json({
    user: {
      name: 'Mohammed Bilal',
      email: 'bilal@email.com',
      plan: 'Free Tier',
      role: 'Independent Consultant',
      memberSince: 'Oct 2022',
    },
    settings: userSettings,
  });
});

// POST (save) settings
app.post('/api/settings', (req, res) => {
  userSettings = { ...userSettings, ...req.body };
  console.log('⚙️  Settings updated:', userSettings);
  res.json({ success: true, settings: userSettings });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something broke!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});