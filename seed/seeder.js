var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true}, (err, client) => {
	if (err){
		console.log('Error connecting to the database');
		return;
		}
});
var products = [
	new Product({
		imgPath: './public/images/granola.jpg',
		name: 'Hej Bar Coconut',
		description: 'turpis egestas sed tempus urna et pharetra pharetra massa massa',
		price: 1.99
	}),
	new Product({
		imgPath: './public/images/protein.png',
		name: 'STRIPPD Vegan Protein Powder',
		description: 'turpis egestas sed tempus urna et pharetra pharetra massa massa',
		price: 14.89
	}),
	new Product({
		imgPath: './public/images/almbutter.jpg',
		name: 'Biona Organic Almond Butter',
		description: 'turpis egestas sed tempus urna et pharetra pharetra massa massa',
		price: 5.00
	}),
	new Product({
		imgPath: './public/images/cocochipshoney.jpg',
		name: 'Bare Coconut Chips Honey',
		description: 'turpis egestas sed tempus urna et pharetra pharetra massa massa',
		price: 2.35
	})
];

var done = 0;
for (var i = 0; i < products.length; i++) {
	products[i].save(function(err,result){
		done++;
		if (done === products.length) {
			exit();
		}
	});
}

function exit() {
	mongoose.disconnect();
}