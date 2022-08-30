var express = require('express');
var router = express.Router();
let cityRouter = require('./cities')

router.use('/cities', cityRouter)


module.exports = router;
