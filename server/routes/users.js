const express = require('express');
const router  = express.Router();

const users_api = require('../apis/users_api');

router.get('/logout', users_api.signOutUser);

router.post('/login', users_api.loginUser);

router.post('/signup', users_api.signUpUser);

module.exports = router;