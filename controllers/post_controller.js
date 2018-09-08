let Post = require('../db/models/post');
let Comment = require('../db/models/comment');

exports.create = function(req, res) {
	let post = new Post();		
	post.author = req.body.author;
	post.mail = req.body.mail;
	post.popularity = req.body.popularity;	
	post.emplacement = req.body.emplacement;
	post.categories = req.body.categorie_id;
	post.tags = req.body.tag_id;
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
	Post.findOne({_id: req.query.id}).populate('comments').populate('categories').populate('tags').exec(function (err, comments) { //populate pour acceder aux comments
		if (err) 
			res.send({status: 'error', msg: err});
		else
			res.send({status: 'success', msg: 'success', data: comments});
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
	console.log('password set !ctrl');
};
