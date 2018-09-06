let mongoose = require('mongoose');
let Post = require('../models/post');

let Seeder = {
	
	seed: function() {
		// mongoose.connection.collections['posts'].drop( function(err) {
		// 	console.log('collection dropped');
		// });
		// this.createContact();
		// console.log('base remplie de 1');
	},

	createContact: function() {
		let post = new Post();		
		post.author = 'dania';
		post.content = "voila";
		post.title = 'Ultra';
		post.mail = 'daniamail@gmail.com';
		post.popularity = 5;
		post.emplacement = 'emplacement?';
		post.save();
	}
}
module.exports = Seeder;