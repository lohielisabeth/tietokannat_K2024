var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

//--------------------------------------------------------------
//GET-metodi
app.get('/example',
    function(request,response){
        response.send('Terve');
        console.log('Terve');
    }
);
//Get-metodi yhdellä parametrillä
app.get('/example/:name',
    function(request,response){
        response.send('Hello '+request.params.name);
    }
);
//Get-metodi kahdella parametrillä pt1
app.get('/example2/:firstName/:lastName',
    function(request, response){
        response.send('Hello '+request.params.firstName+" "+request.params.lastName);
    }
);
//Get-metodi kahdella parametrillä
app.get('/example2/:firstName&:lastName',
    function(request, response){
       response.send('Hello '+request.params.firstName+" "+request.params.lastName);
    }
);
//POST
app.post('/',
    function(request,response){
        response.send(request.body);
        console.log(request.body);
    }
);
//Middleware
app.use('/example/',
    function(req,res,next){
        console.log('The example middleware called');
        next();
    }
);