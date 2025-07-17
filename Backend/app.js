
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var mongoDB = require('./database/database');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
mongoDB();

var app = express();

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Middleware Setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Enable CORS (Only Once)
app.use(cors({
  origin: "http://localhost:3000", // Frontend URL
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Content-Type, Authorization"
}));

// ✅ Serve Uploaded Images
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// ✅ Handle 404 Errors
app.use(function(req, res, next) {
  next(createError(404));
});

// ✅ Global Error Handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
