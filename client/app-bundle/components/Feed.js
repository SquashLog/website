var m = require('mithril')
var Squash = require('../models/Squash')

exports.controller = function (options) {
  var ctrl = this;
  ctrl.squashes = Squash.getAll();
}

exports.view = function (ctrl, options) {
    return m('.feed', [
      m('h2', options.title),
      ctrl.squashes().map(function(squash, idx){
        return m('div', [
          m('h3', squash.title),
          m('p', squash.description)
        ])
      })
    ])
}
