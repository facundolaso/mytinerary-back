var express = require('express');
var router = express.Router();
let cityRouter = require('./cities')
let userRouter = require('./users')
let itineraryRouter = require('./itineraries')

router.get('/', function(req, res, next) {
  res.json("hola");
});

router.use('/cities', cityRouter)
router.use('/users', userRouter)
router.use('/itineraries', itineraryRouter)
module.exports = router;
