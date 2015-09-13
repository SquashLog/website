var User = require('../server/models/Users.js');
var fixtures = module.exports;

fixtures.users = {
  users: [
    {
      name: 'dan',
      username: 'user_dan',
      email: 'email@email.com',
      avatar_url: 'dan.com'
    }, {
      name: 'justin',
      username: 'user_justin',
      email: 'email@email.com',
      avatar_url: 'justin.com'
    }, {
      name: 'gilbert',
      username: 'user_gilbert',
      email: 'email@email.com',
      avatar_url: 'gilbert.com'
    }, {
      name: 'karen',
      username: 'user_karen',
      email: 'email@email.com',
      avatar_url: 'karen.com'
    }
  ]
}