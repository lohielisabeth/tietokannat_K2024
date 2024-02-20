var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

const borrowerRouter = require('./routes/borrower');
const boookRouter = require('./routes/book');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/borrower', borrowerRouter);
app.use('/book', borrowerRouter);


module.exports = app;

//----------------------------------------



