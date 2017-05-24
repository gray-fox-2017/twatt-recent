var express = require('express')
var router = express.Router()

var controllerRecent = require('../controllers/twatt-recent')

router.get('/twitter', controllerRecent.timeline)

module.exports = router