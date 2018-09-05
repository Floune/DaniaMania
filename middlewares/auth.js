let Post = require('../app/models/post.js');
let bcrypt = require('bcrypt');

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
					res.send({status: 'success', msg: 'sukssé'});
					next();
				} else {
					res.send({status: 'error', msg: 'eraur'});
				} 
			});
			
		} else {
			res.send({status: 'error', msg: 'post non trouvé', data: e});
		}
	});
};

exports.setpwd = function(req, res, next) {
	res.send('okokokokoko');
}
