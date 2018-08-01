// Dependencies
// ============
const express        = require('express');
const path           = require('path');
const logger         = require('morgan');
const bodyParser     = require('body-parser');
const passport 			 = require("./config/passport");
const session        = require('express-session'); 
const config				 = require("./config/extra-config");

// Express settings
// ================

// instantiate our app
const app            = express();

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
const authCheck = require('./config/middleware/attachAuthenticationStatus');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(session({ secret: config.sessionKey, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(authCheck);

require('./config/databaseImplementation');

require('./routes')(app);

app.get('*', (req, res) => {
  // res.sendFile(__dirname + "/public/index.html");
  const rootHtmlPath = path.resolve(__dirname, '..', 'public', 'index.html');
  res.sendFile(rootHtmlPath);
})

// our module get's exported as app.
module.exports = app;

// Where's the listen? Open up bin/www, and read the comments.
