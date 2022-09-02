let express = require('express');
let router = express.Router();
let {create, updateOne} = require('../controllers/itineraryController')


router.post('/', create)
router.patch('/:id', updateOne)

module.exports = router;
