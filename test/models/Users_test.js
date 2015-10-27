var db    = require(__server + '/lib/db')
var User  = require(__server + '/models/User')
var fixtures = require('../fixtures.js')

describe("User Model", function() {

  beforeEach(function () {
    this.timeout(4000);
    return db.deleteEverything()
      .then(function () {
        return fixtures.austinTexas()
      })
  })

  it("creates and persists a user", function() {
    return User.create({ username: 'terry123', name: 'Terry' , github_id: 'git_terry'})
      .then(function(user) {
        expect(user.name).to.equal('Terry')
        expect(user.username).to.equal('terry123')
        expect(user.github_id).to.equal('git_terry')
        // Retrieve user again to ensure it persisted
        return User.findBy({ username: user.username })
      })
      .then(function(user) {
        expect(user.name).to.equal('Terry')
        expect(user.username).to.equal('terry123')
        expect(user.github_id).to.equal('git_terry')
      })

  })

})
