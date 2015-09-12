var Promise = require('bluebird');
var Users = module.exports;

var testUser = {uid: 1, username: 'MeyerSauce21', password: 'ChickenShack22', followers: ['eric','stan','kenny','kyle'], squashes : ['I like turtles, I like turtles, I like turtles, I like turtles, I like turtles, I like turtles'] }


module.exports.getUser = function (id) {
    if (testUser.uid === +id) return testUser;
    else return 'No such user, yet!'
}

module.exports.getFollowers = function (id) {
    if (testUser.uid === +id) return {followers: testUser.followers};
    else return 'No such user, yet!'
}

module.exports.getSquashes = function (id) {
    if (testUser.uid === +id) return {squashes: testUser.squashes};
    else return 'No such user, yet!'
}


//TO DO
module.exports.getFollowersSquashes = function (id) {
    if (testUser.uid === +id) return {squashes: testUser.squashes};
    else return 'No such user, yet!'
}

