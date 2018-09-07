let Post = require('../db/models/post');
let Comment = require('../db/models/comment');
let comment_ctrl = require('./comment_controller');

exports.create = function(req, res) {
	let post = new Post();		
	post.author = req.body.author;
	post.mail = req.body.mail;
	post.popularity = req.body.popularity;	
	post.emplacement = req.body.emplacement;
	post.title = req.body.title;
	post.content = req.body.content;
	post.validate(function(e) {
		if (e) 
			res.send({status: 'error', msg: "validation error", data: e});
		else {
			post.save(function() {
				res.send({status: 'success', msg: 'item created'});
			});
		}
	});
};

exports.edit = function(req, res) {
	Post.findOneAndUpdate({_id: req.body.id}, {$set:req.body}, {runValidators: true}, function(e, post) {
		if (e)
			res.send({status: 'error', msg: e});
		else
			res.send({status: 'success', msg: 'item edited'});
	});
};

exports.view = function(req, res) {
	Post.findOne({_id: req.query.id}, function(e, post) {
		if (post){
			Post.findOne({_id: req.query.id}).populate('comments').exec(function (err, comments) { //populate pour acceder aux comments
				if (err) 
					return (err);
				else{
					res.send({status: 'success', msg: 'success', data: {thread: post, commentaires: comments.comments}});
				}
			});
		} else 
			res.send({status: 'error', msg: e});
		});
};

exports.search = function(req, res) {
	Post.find({}).exec(function(e, post) {
		if (e)
			res.send({status: 'error', msg: e});
		else
			res.send({status: 'success', msg: 'success', data: post});
	});
};

exports.delete = function(req, res) {
	Post.findOneAndRemove({_id: req.query.id}, function(e, post) {
		if (e)
			res.send({status: 'error', msg: e});
		else
			res.send({status: 'success', msg: 'item deleted'});
	});
};

exports.setpwd = function(req, res) {
	console.log('password set !');
};
