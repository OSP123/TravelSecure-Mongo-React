var express = require('express');
var router  = express.Router();

var pricing_controller = require('../controllers/pricing_controller');

router.get('/', pricing_controller.index);

module.exports = router;