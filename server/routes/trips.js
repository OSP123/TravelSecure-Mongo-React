var express = require('express');
var router  = express.Router();

var trips_api = require('../apis/trips_api');
var authCheck = require("../config/middleware/authCheck");

router.get('/', authCheck, trips_api.index);

router.post('/new', authCheck, trips_api.createTrip);

module.exports = router;