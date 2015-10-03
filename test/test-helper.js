process.env.NODE_ENV = 'test'
require('../ext')
global.Promise = require('bluebird')

// Mocha "helpers" to support coroutines tests
global.beforeEach_ = function (f) { beforeEach( Promise.coroutine(f) ) }
global.it_ = function (description, f) { it( description, Promise.coroutine(f) ) }
global.xit_ = function (description, f) { xit( description, f ) }
global.it_.only = function (description, f) { it.only( description, Promise.coroutine(f) ) }

// The following allows you to require files independent of
// the location of your test file.
// Example:
//  var User = require(__server + '/models/user.js')
//
global.__server = __dirname + '/../server'
global.__client = __dirname + '/../client'

// The following makes `expect` available in every test file
// without the need to require chai.
var chai = require('chai')
global.expect = chai.expect

// Here is the object you can attach any helper functions used across
// several test files.
global.TestHelper = {}

//
// Mock apps for API testing
//
var express = require('express')

TestHelper.createApp = function () {
  var app = express()
  app.use(require('body-parser').json())

  app.testReady = function () {
    // Log all errors
    app.use(function (err, req, res, next) {
      console.error("==Error==")
      console.error("   " + err.stack)
      next(err)
    })
  }
  return app
}

//
// Database Seeding
//
var models = [
  'User',
  'Squash',
  'Comment',
  'Tag'
].map( m => require(__server + '/models/' + m) )

var modelsByLabel = models.reduce(function(acc, model) {
  acc[model.label] = model
  return acc
}, {})


var db      = require(__server + '/lib/db.js')

TestHelper.seed = function (nodes, edges) {
  edges = edges || []
  var results = {}

  var nodePromises = Object.keys(nodes).map(function(label) {
    var model = modelsByLabel[label]
    return Promise.all( nodes[label].map(model.create) )
                  .then( rows => results[label] = rows )
  })


  return Promise.all(nodePromises)
    .then(function() {

      var edgePromises = edges.map(function(edgeString) {
        var edgeParams = edgeString.split(/ +/)
        // Convert indicies into node ids
        edgeParams[0] = parseLabelNodeId(results, edgeParams[0])
        edgeParams[2] = parseLabelNodeId(results, edgeParams[2])

        return db.relate_p.apply(db, edgeParams)
      })

      return Promise.all(edgePromises)
    })
    .return(results)
}


function parseLabelNodeId (results, string) {
  var split = string.split('#')
  var label = split[0]
  var model = modelsByLabel[ label ]
  if (! model) throw new Error("[TestHelper.seed] Model does not exist:" + label)

  var node = results[ label ][ parseInt(split[1]) ]
  if (! node) throw new Error("[TestHelper.seed] No node for label " +label+ " exists at index " + split[1])

  return node.id
}
