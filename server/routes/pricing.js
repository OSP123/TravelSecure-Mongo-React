var express = require('express');
var router  = express.Router();

var pricing_api = require('../apis/pricing_api');

router.get('/', pricing_api.index);

module.exports = router;