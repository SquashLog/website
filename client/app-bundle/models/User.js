var m = require('mithril')

var User = module.exports;


User.vm = function(attrs) {
  var attrs = attrs || ''
  return {
    name: m.prop(attrs.name),
    username: m.prop(attrs.username),
    avatar_url: m.prop(attrs.avatar_url),
    email: m.prop(attrs.email)
  }
}

User.find = function (username) {
  return m.request({ method: 'GET', url: '/api/users/' + username }).then(function(user){
    return user;
  });
}

User.squashes = function(username) {
  return m.request({ method: 'GET', url: '/api/users/' + username + '/squashes/' }).then(function(squashes){
    return squashes;
  });
}
