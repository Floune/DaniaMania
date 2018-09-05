var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
	author: {
		type: String,
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
	},
	title: {
		type: String,
	},
	content: {
		type: String,
	},
	style:  {
		type: String,
	},
	popularity: {
		type: Number,
	},
	emplacement: {
		type: String,
	},
});

var Post = mongoose.model('Contact', postSchema);
module.exports = Post;