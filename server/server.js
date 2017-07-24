// Dependencies
// ============
var express        = require('express');
var path           = require('path');
var logger         = require('morgan');
var cookieParser   = require('cookie-parser'); // for working with cookies
var bodyParser     = require('body-parser');
var passport 			 = require("./config/passport");
var config				 = require("./config/extra-config");

// Express settings
// ================

// instantiate our app
var app            = express();

// Enable CORS from client-side
app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(passport.initialize());

app.get('*', (req, res) => {
  // res.sendFile(__dirname + "/public/index.html");
  var testHtmlPath = path.resolve(__dirname, '..', 'public', 'index.html');
  res.sendFile(testHtmlPath);
})

require('./routes')(app);

require('./config/databaseImplementation');
//Set up default mongoose connection


// our module get's exported as app.
module.exports = app;


// Where's the listen? Open up bin/www, and read the comments.
