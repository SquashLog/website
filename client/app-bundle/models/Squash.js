var m = require('mithril')

var Squash = module.exports;

Squash.vm = function(attrs) {
  var attrs = attrs || ''
  return {
    title: m.prop(attrs.title),
    description: m.prop(attrs.description)
  }
}

Squash.find = function(id) {
  // TODO:  update with actual api call
  return m.deferred.resolve( squashFixture.find(s => s.id == id) );
}

Squash.all = function() {
  // TODO:  update with actual api call
  return m.deferred.resolve(squashFixture)
}

var squashFixture = [
  {
    id: 10,
    title: "Bug terminated mercilessly and not released into the wild",
    description: "you don't even want to know",
    user: { name: 'Alice', username: 'alice' }
  },
  {
    id: 11,
    title: "Bug fixed",
    description: "it had a broken wing",
    user: { name: 'Alice', username: 'alice' }
  },
  {
    id: 12,
    title: "Bug fixed",
    description: "removed bug from inside computer",
    user: { name: 'Bob', username: 'bob' }
  }
]
