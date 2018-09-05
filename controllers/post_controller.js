let Post = require('../app/models/post.js');
let bcrypt = require('bcrypt');
const saltRounds = 10;


exports.create = function(req, res) {
	let post = new Post();		
	post.author = req.body.author;
	post.mail = req.body.mail;
	post.popularity = req.body.popularity;	
	post.emplacement = req.body.emplacement;
	post.title = req.body.title;
	post.content = req.body.content;
	post.validate(function(e) {
		if (e) {
			res.send({status: 'error', msg: "error"});
		}
		else {
			post.save(function() {
				res.send({status: 'success', msg: 'success'});
			})
		}
	});
};

exports.edit = function(req, res) {
	Post.findOne({_id: req.body.id}, function(e, post) {
		let pwd = req.body.pwd;
		let hash = post.hash;
		bcrypt.compare(pwd, hash, function(err, response) {
			if(response) {
				Post.findOneAndUpdate({_id: req.body.id}, {$set:req.body}, function(e, post) {
					if (e) {
						res.send({status: 'error', msg: 'post introuvable'});
					}
					else {
						res.send({status: 'success', msg: 'success'});
					}
				});
			} else {
				res.send({status: 'error', msg: 'password not matching'});
			} 
		});
	});
};

exports.get_list = function(req, res) {
	Post.find({}).exec(function(e, posts) {
		if (e) {
			res.send({status: 'error', msg: e});
		}
		else {
			res.send({status: 'success', msg: 'success', d: posts});
		}
	});
};

exports.search = function(req, res) {
	console.log(req.query);
	Post.find(req.query, function(e, post) {
		res.send({status: 'success', msg: 'success', data: post});
	});
};

exports.delete = function(req, res) {
	Post.findOne({_id: req.query.id}, function(e, post) {
		let pwd = req.query.pwd;
		let hash = post.hash;
		bcrypt.compare(pwd, hash, function(err, response) {
			if(response) {
				Post.findOneAndRemove({_id: req.query.id}, function(e, post) {
					if (e) {
						res.send({status: 'error', msg: 'post'});
					}
					else {
						res.send({status: 'success', msg: 'success'});
					}
				});
			} else {
				res.send({status: 'error', msg: 'password not matching'});
			} 
		});
	});
}

exports.setpwd = function(req, res) {
	let pwd = req.body.hash;
	Post.findOne({_id: req.body.id}, function(e, post) {
		if (e) {
			res.send({status: 'error', msg: e});
		} else {
			bcrypt.hash(pwd, saltRounds, function(err, hash) {
				post.hash = hash;
				post.save();
				res.send({status: "success", msg: "password créé"});
			});
		}
	});
};
