let twattController = require('../controllers/twattController')
const express = require('express')
const router = express.Router()

router.get('/api/recent', twattController.recentTwatt)

module.exports = router