let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let validate = require('mongoose-validator');
let Validator = require('../validators/validator');
let Comment = require('./comment');
var ObjectId = mongoose.Schema.Types.ObjectId;

let postSchema = new Schema({
	author: {
		type: String,
		validate: Validator.authorValidator
	},
	hash: {
		type: String,
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
	comments: {
		type: String,
	},
	popularity: {
		type: Number,
	},
	emplacement: {
		type: String,
	},
	comments: [{type: mongoose.Schema.ObjectId, ref : 'Comment'}],
	created : {
		type : Date,
		default : Date.now
	},
});

let Post = mongoose.model('Post', postSchema);
module.exports = Post;