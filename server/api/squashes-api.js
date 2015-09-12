var express = require('express');
var Users = require('../models/Squashes.js');

var router = module.exports = express.Router();

//gets all users with user information
router.get('/', function(req, res){
    res.send(Users.getSquashes(1));
});

router.post('/', function(req, res){

});


//get all user squahes
router.get('/:id/', function(req, res){
    res.send(Users.getSquashes(1));
})

