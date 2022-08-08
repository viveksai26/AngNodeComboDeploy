/* eslint-disable no-undef */
// Install express server
const express = require('express');
const path = require('path');
const cors = require('cors');
var app = express();
app.use(cors());
/**
 * Routes
 */
var indexRouter = require('./server/routes/index.router');

var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

app.set('views', path.join(__dirname, '/server/views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', indexRouter);
// catch 404 and forward to error handler
app.use('/api', (req, res, next) => {
  next(createError('Route not found', 404));
});

// error handler
app.use('/api', (err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// Serve only the static files form the dist directory
app.use('/common-client', express.static(`${__dirname}/dist/common-client`));
app.get('/common-client/*', (req, res) => {
  res.sendFile(path.join(`${__dirname  }/dist/common-client/index.html`));
});
app.use('/', (req, res, next) => {
  res.redirect('/common-client');
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
