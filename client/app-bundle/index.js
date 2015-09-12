var m = require('mithril')
var Feed = require('./components/Feed')


window.App = {}

App.controller = function () {}

App.view = function (ctrl) {
  return [
    m('h1', 'SquashLog'),
    m.component(Feed, { title: 'Welcome to SquashLog!' })
  ]
}

m.mount(document.getElementById('app'), App)
