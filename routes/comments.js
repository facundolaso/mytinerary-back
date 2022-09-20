let express = require('express');
let router = express.Router();
let {create, readAll} = require('../controllers/commentController')


router.post('/', passport.authenticate('jwt', {session:false}), create)
router.get('/', readAll)

module.exports = router;
