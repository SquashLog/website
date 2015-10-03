var db      = require('../lib/neo-db.js');
var model   = require('../lib/model.js');


var Comment = module.exports = model.node('Comment', {

  // TODO: Use validate.js
  schema: {
    content: {},

    created_at: {},
    updated_at: {}
  }
})
