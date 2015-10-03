var passport = require('passport')
var GitHubStrategy = require('passport-github').Strategy
var User = require('./models/User')


exports.mount = function (app, host) {

  passport.use(new GitHubStrategy({
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: host + '/auth/github/callback'
    },
    function(accessToken, refreshToken, profile, done) {
      syncUser(profile)
        .then(done.papp(null))
        .catch(done)
    }
  ));

  app.use(passport.initialize())
  app.use(passport.session())

  passport.serializeUser(function(user, done) {
    console.log("Serializing", user.id)
    done(null, user.id)
  })

  passport.deserializeUser(function(id, done) {
    console.log("Deserializing", id)
    User.find(id)
      .then( done.papp(null) )
      .catch(function (err) {
        if (err.message === 'user_not_found') {
          done(null, null)
        }
        else {
          done(err)
        }
      })
  })

  app.get('/auth/github',
    passport.authenticate('github'));

  app.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    });
};


function syncUser (githubData) {

  return User.findBy({ githubId: githubData.id })
    .then( user => updateUser(githubData, user) )
    .catch( User.NotFound, () => createUser(githubData) )
}

function createUser (githubData) {
  var attrs = {
    name: githubData.displayName || githubData.username,
    email: githubData._json.email,
    username: githubData.username,
    avatar_url: githubData._json.avatar_url,
    github_id: githubData.id,
  }
  // neo4j doesn't like null properties
  if (! attrs.email) delete attrs.email

  return User.create(attrs)
}

function updateUser (githubData, user) {
  return User.update(Object.create(user, {
    avatar_url: githubData._json.avatar_url
  }))
}
