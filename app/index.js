const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const errorhandler = require("errorhandler");

var isProduction = process.env.NODE_ENV === "production";

const apiRoutes = require("./routes/router");

// Create global app object
var app = express();

app.use(cors());

app.use("/api/v1/", apiRoutes());

// Normal express config defaults
app.use(require("morgan")("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (!isProduction) {
  app.use(errorhandler());
}

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use(function(err, req, res, next) {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err
      }
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {}
    }
  });
});

// finally, let's start our server...
var server = app.listen(process.env.PORT || 3000, function() {
  console.log("Listening on port " + server.address().port);
});
