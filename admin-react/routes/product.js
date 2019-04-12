var express = require('express');
var router = express.Router();
var dataCtrl=require('../controllers/product.controllers');

router.post('/create',dataCtrl.create);
router.post('/',dataCtrl.list);
router.get('/:id',dataCtrl.getById);

module.exports = router;