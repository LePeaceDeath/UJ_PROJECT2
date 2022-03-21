var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var priceRouter = require('./routes/price');
var saleRouter = require('./routes/sale');
var faqRouter = require('./routes/faq');
var caloriesRouter = require('./routes/calories');
var fruitsRouter = require('./routes/dbfood')

var app = express();
const urlencodedParser = express.urlencoded({extended: false});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//localhost:3000/price
app.use('/price', priceRouter);
//localhost:3000/sale
app.use('/sale', saleRouter);
//localhost:3000/faq
app.use('/faq', faqRouter);
//localhost:3000/calories
app.use('/calories', caloriesRouter);
//localhost:3000/fruits
app.use('/fruits', fruitsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
