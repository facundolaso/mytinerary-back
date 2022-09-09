let express = require('express');
let router = express.Router();
let {create, readAll, updateOne, deleteOne} = require('../controllers/itineraryController')


router.post('/', create)
router.get('/', readAll)
router.patch('/:id', updateOne)
router.delete('/:id', deleteOne)

module.exports = router;
