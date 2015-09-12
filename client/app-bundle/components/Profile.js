var m = require('mithril')
var Squash = require('../models/Squash')
var User = require('../models/User')
var Feed = require('./Feed')



var Profile = module.exports;

Profile.controller = function () {

}

Profile.view = function (ctrl, options) {
    console.log(options)
  return m('.container', [ 
    m('.User', [
            m('img[src=' + options.user.avatarUrl + ']'),
            m('span', 'Username: ' + options.user.username),
            m('br'),
            m('span', 'Name: ' + options.user.name),
        ]),

        m('.userSquashes', [
            m.component(Feed, { squashes: options.squashes}),
            m('h5', options.squashes.title),
            m('p', options.squashes.description)
        ])
    ])
}
