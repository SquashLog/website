var Promise = require('bluebird');
var Squashes = module.exports;


var Squashes =  [ {user: {uid: 1, username: 'john314', avatarUrl: 'http://www.avatarsdb.com/avatars/The_cat.gif'},title: 'I got it!!!', content: 'Turn out I needed to restart my computer!!!', 
                    comments: [{content: 'dude this is sweet!!' , user: {uid: 2, username: 'eric122', avatarUrl: 'http://www.avatarsdb.com/animals/cats/cat-rain-avatar-52022.htm'}}, {content: 'I really think you are devine and stuff.', user: {uid: 3, username: 'mrKITTTYYYY!', avatarUrl: 'http://www.avatarsdb.com/animals/cats/cat-rain-avatar-52040.htm'}}]},
                  {user: {uid: 2, username: 'eric122', avatarUrl: 'http://www.avatarsdb.com/animals/cats/cat-rain-avatar-52022.htm'},title: 'I had an epiphany', content: 'I just had to press edit undo, and know everything works again!'},
                  {user: {uid: 3, username: 'mrKITTTYYYY!', avatarUrl: 'http://www.avatarsdb.com/animals/cats/cat-rain-avatar-52040.htm'},title: 'I really had a bad bug', content: 'BUT MY KITTY SQUASHED IT NOM NOM NOM NOM!'}
                ];
module.exports.squashes = function () {
    return  Squashes;
}
module.exports.comments = function () {
    return  Squashes.map("");
}


