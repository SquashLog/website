var Promise = require('bluebird');
var Users = module.exports;

var testUser = {uid: 1, username: 'MeyerSauce21', password: 'ChickenShack22', followers: ['eric','stan','kenny','kyle'], squashes : [] }


Users.find = function (username) {
    if (testUser.username === username) return testUser;
    else return {error: 'No such user, yet!'};
}

Users.followers = function (username) {
    if (testUser.username === username) return {followers: testUser.followers};
    else return 'No such user, yet!'
}

Users.squashes = function (username) {
    if (testUser.username === username) return {squashes: testUser.squashes};
    else return 'No such user, yet!'
}


//TO DO
Users.squashFeed = function (username) {
    if (testUser.username === username) return {squashes: testUser.squashes};
    else return 'No such user, yet!'
}
