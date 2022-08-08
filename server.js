/* eslint-disable no-undef */
//Install express server
const express = require('express');
const path = require('path');
const cors = require('cors')
var app = express();
app.use(cors())
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
// app.get('/*', function(req,res) {
//     res.send('Hello');
// // res.sendFile(path.join(__dirname+'/dist/common-client/index.html'));
// });

app.use('/api', indexRouter);
// catch 404 and forward to error handler
app.use('/api', function (req, res, next) {
  next(createError(404));
});

// error handler
app.use('/api', function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// Serve only the static files form the dist directory
app.use('/common-client', express.static(__dirname + '/dist/common-client'));
app.get('/common-client/*', function (req, res) {
  res.sendFile(path.join(__dirname+'/dist/common-client/index.html'));
});
app.use('/', function (req, res) {
  res.redirect('/common-client');
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

// //Install express server
// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/common-client'));

// app.get('/*', function(req,res) {
//     res.send('Hello');
// // res.sendFile(path.join(__dirname+'/dist/common-client/index.html'));
// });

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);
