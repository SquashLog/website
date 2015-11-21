var db      = require('../lib/db.js');
var model   = require('../lib/model.js');

var Squash = module.exports = model.node('Squash', {

  // TODO: Use validate.js
  schema: {
    title: {},
    content: {},

    created_at: {},
    updated_at: {}
  },

  getContent: function (nodeId) {
    var query = `
      MATCH (squash:Squash)
      WHERE id(squash) = {nodeId}
      RETURN squash.content AS content
    `
    return db.query_p(query, { nodeId: nodeId })
      .then(function (rows) {
        return (rows.length === 0) ? Promise.reject(new Model.NotFound()) : rows.content
      })
  }
})