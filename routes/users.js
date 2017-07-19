var express = require('express');
var router  = express.Router();

var passport = require("../config/passport");
var users_api = require('../apis/users_api');
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/signup', users_api.registrationPage);

router.get('/sign-out', users_api.signOutUser);

// router.post('/login', , users_api.loginUser);

router.post('/login', passport.authenticate("local"), users_api.loginUser);

router.post('/signup', users_api.signUpUser);

module.exports = router;