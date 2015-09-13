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
	command('CREATE CLASS Follows EXTENDS E')
  .then(() => command('CREATE CLASS AuthorOf EXTENDS E'))
  .then(() => command('CREATE CLASS FavoritedBy EXTENDS E'))
  .then(() => command('CREATE CLASS ChildOf EXTENDS E'))
  .then(() => command('CREATE CLASS TagedWith EXTENDS E'))
  .then(() => next());
};

exports.down = function(next) {
  command('DROP CLASS Follows')
  .then(() => command('DROP CLASS AuthorOf'))
  .then(() => command('DROP CLASS FavoritedBy'))
  .then(() => command('DROP CLASS ChildOf'))
  .then(() => command('DROP CLASS TagedWith'))
  .then(() => next())
};
