var Promise = require('bluebird');
var Users = module.exports;

var testUser = {uid: 1, username: 'MeyerSauce21', password: 'ChickenShack22', followers: ['eric','stan','kenny','kyle'], squashes : [] }


module.exports.find = function (id) {
    if (testUser.uid === +id) return testUser;
    else return 'No such user, yet!'
}

module.exports.followers = function (id) {
    if (testUser.uid === +id) return {followers: testUser.followers};
    else return 'No such user, yet!'
}

module.exports.squashes = function (id) {
    if (testUser.uid === +id) return {squashes: testUser.squashes};
    else return 'No such user, yet!'
}


//TO DO
module.exports.squashFeed = function (id) {
    if (testUser.uid === +id) return {squashes: testUser.squashes};
    else return 'No such user, yet!'
}

