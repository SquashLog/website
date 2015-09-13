var rp = require('request-promise')

var options = { method: 'POST',
  url: 'http://localhost:2480/command/' + process.env.DB_NAME + '/sql',
  auth: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD 
  }
}

exports.exec = function (query) {
  var req = Object.assign({ body: query } , options)
  return rp(req)
    .then(function (result) {
      return JSON.parse(result).result[0]
    })
}
