var db    = require(__server + '/lib/neo-db')
var Squash  = require(__server + '/models/Squash')
require('../test-helper.js')
var fixtures = require('../fixtures.js')

describe("Squash Model", function() {

  beforeEach(function () {
    return db.deleteEverything()
  })

  it("creates and persists a squash", function() {
    return Squash.create({ title: 'Squash Title', content: 'Squash Content'})
      .then(function(squash) {
        expect(squash.title).to.equal('Squash Title')
        expect(squash.content).to.equal('Squash Content')
        // Retrieve squash again to ensure it persisted
        return Squash.find(squash.id)
      })
      .then(function(squash) {
        expect(squash.title).to.equal('Squash Title')
        expect(squash.content).to.equal('Squash Content')
      })

  })

})
