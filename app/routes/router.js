const express = require("express");
/** Routes */
const logsRoute = require("./logs/logs.route");
/** Router */
const router = express.Router();

function logRouters() {
  router.use("/logs", logsRoute());

  return router;
}

module.exports = logRouters;
