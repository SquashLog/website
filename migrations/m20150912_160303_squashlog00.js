"use strict";
exports.name = "squashlog00";

exports.up = function (db) {
  // @todo implementation
  db.class.create('V', 'User')
  .then(function (User) {
    console.log('Created class: ' + User);
  });

  User.property.create({
    name: 'name',
    type: 'String'
  }, {
    name: 'username',
    type: 'String'
  },{
  	name: 'avatar_url',
  	type: 'string'
  },{
  	name: 'email',
  	type: 'string'
  },{
  	name: 'updatedAt'
  	type: 'Datetime'
  },{
  	name: 'createdAt'
  	type: 'Datetime'
  }
  )
  .then(function () {
    console.log('Property created.')
  });
};

exports.down = function (db) {
  // @todo implementation
  User.property.drop('name')
  .then(function () {
    console.log('Property deleted.');
  });
  User.property.drop('username')
  .then(function () {
    console.log('Property deleted.');
  });
  User.property.drop('avatar_url')
  .then(function () {
    console.log('Property deleted.');
  });
  User.property.drop('email')
  .then(function () {
    console.log('Property deleted.');
  });
  User.property.drop('updatedAt')
  .then(function () {
    console.log('Property deleted.');
  });
  User.property.drop('createdAt')
  .then(function () {
    console.log('Property deleted.');
  });
  db.exec('DROP CLASS User')
  .then(function (response){
    console.log(response.results);
  });
};

