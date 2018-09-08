let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let validate = require('mongoose-validator');
let Validator = require('../validators/validator');
let Comment = require('./comment');
let ObjectId = mongoose.Schema.Types.ObjectId;
let Categories = require('./categories');
let Post = require('./post');

let tagSchema = new Schema({
	name: {
		type: String,
	},
	post: [{type: mongoose.Schema.ObjectId, ref : 'Post'}],

});

let Tag = mongoose.model('Tag', tagSchema);
module.exports = Tag;