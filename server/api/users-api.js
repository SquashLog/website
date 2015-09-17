var express = require('express');
var Users = require('../models/Users_mock.js')

var router = module.exports = express.Router();

//gets all users with user information
router.get('/', function(req, res){
    res.send(Users.all());
});

router.post('/', function(req, res){

});

//get specific user information
router.get('/:username', function(req, res){
    res.send(Users.find(req.params.username));
})

router.get('/:username/followers', function(req, res){
    res.send(Users.followers(req.params.username));
})

router.get('/:username/squashes', function(req, res){
    res.send(Users.squashes(req.params.username));
})