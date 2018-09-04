let mongoose = require('mongoose');
let Post = require('../app/models/post');

let Seeder = {
	
	seed: function() {
		// mongoose.connection.collections['contacts'].drop( function(err) {
		// 	console.log('collection dropped');
		// });
		// this.createContact();
		// console.log('base remplie de 1');
	},

	createContact: function() {
		let post = new Post();		
		post.author = 'dania';
		post.pwd = '5';
		post.mail = 'daniamail';
		post.popularity = 5;
		post.emplacement = 'emplacement?';
		post.save();
	}
}
module.exports = Seeder;