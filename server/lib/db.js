var rp = require('request-promise')

//Raw SQL

var sqlOptions = {
  method: 'POST',
  url: 'http://localhost:2480/command/' + process.env.DB_NAME + '/sql',
  auth: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  }
}

exports.exec = function (query) {
  var req = Object.assign({ body: query } , sqlOptions)
  return rp(req)
    .then(function (result) {
      return JSON.parse(result).result[0]
    })
}

//Batch Query

var batchOptions = {
  method: 'POST',
  'content-type': 'application/json',
  url: 'http://localhost:2480/batch/' + process.env.DB_NAME,
  auth: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  }
}

exports.create = function (klass, attrs) {
  var task = {type: "c"}
  task.record = Object.assign({"@class": klass}, attrs)
  return task
}


exports.batchExec = function (operations) {
  var payload = {
    "transaction" : true,
    "operations" : operations
  };
  return rp(Object.assign({ body: JSON.stringify(payload) }, batchOptions))
    .then(function (result) {
      return JSON.parse(result).result[0]
    })
}

//General


exports.find = function (rid) {
  return rp({
    method: 'POST',
    url: 'http://localhost:2480/document/' + process.env.DB_NAME + '/' + rid,
    auth: {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    }
  })
    .then(function (result) {
      return JSON.parse(result).result[0]
    })

}