require('../ext')
var express = require('express')
var app = express()
var Path = require('path')

// Provide a browserified file at a specified path
var browserify = require('browserify-middleware')
var babelify = require("babelify")

var shared = ['mithril', './ext']
app.get('/js/vendor-bundle.js', browserify(shared))

app.get('/js/app-bundle.js',
  browserify('./client/app-bundle/index.js', {
    transform: babelify,
    external: shared
  }))

// Non-js static files
var assetFolder = Path.resolve(__dirname, '../client/public')
app.use(express.static(assetFolder))


//
// Support browser history pushstate.
// NOTE: Make sure this route is always last.
//
app.get('/*', function(req, res){
  res.sendFile( assetFolder + '/index.html' )
})

var port = process.env.PORT || 4000
app.listen(port)
console.log("Listening on port", port)
