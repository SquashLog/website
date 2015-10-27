var db    = require(__server + '/lib/db')
var Comment  = require(__server + '/models/Comment')
var fixtures = require('../fixtures.js')

describe("Comment Model", function() {

  beforeEach(function () {
    this.timeout(4000);
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
