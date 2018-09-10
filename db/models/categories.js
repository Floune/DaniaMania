let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let validate = require('mongoose-validator');
let Validator = require('../validators/validator');
let Comment = require('./comment');
let ObjectId = mongoose.Schema.Types.ObjectId;
let Post = require('./post');

let categorieSchema = new Schema({
	name: {
		type: String,
	},
	posts: [
		{
			type: mongoose.Schema.ObjectId,
			ref : 'Post'
		}
	],
});

let Categories = mongoose.model('Categories', categorieSchema);
module.exports = Categories;