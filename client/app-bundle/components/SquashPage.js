var m = require('mithril')
var Squash = require('../models/Squash')


var SquashPage = module.exports;

SquashPage.controller = function () {}

SquashPage.view = function (ctrl, options) {

  return m('.squash', [
    m('h5', options.squash.title),
    m('p', options.squash.description)
  ])
}
