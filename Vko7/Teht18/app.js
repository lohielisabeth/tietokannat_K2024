var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

const opiskelijaRouter = require('./routes/opiskelija');
const arviointiRouter = require('./routes/arviointi');
const opintojaksoRouter = require('./routes/opintojakso');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/opiskelija', opiskelijaRouter);
app.use('/arviointi', arviointiRouter);
app.use('/opintojakso', opintojaksoRouter);


module.exports = app;

//----------------------------------------



