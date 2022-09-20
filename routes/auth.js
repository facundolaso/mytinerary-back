let express = require('express');
let router = express.Router();
let {create, signUp, updateUser, verifyMail, signIn, signOut} = require('../controllers/userController')


router.post('/', create)
router.post('/signup' ,signUp)
router.patch('/:id', updateUser)
router.get('/verification/:code',verifyMail)
router.post('/signin' ,signIn)
router.post('/signout' ,signOut)




module.exports = router;
