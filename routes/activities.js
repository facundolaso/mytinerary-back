let express = require('express');
let router = express.Router();
let {create, readAll} = require('../controllers/activityController')


router.post('/', create)
router.get('/', readAll)

module.exports = router;
