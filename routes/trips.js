var express = require('express');
var router  = express.Router();

var trips_api = require('../apis/trips_api');
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/', isAuthenticated, trips_api.index);

router.post('/new', isAuthenticated, trips_api.createTrip);

module.exports = router;