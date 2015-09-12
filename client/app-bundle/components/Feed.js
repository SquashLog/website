var m = require('mithril')

exports.controller = function (options) {}

exports.view = function (ctrl, options) {
  // replace with api call
  var squashes = ['squash1','squash2','squash3']
  return m('.feed', [
    m('h2', options.title),
    m('ul', [
      squashes.map(n => m('li', n))
    ])
  ])
}
