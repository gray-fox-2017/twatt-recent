var express = require('express')
var router = express.Router()

var controllerRecent = require('../controllers/twatt-recent')

router.post('/twitter', controllerRecent.timeline)

module.exports = router