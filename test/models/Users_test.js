var db    = require(__server + '/lib/db')
var User  = require(__server + '/models/Users')

describe("User Model", function() {

  it("creates and persists a user", function() {
    return db.exec('TRUNCATE CLASS User UNSAFE')
      .then( function () {
        return User.create({ username: 'terry123', name: 'Terry' })
      })
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
