var request = require('request-promise');

var username = process.env.DB_USER;
var password = process.env.DB_PASSWORD;
var databaseName = process.env.DB_NAME;
var databaseUrl = process.env.DB_HOST;
var fullUrl = databaseUrl + "command/" + databaseName + "/sql";

var command = function(str){
  return request({
    url: fullUrl ,
    method: "POST",
    auth : {
      'user' : username,
      'pass' : password
    },
    body : str
  })
    .then(function (response) {
      console.log("Command Sent Successfully");
    })
    .catch(function (response) {
      console.log(response.name, "\n", response.message);
    });
}
'use strict'

exports.up = function(next) {
  command('CREATE CLASS Squash EXTENDS V')
  .then(() => command('CREATE PROPERTY Squash.title STRING'))
  .then(() => command('CREATE PROPERTY Squash.content STRING'))
  .then(() => command('ALTER PROPERTY Squash.title MANDATORY true'))
  .then(() => command('ALTER PROPERTY Squash.content MANDATORY true'))
  .then(() => next())
};

exports.down = function(next) {
  command('DROP CLASS Squash')
  .then(() => next())
};
