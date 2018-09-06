let router = require('express').Router();
let express = require("express");
let app = express();
let mongoose = require('mongoose');
let Seeder = require('../db/seed');
let Post = require('../app/models/post');
let post_controller = require('../controllers/post_controller');
let Db = require('../db/connexion');


Seeder.seed();

router.get('/', function(req, res) {
	res.send({status: 'success', msg: "yeahyeah"});
});


//Upload
router.post('/upload', post_controller.create);
//soundbank
router.get('/soundbank', post_controller.get_list);
//Recherche d'un thread/post
router.get('/search', post_controller.search);
//Edition de thread/post
router.put('/edit', post_controller.edit);
//set password
router.put('/setpwd', post_controller.setpwd);
//Suppression de thread/post
router.delete('/delete', post_controller.delete);

module.exports = router;
