var OrientDB = require('orientjs');

var server = OrientDB({
  host: process.env.DB_HOST,
  port: 2424,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

module.exports = server.use({
  name: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});