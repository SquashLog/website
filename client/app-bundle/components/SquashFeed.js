var m = require('mithril')
var Squash = require('../models/Squash')

exports.controller = function (options) {}

exports.view = function (ctrl, options) {
    return m('.squash-feed', [
      options.squashes.map(function(squash) {
        return m('.squash', [
          m('.mti', { 'data-tag': squash.tags[0] }),
          m('h2.title', [
            m('span.main-tag', '['+ squash.tags[0]  +'] '),
            m('a', {
              href: '/' + squash.user.username + '/squash/' + squash.id,
              config: m.route
            }, squash.title)
          ]),

          squash.content ? [
            m('.content', squash.content)
          ] : null,
        ])
      })
    ])
}
