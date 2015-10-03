require('dotenv').load()
require('../ext')
var express = require('express')
var app = express()
var Path = require('path')

var port = process.env.PORT || 4000
var host = process.env.HOST || 'http://localhost:' + port


// Provide a browserified file at a specified path
var browserify = require('browserify-middleware')
var babelify = require("babelify")

var vendorLibs = ['mithril','socket.io-client']
app.get('/js/vendor-bundle.js', browserify(vendorLibs))

app.get('/js/app-bundle.js',
  browserify('./client/app-bundle/index.js', {
    transform: [babelify],
    bundleExternal: false
  }))

// CSS files
var sass = require('node-sass-endpoint')
app.get('/css/app-bundle.css',
  sass.serve('./client/app-bundle/styles/app.scss'))


// Non-js static files
var assetFolder = Path.resolve(__dirname, '../client/public')
app.use(express.static(assetFolder))

//set up router for api endpoints
var router = express.Router();


require('./Auth').mount(app, host);
require('./Sockets').mount(app, port);
app.use('/api/users', require('./api/users-api'));
app.use('/api/squashes', require('./api/squashes-api'));

//
// Support browser history pushstate.
// NOTE: Make sure this route is always last.
//
app.get('/*', function(req, res){
  res.sendFile( assetFolder + '/index.html' )
})

console.log("Listening on port", port)
