var m = require('mithril')
var Squash = require('../models/Squash')

exports.controller = function (options) {}

exports.view = function (ctrl, options) {
    return m('.feed', [
      options.squashes.map(function(squash) {
        return m('.squash', m('.squash-content', [
          m('h3', m('a', {
              href: '/' + squash.user.username + '/squash/' + squash.id,
              config: m.route
            }, squash.title)),
          m('p', squash.content)
        ]))
      })
    ])
}
