var express = require('express');
var Users = require('../models/Users.js')

var router = module.exports = express.Router();

//gets all users with user information
router.get('/', function(req, res){
    res.send(Users.find(1));
});

router.post('/', function(req, res){

});



//get specific user information
router.get('/:id', function(req, res){
    res.send(Users.find(req.params.id));
})

router.get('/:id/followers', function(req, res){
    res.send(Users.followers(req.params.id));
})

router.get('/:id/squashes', function(req, res){
    res.send(Users.squashes(req.params.id));
})