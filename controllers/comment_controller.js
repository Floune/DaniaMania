let Post = require('../db/models/post');
let Comment = require('../db/models/comment');
let post_ctrl = require('./post_controller');

exports.create = function(req, res) {
	let comment  = new Comment();
	comment.author = req.body.author;
	comment.content = req.body.content;
	comment.post = req.body.post_id;
	comment.save();
	Post.findOne({_id: req.body.post_id}, function(e, post) {
		post.comments.push(comment._id);
		post.save();
	});
	res.send({status: 'ok', msg: 'comment created'});
}