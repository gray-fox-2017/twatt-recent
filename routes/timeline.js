var express = require('express');
var router = express.Router();
const timeline_controllers = require('../controllers/timeline_controllers.js');

/* GET users listing. */
router.post('/', timeline_controllers.showTimeline);

module.exports = router;
