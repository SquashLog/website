var Promise = require('bluebird');
var Users = module.exports;
var rp = require('request-promise');
var db = require('../lib/db.js');
var User = module.exports;

User.create = function (user) {
  var query = 'INSERT INTO User (name, username, email, avatar_url, github_id) VALUES ("'
    + user.name + '","' + user.username + '","' + user.email + '","' + user.avatar_url + '","' + user.github_id + '")'
  return db.exec(query)
}

User.find = function (username) {
  var query = 'SELECT FROM User WHERE username="' + username + '"';
  return db.exec(query)
}