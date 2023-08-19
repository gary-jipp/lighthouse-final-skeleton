require('dotenv').config();
const express = require("express");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from ../public (needed to serve React App)
const public = path.join(process.cwd(), '..', '_public');
app.use(express.static(public));
app.use(express.urlencoded({extended: true}));

// Connect to Database
const pool = require('./database/connect');

// Use Routed Endpoints
const itemRoutes = require('./routes/itemRoutes');
app.use('/api/items', itemRoutes(pool));

// Simple example endpoint - no routes module used
app.get("/api/status", (req, res) => {
  res.json({version: "1.01", name: "Demo App"});
});

app.use(function(req, res) {
  res.status(404);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});