var express = require('express');
var router = express.Router();
let cityRouter = require('./cities')
let userRouter = require('./users')

router.get('/', function(req, res, next) {
  res.json("hola");
});

router.use('/cities', cityRouter)
router.use('/users', userRouter)

module.exports = router;
