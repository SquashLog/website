var m = require('mithril')

exports.controller = function (options) {}

exports.view = function (ctrl, options) {
  var data = [10,20,30]
  return m('.my-component', [
    m('h2', options.title),
    m('ul', [
      data.map(n => m('li', n)).find( () => true)
    ])
  ])
}
