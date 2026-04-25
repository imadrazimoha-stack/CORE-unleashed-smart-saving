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

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something broke!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});