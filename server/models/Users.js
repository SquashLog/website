var Promise = require('bluebird');
var Users = module.exports;

var testUsers = [{uid: 1, name: 'Beavis', username: 'MeyerSauce21', password: 'ChickenShack22', followers: ['eric','stan','kenny','kyle'], squashes : [] },
    {uid: 1, name: 'Butthead', username: 'eric122', password: 'ChickenShack22', followers: ['eric','stan','kenny','kyle'], squashes : [] },
    {uid: 1, name: 'Bungholio', username: 'mrKITTTYYYY!', password: 'ChickenShack22', followers: ['eric','stan','kenny','kyle'], squashes : [] }
  ]

Users.all = function () {
    return testUsers;
}

Users.find = function (username) {
    return testUsers.filter(function(user) { return user.username === username; })[0];
}

Users.followers = function (username) {
    var followers = testUsers.filter(function(user) { return user.username === username; })[0].followers;
    return { followers: followers };
}

Users.squashes = function (username) {
    var user = testUsers.filter(function(user) { return user.username === username; })[0];
    return { squashes: user.squashes };
}


//TO DO
Users.squashFeed = function (username) {
    if (testUser.username === username) return {squashes: testUser.squashes};
    else return 'No such user, yet!'
}
