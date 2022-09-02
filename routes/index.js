var express = require('express');
var router = express.Router();
let cityRouter = require('./cities')

router.get('/', function(req, res, next) {
  res.json("hola");
});

router.use('/cities', cityRouter)

module.exports = router;
