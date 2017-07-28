var User       = require('../models/User');
var authCheck  = require('../config/middleware/authCheck');
const passport = require("passport");

// login
exports.loginUser = (req, res, next) => {

  // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  // So we're sending the user back the route to the members page because the redirect will happen on the front end
  // They won't get this or even be able to access this page if they aren't authed

  return passport.authenticate('local', (err, token, userData) => {
    if (err) {
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(400).json({
          success: false,
          message: err.message
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.'
      });
    }

    console.log(token, "this is the token in users_api.js");
    console.log(userData, "this is the userData in users_api.js");

    return res.json({
      success: true,
      message: 'You have successfully logged in!',
      token,
      user: userData
    });
  })(req, res, next);
};

// register a user
exports.signUpUser = function(req,res) {

  User.findOne({ 'username' :  req.body.username }, function(err, user) {

    // check to see if theres already a user with that email
    if (user) {
        res.send({
          duplicateUser: true
        })
    } else {

        // if there is no user with that email
        // create the user
        var newUser            = new User();

        // set the user's local credentials
        newUser.username    = req.body.username;
        newUser.email       = req.body.email;
        newUser.password    = newUser.generateHash(req.body.password);

        // save the user
        newUser.save()
          .then(function() {
          res.send({redirect: '/'});
        }).catch(function(err) {
          res.json(err);
        });
    }

  }); 
};
