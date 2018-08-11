const User       = require('../models/User');
const passport = require("passport");

exports.signOutUser = function(req, res) {
  req.logout();
  res.send({ loggedIn: false })
};

// login
exports.loginUser = (req, res, next) => {

  // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  // So we're sending the user back the route to the members page because the redirect will happen on the front end
  // They won't get this or even be able to access this page if they aren't authed

  return passport.authenticate('local', (err, userData) => {
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
    if (err) {
      console.log(err);
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

  console.log(userData, "this is the userData in users_api.js");
  if (userData.message=="Invalid Password"||userData.message=="User not Found") {
      return res.json({
          success: false,
          message: userData.message,
          user: userData
      })
  }
  else return res.json({
      success: true,
      message: 'You have successfully logged in!',
      user: userData
  });
  })(req, res, next);
};

// register a user
exports.signUpUser = function(req,res) {

  User.findOne({ 'username' :  req.body.username }, function(err, user) {

    // check to see if theres already a user with that email
    if (user) {
        res.send({ duplicateUser: true })
    } else {

        // if there is no user with that email
        // create the user
        console.log("new user", req.body);
        const newUser       = new User();

        // set the user's local credentials
        newUser.username    = req.body.username;
        newUser.email       = req.body.email;
        newUser.password    = newUser.generateHash(req.body.password);

        // save the user
        newUser.save()
          .then(function() {
          res.send({ success: true });
        }).catch(function(err) {
          res.json(err);
        });
    }

  }); 
};
