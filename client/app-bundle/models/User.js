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

User.find = function (id) {
  // TODO karmakettle: this api url might change later--confirm
  return m.request({ method: 'GET', url: '/users/' + id });
}
