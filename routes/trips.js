var express = require('express');
var router  = express.Router();

var trips_controller = require('../controllers/trips_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/', isAuthenticated, trips_controller.index);

router.post('/new', isAuthenticated, trips_controller.createTrip);

module.exports = router;