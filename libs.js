// api/index.js
const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express on Vercel!');
});

// Export the express app wrapped as a serverless function
module.exports.handler = serverless(app);
