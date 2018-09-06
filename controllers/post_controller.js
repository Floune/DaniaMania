let Post = require('../models/post');

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

exports.get_list = function(req, res) {
	Post.find({}).exec(function(e, posts) {
		if (e)
			res.send({status: 'error', msg: e});
		else 
			res.send({status: 'success', msg: 'success', d: posts});
	});
};

exports.search = function(req, res) {
	Post.find(req.query).exec(function(e, post) {
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
