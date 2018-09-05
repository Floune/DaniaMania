let router = require('express').Router();
let express = require("express");
let app = express();
let mongoose = require('mongoose');
let Seeder = require('../db/seed');
let Post = require('../app/models/post');
let post_controller = require('../controllers/post_controller');

mongoose.connect('mongodb://localhost:27017/posts', {useNewUrlParser: true});
Seeder.seed();

router.get('/', function(req, res) {
	res.send({status: 'success', msg: "yeahyeah"});
});


//Upload
router.post('/upload', post_controller.create);
//soundbank
router.get('/soundbank', post_controller.get_list);
//Recherche d'un post
router.get('/search', post_controller.search);
//Edition de post
router.put('/edit', post_controller.edit);
//set password
router.put('/setpwd', post_controller.setpwd);
//Suppression de post
router.delete('/delete', post_controller.delete);

module.exports = router;
