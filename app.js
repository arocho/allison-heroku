//modules
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var session = require('express-session');

//local files
var routes = require('./routes/index.js');

var app = express();

//set views folder location and engine to jade
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//dat favicon
app.use(favicon(__dirname + '/public/img/favicon.ico'));

//port setup
app.set('port', process.env.PORT || 5000);


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret: 'keyboard cat',
                saveUninitialized: true,
                resave: true}));

//compiles any '.styl' files in the public folder into css
app.use(require('stylus').middleware(path.join(__dirname, 'public')));

//any other files in the public folder can be loaded
app.use(express.static(path.join(__dirname, 'public')));

//Visible things start getting called here.
app.use('/', routes);

// error handlers

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//Server that listens t the app's port
http.createServer(app).listen(app.get('port'), function(){
    console.log('Hello there! I am listening in on this port, yo.');
});

module.exports = app;
