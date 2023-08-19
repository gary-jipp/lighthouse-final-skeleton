const express = require('express');
const router = express.Router();

const routes = function(pool) {
  const {getItems} = require('../database/items')(pool);

  router.get("/", (req, res) => {
    getItems(pool)
      .then(rows => {
        res.json(rows);
      })
      .catch(err => {
        console.log(err.message);
        res.status(500).json({error: err.message});
      });
  });

  return router;
};

module.exports = routes;