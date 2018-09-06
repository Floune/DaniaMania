let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let validate = require('mongoose-validator');
let Validator = require('../db/validators/validator');


let postSchema = new Schema({
	author: {
		type: String,
		validate: Validator.authorValidator
	},
	hash: {
		type: String,
	},
	posted_at: {
		type: Date,
	},
	updated_at: {
		type: Date,
	},
	mail:  {
		type: String,
		lowercase: true,
		validate: Validator.emailValidator
	},
	title: {
		type: String,
		validate: Validator.titleValidator
	},
	content: {
		type: String,
		validate: Validator.contentValidator
	},
	tags:  {
		type: String,
	},
	popularity: {
		type: Number,
	},
	emplacement: {
		type: String,
	},

});

let Post = mongoose.model('Post', postSchema);
module.exports = Post;