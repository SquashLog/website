var request = require('supertest-as-promised')
var db      = require(__server + '/lib/db')
var Squash  = require(__server + '/models/Squash')
var SquashesAPI = require(__server + '/api/squashes-api')


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


  beforeEach_(function* () {
    yield db.deleteEverything()
    currentUser = { uid: 'user_bob' }
    accessToken = { scopes: [] }
  })

  it('outputs all squashes', function(done) {
    request(app)
      .get('/squashes')
      .end(function(err, res) {
        if (err) done(err);

        var squashes = res.body;

        expect(squashes).to.be.an('array')
        expect(squashes[0].user).to.be.an('object')

        // Content should not be included
        expect(squashes[0].content).to.be.undefined;
        expect(squashes[1].content).to.be.undefined;

        done()
      })
  })

  describe("GET /:id/content", function() {

    it_("retrieves a squash's content", function* () {

      var squash = yield Squash.create({ title: "My Squash", content: "squish" })

      yield request(app)
        .get(`/squashes/${squash.id}/content`)
        .set('Accept', 'text/html')
        .expect(200)
        .expect('Content-Type', /text\/html/)
        .expect(function(res) {
          expect(res.text).to.equal("squish")
        })
    })

    it_("returns a 404 when no such squash exists", function* () {
      yield request(app)
        .get('/squashes/idontexist/content')
        .expect(404)
    })
  })


})
