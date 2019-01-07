const express = require("express");

/** Controllers */
const LogsController = require("../../controllers/logs.controller");

/** Router */
const router = express.Router();

function logsRouter() {
  router.get("/", LogsController.getLogs);

  return router;
}

module.exports = logsRouter;
