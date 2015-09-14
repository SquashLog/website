var Promise = require('bluebird');
var Users = module.exports;
var rp = require('request-promise');
var db = require('../lib/db.js');
var User = module.exports;

User.create = function (user) {
  var query = db.create('User', user)
  return db.batchExec([query])
}

User.find = function (username) {
  var query = `SELECT FROM User WHERE username="${username}"`
  return db.exec(query)
}