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

  it('outputs all squashes that the user has chirped', function(done) {
    request(app)
      .get('/users')
      .set('Authorization', 'Bearer test_oauth_token')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err) done(err);

        var user = res.body;

        expect(user).to.be.an('object')
        expect(user.uid).to.be.a('number')
        done()
      })
  })

})
