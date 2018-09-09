let router = require('express').Router();
let express = require("express");
let app = express();
let Db = require('../db/connexion');
let mongoose = require('mongoose');
let Seeder = require('../db/seeds/seed');
let Post = require('../db/models/post');
let post_controller = require('../controllers/post_controller');
let comment_controller = require('../controllers/comment_controller');
let categorie_controller = require('../controllers/categorie_controller');

// new Seeder();

router.get('/', function(req, res) {
	res.send({status: 'success', msg: "api works"});
});

//categories
router.post('/categories/upload', categorie_controller.create); //create categorie
router.get('/categories/getlist', categorie_controller.getlist); //list categories
router.get('/categories/view', categorie_controller.view); //view categorie
//threads
router.post('/post/upload', post_controller.create); //upload
router.get('/post/view', post_controller.view); //post view
router.get('/post/search', post_controller.search); //recherche
router.put('/post/setpwd', post_controller.setpwd); //set pwd
router.put('/post/edit', post_controller.edit); //édition
router.delete('/post/delete', post_controller.delete); //delete

//comments
router.post('/comment/upload', comment_controller.create); //create comment


module.exports = router;
