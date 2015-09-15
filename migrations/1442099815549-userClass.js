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
  command('CREATE CLASS User EXTENDS V')
  .then(() => command('CREATE PROPERTY USER.name STRING'))
  .then(() => command('CREATE PROPERTY USER.username STRING'))
  .then(() => command('CREATE PROPERTY USER.github_id STRING'))
  .then(() => command('CREATE PROPERTY USER.avatar_url STRING'))
  .then(() => command('CREATE PROPERTY USER.email STRING'))
  .then(() => command('CREATE PROPERTY USER.updatedAt Datetime'))
  .then(() => command('CREATE PROPERTY USER.createdAt Datetime'))
  .then(() => command('ALTER PROPERTY User.name MANDATORY true'))
  .then(() => command('ALTER PROPERTY User.username MANDATORY true'))
  .then(() => command('ALTER PROPERTY User.github_id MANDATORY true'))
  .then(() => command('CREATE INDEX User.username UNIQUE'))
  .then(() => command('CREATE INDEX User.github_id UNIQUE'))
  .then(() => next())
  
};

exports.down = function(next) {
  command('DROP CLASS User')
  .then(() => next())
};
