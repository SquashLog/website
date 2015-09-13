require('../../ext')
var m = require('mithril')

var User   = require('./models/User');
var Squash = require('./models/Squash');

var Feed   = require('./components/Feed');
var Profile   = require('./components/Profile');
var SquashPage = require('./components/SquashPage');
var Chat = require('./components/chat')



window.App = {}

App.controller = function () {}

App.view = function (ctrl) {
}

m.route.mode = 'pathname';
m.route(document.getElementById('app'), '/', {

  '/': {
    controller: function() {
      this.squashes = Squash.all();
    },
    view: function (ctrl) {
      return withLayout([
        m.component(Feed, { squashes: ctrl.squashes() }),
        m.component(Chat)
      ]);
    },
  },

  '/:username': {
    controller: function() {
      this.user = User.find( m.route.param('username') );
      this.userSquashes = User.squashes(m.route.param('username') );
      this.squashes = Squash.all();
    },
    view: function (ctrl) {

      return withLayout([
        m.component(Profile, { squashes: ctrl.squashes(), user: ctrl.user(), userSquashes: ctrl.userSquashes() })
      ]);
    },
  },


  '/:username/squash/:squashId': {
    controller: function() {
      this.user = User.find( m.route.param('username') );
      this.squash = Squash.find( m.route.param('squashId') );
    },
    view: function(ctrl) {
      return withLayout([
        m('h2', ctrl.user().name),
        m.component(SquashPage, { squash: ctrl.squash() })
      ]);
    },
  }


})

function withLayout (content) {
  return m('.app', [
    m('.feed-container', [
      m('h1', m('a[href=/]', { config: m.route }, m('img[src=/SquashLog.png]'))),
      content,
    ]),
    m('.sign-in', m('a[href=/auth/github]', [
      m('p', 'Sign in With Github'),
      m('img[src=/githubLogo.png]')
    ]))
  ]);
}
