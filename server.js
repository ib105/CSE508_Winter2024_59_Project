// server.js
require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/user');

const app = express();

// Middleware for JSON body parsing
app.use(express.json());

// Route middleware
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 6000; // Change 3000 to any available port you prefer
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

