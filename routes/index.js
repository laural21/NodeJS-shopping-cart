var express = require('express');
var router = express.Router();
//var Promise = require('bluebird')  
//var AppDAO = require('../dao')  
//var ItemRepository = require('../itemrepository')  
//var CartRepository = require('../cartrepository')

/* GET home page. */
router.get('/', function(req, res, next) {
/*
	var dao = new AppDAO('./database.sqlite3');
  var itemRepo = new ItemRepository(dao);
  var cartRepo = new CartRepository(dao);
  items = itemRepo.getAll().then((items) => {
  	return items});
  console.log(items);
  var itemRows = [];
  var rowSize = 3;
  for (var i = 0; i < items.length; i += rowSize){
  	itemRows.push(items.slice(i, i+rowSize));
  }
  */
  res.render('shop/index', { title: 'sHOP' })

});

module.exports = router;
