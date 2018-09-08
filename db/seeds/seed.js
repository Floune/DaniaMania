let mongoose = require('mongoose');
let Post = require('../models/post');
let Comment = require('../models/comment');
let Tag = require('../models/tags');
let Categories = require('../models/categories');

class Seeder {
	
	constructor() {
		// this.dropDbs();
		// this.seed();
	}

	dropDbs() {
		mongoose.connection.collections['posts'].drop( function(err) {
			console.log('collection dropped');
		});
	}

	seed() {
		let gru = this.seedComment('Miroslav');
		let gra = this.seedComment('Jonji');
		let post = new Post();		
		post.author = 'dania';
		post.content = "voila";
		post.title = 'Ultra';
		post.mail = 'daniamail@gmail.com';
		post.popularity = 5;
		post.comments.push (gru._id, gra._id);
		post.save();
		console.log('posts seeded');
	}

	seedComment(name) {
		let comment = new Comment();
		comment.author = name;
		comment.content = 'cestnuuuuuul';
		comment.save();
		console.log('comments seeded');
		return (comment);
	}

}
module.exports = Seeder;