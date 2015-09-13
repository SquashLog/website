var request = require('supertest')
var UserAPI = require(__server + '/api/users-api.js')


describe('User API', function() {

  var app = TestHelper.createApp()

  // Simulate a signed-in user with session
  var currentUser = null;
  var accessToken   = null;

  app.use(function(req, res, next) {
    req.user = currentUser;
    req.accessToken = accessToken;
    next()
  })

  app.use('/users', UserAPI);
  app.testReady();


  beforeEach(function() {
    currentUser = { uid: 'user_bob' }
    accessToken = { scopes: [] }
  })

  it('outputs all user objects in the dataset', function(done) {
    request(app)
      .get('/users')
      .set('Authorization', 'Bearer test_oauth_token')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err) done(err);

        var user = res.body;

        expect(user).to.be.an('array')
        expect(user[0].uid).to.be.a('number')
        done()
      })
  })

  it('outputs all squashes from a specific user', function(done) {
    request(app)
      .get('/users/MeyerSauce21/squashes')
      .set('Authorization', 'Bearer test_oauth_token')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err) done(err);

        var squashes = res.body;

        expect(squashes).to.be.an('object')
        done()
      })
  })

  it('outputs all followers of a specific user', function(done) {
    request(app)
      .get('/users/MeyerSauce21/followers')
      .set('Authorization', 'Bearer test_oauth_token')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err) done(err);

        var followers = res.body;

        expect(followers).to.be.an('object')
        done()
      })
  })


})
