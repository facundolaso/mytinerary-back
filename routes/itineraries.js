let express = require('express');
let router = express.Router();
let {create, updateOne, deleteOne} = require('../controllers/itineraryController')


router.post('/', create)
router.patch('/:id', updateOne)
router.delete('/:id', deleteOne)

module.exports = router;
