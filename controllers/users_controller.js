var User = require('../models/User');


//this is the users_controller.js file
exports.registrationPage = function(req,res) {
	res.render('users/registration', {
    layout: 'main-registration'
  });
};

exports.signOutUser = function(req,res) {
  req.logout();
  res.redirect("/");
};

// login
exports.loginUser = function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
  res.json("/");
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
