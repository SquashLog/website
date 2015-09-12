var express = require('express');
var Users = require('../models/Users.js')

var router = module.exports = express.Router();

//gets all users with user information
router.get('/', function(req, res){
    res.send(Users.getUser(1));
});

router.post('/', function(req, res){

});



//get specific user information
router.get('/:id', function(req, res){
    res.send(Users.getUser(req.params.id));
})

router.get('/:id/followers', function(req, res){
    res.send(Users.getFollowers(req.params.id));
})

router.get('/:id/squashes', function(req, res){
    res.send(Users.getSquashes(req.params.id));
})




//users/followers
//users/squashes

