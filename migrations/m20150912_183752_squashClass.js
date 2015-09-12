"use strict";
exports.name = "squashClass";

exports.up = function (db) {
  // @todo implementation
  db.class.create('V', 'Squash')
  .then(function (Squash) {
    console.log('Created class: ' + Squash);
  });
  Squash.property.create({
    name: 'title',
    type: 'String'
  }, {
    name: 'content',
    type: 'String'
  })
  .then(function () {
    console.log('Property created.')
  });

  db.exec('ALTER PROPERTY Squash.title MANDATORY true')
    .then(function (response){
    console.log(response.results);
  });

  db.exec('ALTER PROPERTY Squash.content MANDATORY true')
    .then(function (response){
    console.log(response.results);
  };

  db.exec('ALTER PROPERTY Squash.content MAX 140')
    .then(function (response){
    console.log(response.results);
  });


exports.down = function (db) {
  // @todo implementation

  db.exec('ALTER PROPERTY Squash.title MANDATORY false')
    .then(function (response){
    console.log(response.results);
  });

  db.exec('ALTER PROPERTY Squash.content MANDATORY false')
    .then(function (response){
    console.log(response.results);
  Squash.property.drop('title')
  .then(function () {
    console.log('Property deleted.');
  });
  Squash.property.drop('content')
  .then(function () {
    console.log('Property deleted.');
  });
  db.exec('DROP CLASS Squash')
  .then(function (response){
    console.log(response.results);
  });
};

