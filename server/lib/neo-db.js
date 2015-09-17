var fs = require('fs')
var path = require('path')

var config = require('../config.js')
var env = process.env.NODE_ENV || 'development'
console.log("Using database url:", config[env].neo4j.url)
var db = require('seraph')(config[env].neo4j.url)
var Promise = require('bluebird')

Promise.promisifyAll(db, { suffix: '_p' })
Promise.promisifyAll(db.node, { suffix: '_p' })
Promise.promisifyAll(db.rel, { suffix: '_p' })
Promise.promisifyAll(db.index, { suffix: '_p' })
Promise.promisifyAll(db.constraints, { suffix: '_p' })
Promise.promisifyAll(db.constraints.uniqueness, { suffix: '_p' })
module.exports = db

db.deleteEverything = function () {
  if (process.env.NODE_ENV === 'production') return;

  var query =
    "MATCH (n)" +
    "OPTIONAL MATCH (n)-[r]-()" +
    "DELETE n,r;"
  return db.queryRaw_p(query)
}
