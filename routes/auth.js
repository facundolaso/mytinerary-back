let express = require('express');
let router = express.Router();
let {create, signUp, updateUser} = require('../controllers/userController')


router.post('/', create)
router.post('/signup' ,signUp)
router.patch('/:id', updateUser)

module.exports = router;
