let express = require('express');
let router = express.Router();
let {create} = require('../controllers/itineraryController')


router.post('/', create)

module.exports = router;
