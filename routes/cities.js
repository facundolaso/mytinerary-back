let express = require('express');
let router = express.Router();
let {readAll, readOne, create, deleteOne, updateOne} = require('../controllers/cityController')

router.post('/', create)
router.get('/:id', readOne)
router.get('/', readAll)
router.delete('/:id', deleteOne)
router.patch('/:id', updateOne)

module.exports = router;