let router = require('express').Router();
let express = require("express");
let app = express();
let mongoose = require('mongoose');
let Seeder = require('../db/seeds/seed');
let Post = require('../db/models/post');
let post_controller = require('../controllers/post_controller');
let Db = require('../db/connexion');

new Seeder();

router.get('/', function(req, res) {
	res.send({status: 'success', msg: "api works"});
});


//Upload
router.post('/upload', post_controller.create);
//soundbank
router.get('/view', post_controller.view);
//Recherche d'un thread/post
router.get('/search', post_controller.search);
//Edition de thread/post
router.put('/edit', post_controller.edit);
//set password
router.put('/setpwd', post_controller.setpwd);
//Suppression de thread/post
router.delete('/delete', post_controller.delete);

module.exports = router;
