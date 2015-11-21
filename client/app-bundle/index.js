require('../../ext')
var m = require('mithril')

var User   = require('./models/User');
var Squash = require('./models/Squash');

var Feed   = require('./components/SquashFeed');
var Profile   = require('./components/Profile');
var SquashPage = require('./components/SquashPage');
var NewSquash = require('./components/NewSquash')



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
        m.component(Feed, { squashes: ctrl.squashes() })
      ]);
    },
  },

  '/squashes/new': {
    controller: function() {
    },
    view: function(ctrl) {
      return withLayout([
        m.component(NewSquash)
      ]);
    }
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


//hard coded add link for now until username object gets implemented
function withLayout (content) {
  return m('.app', [
    m('.main-content', [
      // m('h1', m('a[href=/]', { config: m.route }, m('img[src=/SquashLog.png]'))),
      content,
    ]),
    m('.sidebar', [
      m('.logo', [
        m('img', { src: '/bug.png' }),
        m('h1', m('span', "Squash"), "Log")
      ]),
      m('a.button[href=/squashes/new]', { config: m.route }, "New Squash"),
      m('.sign-in', m('a[href=/auth/github]', [
        m('img[src=/githubLogo.png]'),
        m('p', 'Sign in'),
      ]))
    ]),
  ]);
}
