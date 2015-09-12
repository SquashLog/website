var request = require('supertest')
var SquashesAPI = require(__server + '/api/squashes-api.js')


describe('Squashes API', function() {

  var app = TestHelper.createApp()

  // Simulate a signed-in user with session
  var currentUser = null;
  var accessToken   = null;

  app.use(function(req, res, next) {
    req.user = currentUser;
    req.accessToken = accessToken;
    next()
  })

  app.use('/squashes', SquashesAPI);
  app.testReady();


  beforeEach(function() {
    currentUser = { uid: 'user_bob' }
    accessToken = { scopes: [] }
  })

  it('outputs all squashes', function(done) {
    request(app)
      .get('/squashes')
      .set('Authorization', 'Bearer test_oauth_token')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err) done(err);

        var squashes = res.body;

        expect(squashes).to.be.an('array')
        expect(squashes[0].user).to.be.an('object')
        expect(squashes[1].content).to.not.be.empty;

        done()
      })
    })


})
