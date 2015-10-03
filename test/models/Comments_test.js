var db    = require(__server + '/lib/neo-db')
var Comment  = require(__server + '/models/Comment')
require('../test-helper.js')
var fixtures = require('../fixtures.js')

describe("Comment Model", function() {

  beforeEach(function () {
    return db.deleteEverything()
      .then(function () {
        return fixtures.austinTexas()
      })
  })

  it("creates and persists a comment", function() {
    return Comment.create({ content: 'Comment Content'})
      .then(function(comment) {
        expect(comment.content).to.equal('Comment Content')
        // Retrieve comment again to ensure it persisted
        return Comment.find(comment.id)
      })
      .then(function(comment) {
        expect(comment.content).to.equal('Comment Content')
      })

  })

})
