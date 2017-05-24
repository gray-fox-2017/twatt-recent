const router = require('express').Router();
const control = require('../controller/twatt');

router.get('/:search', control.search);

router.get('/trend', control.trend);

module.exports = router;
