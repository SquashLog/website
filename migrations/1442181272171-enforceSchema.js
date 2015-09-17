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
  command('ALTER CLASS Squash STRICTMODE enable')
  .then(() => command('ALTER CLASS User STRICTMODE enable'))
  .then(() => command('ALTER CLASS Comment STRICTMODE enable'))
  .then(() => command('ALTER CLASS Tag STRICTMODE enable'))
  .then(() => next())
};

exports.down = function(next) {
  command('ALTER CLASS Squash STRICTMODE disable')
  .then(() => command('ALTER CLASS User STRICTMODE disable'))
  .then(() => command('ALTER CLASS Comment STRICTMODE disable'))
  .then(() => command('ALTER CLASS Tag STRICTMODE disable'))
  .then(() => next())
};
