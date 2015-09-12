var express = require('express');
var Squashes = require('../models/Squashes');

var router = module.exports = express.Router();

//gets all Squashes with user information
router.get('/', function(req, res){
    res.send(Squashes.squashes());
});

router.post('/', function(req, res){

});

//get all user squashes
router.get('/:id/', function(req, res){
    res.send(Squashes.squashes(req.params.id));
})

router.get('/:id/comments', function(req, res){
    res.send(Squashes.comments(req.params.id));
})

//squashes/comments
