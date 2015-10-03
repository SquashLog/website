var db    = require(__server + '/lib/neo-db')
var Tag  = require(__server + '/models/Tag')
require('../test-helper.js')
var fixtures = require('../fixtures.js')

describe("Tag Model", function() {

  beforeEach(function () {
    return db.deleteEverything()
      .then(function () {
        return fixtures.austinTexas()
      })
  })

  it("creates and persists a comment", function() {
    return Tag.create({ content: 'Tag Content'})
      .then(function(tag) {
        expect(tag.content).to.equal('Tag Content')
        // Retrieve tag again to ensure it persisted
        return Tag.find(tag.id)
      })
      .then(function(tag) {
        expect(tag.content).to.equal('Tag Content')
      })

  })

})
