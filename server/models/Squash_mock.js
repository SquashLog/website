var Squashes = module.exports;
var db = require('../lib/db.js');

var sampleSquashes =  [
  { id: 1,
    user: { uid: 1, username: 'MeyerSauce21', avatarUrl: 'http://www.avatarsdb.com/avatars/The_cat.gif' },
    title: 'Apparently node.js lets you require the same file with different capitalization, causing it to be evaluated multiple times.',
    tags: ['node.js', 'javascript']
  },
  { id: 2,
    user: { uid: 2, username: 'eric122', avatarUrl: 'http://www.avatarsdb.com/animals/cats/cat-rain-avatar-52022.htm' },
    title: 'Neo4j does not like null node properties',
    tags: ['neo4j']
  },
  { id: 3,
    user: { uid: 3, username: 'mrKITTTYYYY!', avatarUrl: 'http://www.avatarsdb.com/animals/cats/cat-rain-avatar-52040.htm' },
    title: 'I was drowing in Promises. Coroutines saved my life.',
    tags: ['javascript', 'async']
  },
  { id: 4,
    user: { uid: 3, username: 'bobby-appleseed', avatarUrl: 'http://www.avatarsdb.com/animals/cats/cat-rain-avatar-52040.htm' },
    title: 'How to write a catch-all route in Express',
    tags: ['express', 'node.js', 'javascript']
  },
  { id: 5,
    user: { uid: 1, username: 'MeyerSauce21', avatarUrl: 'http://www.avatarsdb.com/avatars/The_cat.gif' },
    title: 'Neo4j doesn\'t support date properties. Store a UNIX timestamp instead.',
    tags: ['neo4j']
  },
  { id: 6,
    user: { uid: 1, username: 'MeyerSauce21', avatarUrl: 'http://www.avatarsdb.com/avatars/The_cat.gif' },
    title: "My script and style tags wern't working on https. Here's how I fixed it.",
    tags: ['html5']
  }
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
