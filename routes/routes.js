let router = require('express').Router();
let express = require("express");
let app = express();
let mongoose = require('mongoose');
let Seeder = require('../db/seed');
let Post = require('../app/models/post');
let bcrypt = require('bcrypt');
const saltRounds = 10;
mongoose.connect('mongodb://localhost:27017/posts', {useNewUrlParser: true});
Seeder.seed();

router.get('/', function(req, res) {
	res.send({status: 'success', msg: "yeahyeah"});
});
//Upload
router.post('/upload/', function(req, res) {
	var post = new Post();		
	post.author = req.body.author;
	post.mail = req.body.mail;
	post.popularity = req.body.popularity;	
	post.emplacement = req.body.emplacement;
	post.validate(function(e) {
		if (e) {
			res.send({status: "error", msg: "erreur de validation", data: e});
		}
		else {
			post.save(function(e) {
				res.send({status: "success", msg: "Post créé"});
			});
		}
	});
});

router.put('/setpwd', function(req, res) {
	let pwd = req.body.pwd;
	Post.findOne({_id: req.body.id}, function(e, post) {
		bcrypt.hash(pwd, saltRounds, function(err, hash) {
			post.pwd = hash;
			post.save();
			res.send({status: "success", msg: "password créé"});
		});
	});
});

//soundbank
router.get('/soundbank', function(req, res) {

	Post.find({}).exec(function(e, posts) {
		if (e) {
			res.send({status: "error", msg: "erreur", data: e});
		}

		res.send({status: "success", msg: "success", posts});
	});
});

//Recherche d'un post
router.get('/search', function(req, res) {

});

//Edition de post
router.put('/edit', function(req, res) {
	Post.findOneAndUpdate({_id: req.body.id}, {$set:req.body}, function(e, post) {
		let hash = post.pwd;
		bcrypt.compare(req.body.hash, hash, function(err, response) {
			if (response == false) {
				res.send({status: 'error', msg: err});
			} else {
				res.send({status: "success", msg: "Contact mis à jour"});
			}
		});
	});
});

//Suppression de post
router.delete('/delete/', function(req, res) {
	// if (e) {
	// 	res.send({status: "error", msg: "erreur", data: e});
	// }
	console.log(req.query);
	res.send({status: "success", msg: "success"});
});

module.exports = router;
