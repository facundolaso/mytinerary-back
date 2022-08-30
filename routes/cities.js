let express = require('express');
let router = express.Router();
let {readAll, readOne, create} = require('../controllers/cityController')

router.post('/', create)
router.get('/:id', readOne)
router.get('/', readAll)

module.exports = router;