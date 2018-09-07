let Post = require('../db/models/post.js');
let bcrypt = require('bcrypt');
const saltRounds = 10;

exports.check = function(req, res, next) {
	let id;
	if (req.query.id) {
		id = req.query.id;
		pwd = req.query.pwd;
	} else {
		id = req.body.id;
		pwd = req.body.pwd;
	}
	Post.findOne({_id: id}, function(e, post) {
		if (post) {
			let hash = post.hash;
			bcrypt.compare(pwd, hash, function(err, response) {
				if(response) {
					next();
				} else {
					res.send({status: 'error', msg: 'password error'});
				} 
			});
			
		} else {
			res.send({status: 'error', msg: 'post non trouvé', data: e});
		}
	});
};

exports.setpwd = function(req, res, next) {
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
	next();
};
