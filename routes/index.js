var express = require('express');
var router = express.Router();
let cityRouter = require('./cities')
let userRouter = require('./users')
let itineraryRouter = require('./itineraries')
let activitiesRouter = require('./activities')

router.get('/', function(req, res, next) {
  res.json("hola");
});

router.use('/cities', cityRouter)
router.use('/users', userRouter)
router.use('/itineraries', itineraryRouter)
router.use('/activities', activitiesRouter)

module.exports = router;
