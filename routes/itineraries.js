let express = require('express');
let router = express.Router();
let {create, readAll, updateOne, deleteOne, like} = require('../controllers/itineraryController')
let passport = require('../config/passport')


router.post('/', create)
router.get('/', readAll)
router.patch('/:id', updateOne)
router.delete('/:id', deleteOne)
router.patch('/likes/:id', passport.authenticate('jwt', {session:false}), like)

module.exports = router;
