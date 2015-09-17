var db      = require('../lib/neo-db.js');
var model   = require('../lib/model.js')


var User = module.exports = model.node('User', {

  // TODO: Use validate.js
  schema: {
    name: {},
    email: {},
    username: {},
    avatar_url: {},
    github_id: {},

    created_at: {},
    updated_at: {},
  }
})
