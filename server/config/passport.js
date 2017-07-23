const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const jwt = require('jsonwebtoken');
const config = require('./extra-config');

const User = require("../models/User.js");
// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: 'username',
    passwordField: 'password',
    session: false,
    passReqToCallback :true
  }, 
  function(req, username, password, done) {
    User.findOne({ 'username' :  username }, function(err, user) {
      // if there are any errors, return the error before anything else
      if (err)
          return done(err);

      // if no user is found, return the message
      if (!user)
          return done(null, false, { found: false});

      // if the user is found but the password is wrong
      if (!user.validPassword(password))
          return done(null, false); // create the loginMessage and save it to session as flashdata

      const payload = {
        sub: user._id
      };

       // create a token string
      const token = jwt.sign(payload, config.jwtSecret);
      const data = {
        name: user.name
      };

      console.log("I'm going through passport.js");
      // all is well, return successful user
      return done(null, token, data);
    });
  }
));

// passport.serializeUser(function(user, done) {
//     done(null, user.id);
// });

// // used to deserialize the user
// passport.deserializeUser(function(id, done) {
//     User.findById(id, function(err, user) {
//         done(err, user);
//     });
// });

// Exporting our configured passport
module.exports = passport;