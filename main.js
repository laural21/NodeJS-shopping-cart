const Promise = require('bluebird')  
const AppDAO = require('./dao')  
const ItemRepository = require('./itemrepository')  
const CartRepository = require('./cartrepository')

function main() {  
  const dao = new AppDAO('./database.sqlite3')
  const itemRepo = new ItemRepository(dao)
  const cartRepo = new CartRepository(dao)
  let projectId
  
  const items = [
	{
	imgPath: './public/images/granola.jpg',
	name: 'Hej Bar Coconut',
	description: 'turpis egestas sed tempus urna et pharetra pharetra massa massa',
	price: 1.99
	},
	{
	imgPath: './public/images/protein.png',
	name: 'STRIPPD Vegan Protein Powder',
	description: 'turpis egestas sed tempus urna et pharetra pharetra massa massa',
	price: 14.89
	},
	{
	imgPath: './public/images/almbutter.jpg',
	name: 'Biona Organic Almond Butter',
	description: 'turpis egestas sed tempus urna et pharetra pharetra massa massa',
	price: 5.00
	},
	{
	imgPath: './public/images/cocochipshoney.jpg',
	name: 'Bare Coconut Chips Honey',
	description: 'turpis egestas sed tempus urna et pharetra pharetra massa massa',
	price: 2.35
	}
	];
	cartRepo.createTable();
  itemRepo.createTable();
  /*
  	itemRepo.create(items[0].name, items[0].imgPath, items[0].description, items[0].price))
  */
  	for (var i = 0; i < items.length; i++) {
  		itemRepo.create(i.name, i.imgPath, i.description, i.price);
  	}
}

main();