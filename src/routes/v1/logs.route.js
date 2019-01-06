const express = require('express')
/** Middlewares */
const authMiddleware = require('../../middlewares/auth.middleware')
/** Controllers */

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
    .get()

 module.exports = router