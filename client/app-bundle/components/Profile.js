var m = require('mithril')
var Squash = require('../models/Squash')
var User = require('../models/User')
var Feed = require('./Feed')



var Profile = module.exports;

Profile.controller = function () {

}

Profile.view = function (ctrl, options) {
    console.log(options)
  return m('.User', [
    ['div', 
        m('img[src=' + options.user.avatarUrl + ']'),
        m('h4', options.user.username),
        m('h5', options.user.name),
    ],
    m.component(Feed, { squashes: options.squashes}),
    m('h5', options.squashes.title),
    m('p', options.squashes.description)
  ])
}
