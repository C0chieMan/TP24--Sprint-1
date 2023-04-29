var express = require('express');

var itemC = require('../controller/itemController')

var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Items' });
});

router.get("/items", itemC.getItemList)
router.get("/item/:id", itemC.getItem)

module.exports = router;