let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let validate = require('mongoose-validator');
let Validator = require('../validators/validator');
let Post = require('./post');
let Categorie = require('./categories');
var ObjectId = mongoose.Schema.Types.ObjectId;

let commentSchema = new Schema({
	author: {
		type: String,
		validate: Validator.authorValidator,
	},
	content: {
		type: String,
		validate: Validator.contentValidator,
	},
	post: [{ type: mongoose.Schema.ObjectId, ref: 'Post' }],
	created : {
		type : Date,
		default : Date.now
	},
});

let Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;