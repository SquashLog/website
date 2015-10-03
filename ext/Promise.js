
if (typeof global === 'object' && typeof window === 'undefined') {
  global.Promise = require('bluebird')
}
