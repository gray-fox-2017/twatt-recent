var express = require('express');
var router = express.Router();
var controllers = require('../controllers/controllers')

router.get('/', controllers.recentTimeline);

module.exports = router;
