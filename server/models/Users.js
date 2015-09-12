var Promise = require('bluebird');
var Users = module.exports;

var testUser = {uid: 1, username: 'MeyerSauce21', password: 'ChickenShack22'}


module.exports.getUser = function (id) {
    if (testUser.uid === +id) return testUser;
    else return 'No such user, yet!'
}

