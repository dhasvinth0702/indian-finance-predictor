const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
const jwt = require('jsonwebtoken');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {

  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"));

app.post('/signup', async (req, res) => {
  // Mock signup response
  const token = jwt.sign({ user: req.body.email }, 'secret', { expiresIn: '1h' });
  res.json({ token });
});

app.post('/login', async (req, res) => {
  // Mock login response
  const token = jwt.sign({ user: req.body.email }, 'secret', { expiresIn: '1h' });
  res.json({ token });
});

app.get('/api/market-data', async (req, res) => {
  try {
    const response = await axios.get('https://api.example.com/data', {
      headers: {
        'X-RapidAPI-Key': process.env.MARKET_API_KEY,
        'X-RapidAPI-Host': indian-stock-exchange-api2.p.rapidapi.com
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch market data' });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
