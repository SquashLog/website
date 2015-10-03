var db      = require('../lib/neo-db.js');
var model   = require('../lib/model.js');


var Tag = module.exports = model.node('Tag', {

  // TODO: Use validate.js
  schema: {
    content: {},

    created_at: {},
    updated_at: {}
  }
})
