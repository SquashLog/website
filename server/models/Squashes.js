var Promise = require('bluebird');
var Squashes = module.exports;


var sampleSquashes =  [ {id: 1, user: {uid: 1, username: 'MeyerSauce21', avatarUrl: 'http://www.avatarsdb.com/avatars/The_cat.gif'},title: 'I got it!!!', content: 'Turn out I needed to restart my computer!!!'},
                  {id: 2, user: {uid: 2, username: 'eric122', avatarUrl: 'http://www.avatarsdb.com/animals/cats/cat-rain-avatar-52022.htm'},title: 'I had an epiphany', content: 'I just had to press edit undo, and know everything works again!'},
                  {id: 3, user: {uid: 3, username: 'mrKITTTYYYY!', avatarUrl: 'http://www.avatarsdb.com/animals/cats/cat-rain-avatar-52040.htm'},title: 'I really had a bad bug', content: 'BUT MY KITTY SQUASHED IT NOM NOM NOM NOM!'}
                ]

Squashes.squashes = function() {
  return sampleSquashes;
}

Squashes.find = function(squashId) {
  return sampleSquashes.filter(function(x){return x.id == squashId;})[0];
}

Squashes.comments = function(id) {
  return  sampleSquashes.map(function(x){return x.user.uid == +id ? x.comments : null;})
}
