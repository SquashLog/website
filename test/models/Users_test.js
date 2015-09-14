var db    = require(__server + '/lib/db')
var User  = require(__server + '/models/User')
require('../test-helper.js')
var fixtures = require('../fixtures.js')

describe("User Model", function() {

  beforeEach(function () {
    return TestHelper.truncateData()
      .then(function () {
        return TestHelper.seed(fixtures.vertices)
      })
  })

  it("creates and persists a user", function() {
    return User.create({ username: 'terry123', name: 'Terry' , github_id: 'git_terry'})
      .then(function(user) {
        expect(user.username).to.exist
        expect(user.name).to.equal('Terry')
        // Retrieve user again to ensure it persisted
        return User.find(user.username)
      })
      .then(function(user) {
        expect(user.username).to.exist
        expect(user.name).to.equal('Terry')
      })

  })

})
