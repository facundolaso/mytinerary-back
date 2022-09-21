let express = require('express');
let router = express.Router();
let {create, readAll, updateComment, deleteComment} = require('../controllers/commentController')
let passport = require('../config/passport')


router.post('/', passport.authenticate('jwt', {session:false}), create)
router.patch('/', passport.authenticate('jwt', {session:false}), updateComment)
router.delete('/:id', passport.authenticate('jwt', {session:false}), deleteComment)
router.get('/', readAll)

module.exports = router;
