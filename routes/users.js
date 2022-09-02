let express = require('express');
let router = express.Router();
let {create} = require('../controllers/userController')


router.post('/', create)

module.exports = router;
