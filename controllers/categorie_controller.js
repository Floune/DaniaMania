let Post = require('../db/models/post');
let Comment = require('../db/models/comment');
let Categorie = require('../db/models/categories');

exports.getlist = function(req, res) {
	Categorie.find({}).exec(function(e, categories) {
		if (e)
			res.send({status: 'error', msg: e});
		else {
			res.send({status: 'success', msg: 'success', data: categories});
		}
	});
};

exports.create = function(req, res) {
	let categorie = new Categorie();
	categorie.name = req.body.name;
	categorie.save();
	res.send({status: 'success', msg: 'success'});
};
