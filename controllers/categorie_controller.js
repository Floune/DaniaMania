let Post = require('../db/models/post');
let Comment = require('../db/models/comment');
let Categorie = require('../db/models/categories');

exports.getlist = function(req, res) {
	Categorie.find({}).exec(function(e, categories) {
		if (e){
			res.send({status: 'error', msg: e});
		}
		else {
			res.send({categories});
		}
	});
};

exports.create = function(req, res) {
	let categorie = new Categorie();
	categorie.name = req.body.name;
	categorie.save();
	res.send({status: 'success', msg: 'category created'});
};

exports.view = function(req, res) {
	Categorie
		.findOne({_id: req.query.id})
		.populate('post')
		.lean()
		.exec(function(err, categorie) {
			if (err) {
				res.send({status: 'error', msg: err});
			} else {
				console.log(categorie);
				res.send({status: 'success', data: categorie});
			}
		});
}
