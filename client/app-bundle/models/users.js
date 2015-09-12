var m = require('mithril')

module.exports = function(attrs) {
  var attrs = attrs || ''
  return {
    name: m.prop(attrs.name),
    username: m.prop(attrs.username),
    avatar_url: m.prop(attrs.avatar_url),
    email: m.prop(attrs.email)
  }
}