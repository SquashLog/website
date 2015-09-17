var express = require('express');
var Squashes = require('../models/Squash');

var router = module.exports = express.Router();

//gets all Squashes with user information
router.get('/', function(req, res){
    res.send(Squashes.squashes());
});

router.post('/', function(req, res){

});

//get all user squashes
router.get('/:squashId/', function(req, res){
    res.send(Squashes.find(req.params.squashId));
})

router.get('/:squashId/comments', function(req, res){
    res.send(Squashes.comments(req.params.squashId));
})

//squashes/comments
