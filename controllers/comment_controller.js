let Post = require('../db/models/post');
let Comment = require('../db/models/comment');

exports.cmList = function(id) {
	console.log(id);
	Post.findOne({_id: id}).populate('comments').exec(function (err, comments) { //populate pour acceder aux comments
		if (err) 
			return (err);
		else{
			console.log(comments);
		}
	});
}