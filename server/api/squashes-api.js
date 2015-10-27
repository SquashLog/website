var express = require('express');
var API     = require('../lib/api')
var Squashes = require('../models/Squash_mock');
var Squash   = require('../models/Squash');

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

router.get('/:squashId/content', function (req, res) {
    var id = parseInt(req.params.squashId, 10)
    if (! id) return res.sendStatus(404)

    Squash.getContent(id)
      .then(function(content) {
        res.header('Content-Type', 'text/html; charset=utf-8')
        res.status(200).send(content)
      })
      .catch( Squash.NotFound, API.prep(404, res) )
      .catch( API.catchErrors(res) )
})

router.get('/:squashId/comments', function(req, res){
    res.send(Squashes.comments(req.params.squashId));
})

//squashes/comments
