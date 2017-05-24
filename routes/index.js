var express = require('express');
var router = express.Router();
var oauth = require('../Controllers/controller-twatt.js')


router.get('/',oauth.searchStory)

router.get('/timeline', oauth.timeline)

module.exports = router;
