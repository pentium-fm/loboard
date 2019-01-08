"use strict";
const fs = require("fs");
const path = require("path");

/** 
 * Get all logs
 * @public
 */
exports.getLogs = async (request, response, next) => response.json({ status: 1, version: "v1" })

/** 
 * Get logs by each level
 * @public
 */
exports.getLogsByLevel = async (request, response) => response.json({ status: 1, version: "v1", level: request.params })