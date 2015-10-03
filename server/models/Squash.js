var model   = require('../lib/model.js');

var Squash = module.exports = model.node('Squash', {

  // TODO: Use validate.js
  schema: {
    title: {},
    content: {},

    created_at: {},
    updated_at: {}
  }
})