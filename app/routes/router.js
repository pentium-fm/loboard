const express = require("express");

/** Routes */
const logsRoute = require("./logs/logs.route");

/** Router */
const router = express.Router();

/** Child routes */
router.use("/logs", logsRoute);

module.exports = router;
