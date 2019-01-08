const express = require('express')	
/** Middlewares */	
const authMiddleware = require('../../middlewares/auth.middleware')	
/** Controllers */
const LogsController = require("../../controllers/logs.controller");	

 /** Router */	
const router = express.Router()	

 /**	
 * Routes	
 */	
router	
    .route('/')	
    /**	
     * {get} - Gets all log messages	
     */	
    .get(LogsController.getLogs)

router
    .route('/:logLevel')
    /**
     * {get} - Get all logs under one level
     */
    .get(LogsController.getLogsByLevel)

module.exports = router;
