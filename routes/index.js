var express = require('express');
var router = express.Router();
let cityRouter = require('./cities')
let userRouter = require('./auth')
let itineraryRouter = require('./itineraries')
let activitiesRouter = require('./activities')
let commentsRouter = require('./comments')

router.get('/', function(req, res, next) {
  res.json("hola");
});

router.use('/cities', cityRouter)
router.use('/auth', userRouter)
router.use('/itineraries', itineraryRouter)
router.use('/activities', activitiesRouter)
router.use('/comments', commentsRouter)


module.exports = router;
