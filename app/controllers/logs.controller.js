"use strict";
const fs = require("fs");
const path = require("path");

exports.getLogs = (req, res) => {
  console.log("Works");
  return res.json({ status: 1, apiVersion: "v1" });
};

exports.getLogsByLevel = (req, res) => {};
