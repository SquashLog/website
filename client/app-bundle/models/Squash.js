var m = require('mithril')

var Squash = module.exports;

Squash.vm = function(attrs) {
  var attrs = attrs || ''
  return {
    title: m.prop(attrs.title),
    description: m.prop(attrs.description)
  }
}

Squash.get = function(id) {
  return m.deferred.resolve({
    title: "Bug terminated mercilessly and not released into the wild",
    description: "you don't even want to know"
  })
}

Squash.getAll = function() {
  return m.deferred.resolve([
    {
      title: "Bug terminated mercilessly and not released into the wild",
      description: "you don't even want to know"
    },
    {
      title: "Bug fixed",
      description: "it had a broken wing"
    },
    {
      title: "Bug fixed",
      description: "removed bug from inside computer"
    }
  ])
}