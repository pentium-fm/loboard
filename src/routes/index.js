const express = require('express')
/** Routes */
const logsRoute = require('./v1/logs.route')
/** Router */
const router = express.Router()

/** GET - Logs */
router.use('/logs', logsRoute)