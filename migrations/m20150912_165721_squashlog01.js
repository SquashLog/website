"use strict";
exports.name = "squashlog01";

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
  db.exec('CREATE PROPERTY User.githubid string')
  	.then(function (response){
    console.log(response.results);
  });
  db.exec('ALTER PROPERTY User.githubid MANDATORY true')
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
    name: 'User.githubid',
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
  User.property.drop('githubid')
  .then(function () {
    console.log('Property deleted.');
  });
  db.exec('ALTER PROPERTY User.githubid MANDATORY false')
  	.then(function (response){
    console.log(response.results);
  });
  db.exec('DROP INDEX User.username')
  	.then(function (response){
    console.log(response.results);
  });
  db.exec('DROP INDEX User.githubid')
  	.then(function (response){
    console.log(response.results);
  });
};

