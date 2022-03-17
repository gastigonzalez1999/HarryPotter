var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const compression = require('compression');
const dotenv = require('dotenv');
dotenv.config();
const houses = require("./routes/houses");


var app = express();

app.use(cors());
app.use(compression());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// App routes
app.use('/api/houses', houses);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.error('Route not found');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.error(err);
});

module.exports = app;
