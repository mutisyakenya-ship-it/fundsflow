const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const { prisma } = require('./prisma'); 

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const { logger } = require('./middleware/logger');
app.use(logger);

// Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Server is running 🚀' });
});

// Test DB route
app.get('/test-db', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json({ connected: true, users });
  } catch (err) {
    res.status(500).json({ connected: false, error: err.message });
  }
});

// Error handler BEFORE listen
const { errorHandler } = require('./middleware/errorHandler');
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
