process.env.NODE_ENV = 'test'
require('../ext')

Promise.longStackTraces()
Promise.onPossiblyUnhandledRejection(function(error) {
  throw error;
})

var fs   = Promise.promisifyAll(require("fs"))
var path = require('path')


// The following allows you to require files independent of
// the location of your test file.
// Example:
//  var User = require(__root + '/models/user.js')
//
global.__server = path.join(__dirname, '../server')
global.__client = path.join(__dirname, '../client')
var db = require(__server + '/lib/db')

// The following makes `expect` available in every test file
// without the need to require chai.
global.expect = require('chai').expect

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


TestHelper.seed = function (fixtures) {
  var batches = []

  for(var table in fixtures) {
    fixtures[table].forEach(function (item) {
      batches.push(db.create(table, item))
    })
  }
  return db.batchExec(batches)
}


var tables = ['User', 'Squash', 'Comment']

TestHelper.truncateData = function () {
  var promises = tables.map(function (table) {
    return db.exec('TRUNCATE CLASS ' + table + ' UNSAFE')
  })

  return Promise.all(promises)
}
