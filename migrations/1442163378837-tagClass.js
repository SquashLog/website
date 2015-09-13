var request = require('request-promise');

var username = process.env.DB_USER;
var password = process.env.DB_PASSWORD;
var databaseName = process.env.DB_NAME;
var databaseUrl = process.env.DB_URL;
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
  command('CREATE CLASS Tag EXTENDS V')
  .then(() => command('CREATE PROPERTY Tag.name STRING'))
  .then(() => command('ALTER PROPERTY Tag.name MANDATORY true'))
  .then(() => command('CREATE INDEX Tag.name UNIQUE'))
  .then(() => next())
};

exports.down = function(next) {
  command('DROP CLASS Tag')
  .then(() => next())
};
