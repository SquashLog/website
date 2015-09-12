"use strict";
exports.name = "add_user_github_id_and_constraints";

exports.up = function (db) {
  // @todo implementation
  db.exec('ALTER PROPERTY User.name MANDATORY true')
  	.then(function (response){
    console.log(response.results);
  });

  db.exec('ALTER PROPERTY User.username MANDATORY true')
  	.then(function (response){
    console.log(response.results);
  });
  db.exec('CREATE PROPERTY User.github_id string')
  	.then(function (response){
    console.log(response.results);
  });
  db.exec('ALTER PROPERTY User.github_id MANDATORY true')
  	.then(function (response){
    console.log(response.results);
  });
  db.index.create({
    name: 'User.username',
    type: 'unique'
  })
  .then(function(index){
    console.log('Created index: ', index);
  });
  db.index.create({
    name: 'User.github_id',
    type: 'unique'
  })
  .then(function(index){
    console.log('Created index: ', index);
  });
  
};

exports.down = function (db) {
  // @todo implementation
  db.exec('ALTER PROPERTY User.name MANDATORY false')
  	.then(function (response){
    console.log(response.results);
  });
  db.exec('ALTER PROPERTY User.username MANDATORY false')
  	.then(function (response){
    console.log(response.results);
  });
  User.property.drop('github_id')
  .then(function () {
    console.log('Property deleted.');
  });
  db.exec('ALTER PROPERTY User.github_id MANDATORY false')
  	.then(function (response){
    console.log(response.results);
  });
  db.exec('DROP INDEX User.username')
  	.then(function (response){
    console.log(response.results);
  });
  db.exec('DROP INDEX User.github_id')
  	.then(function (response){
    console.log(response.results);
  });
};

