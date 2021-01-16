// //Install express server
// const express = require('express');
// const path = require('path');
// var app = express();
// var createError = require('http-errors');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./server/routes/index');
// var usersRouter = require('./server/routes/users');
// app.set('views', path.join(__dirname, '/server/views'));
// app.set('view engine', 'jade');
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// app.use('/api', indexRouter);
// app.use('/api/users', usersRouter);

// // catch 404 and forward to error handler
// app.use('/api', function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use('/api', function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/user-management'));
// app.get('/*', function(req,res) {
    
// res.sendFile(path.join(__dirname+'/dist/user-management/index.html'));
// });

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);




//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/user-management'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/user-management/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);