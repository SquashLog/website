require('../../ext')
var m = require('mithril')

var User   = require('./models/User');
var Squash = require('./models/Squash');

var Feed   = require('./components/Feed');
var Profile   = require('./components/Profile');
var SquashPage = require('./components/SquashPage');


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

  '/:username': {
    controller: function() {
      this.user = User.find( m.route.param('username') );
      this.userSquashes = Squash.filter(11)
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
    m('h1', m('a[href=/]', { config: m.route }, 'SquashLog')),
    content
  ]);
}
