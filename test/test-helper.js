process.env.NODE_ENV = 'test'

var Promise = require('bluebird')
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
