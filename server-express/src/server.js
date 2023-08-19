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
pool.connect().catch(err => console.log(err.message));

// Use Routed Endpoints
const itemRoutes = require('./routes/itemRoutes');
app.use('/api/items', itemRoutes(pool));

// Simple example endpoint - no routes module used
app.get("/api/status", (req, res) => {
  const status = {version: "1.02", name: "Demo App"};
  pool.connect()
    .then(() => {
      res.json({...status, database: "Active"});
    })
    .catch(err => {
      console.log(err.message);
      res.json({...status, database: "Not Active"});
    });
});

app.use(function(req, res) {
  res.status(404);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});
