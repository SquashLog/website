var util = require('util')
var db = require('./db.js')

exports.node = function (nodeName, extras) {
  var nodeNameLower = nodeName.toLowerCase()

  var Model = {

    label: nodeName,

    cleanAttrs: function (attrs) {
      return Object.pluck(Object.keys(extras.schema), attrs)
    },

    all: function () {
      return db.nodesWithLabel_p(nodeName)
    },

    find: function (nodeId) {
      nodeId = parseInt(nodeId, 10)
      if (! nodeId) return Promise.reject(new Model.NotFound())

      var query =
        "MATCH (n:" + nodeName + ") WHERE id(n) = {nodeId} RETURN n"
      return db.query_p(query, { nodeId: nodeId })
        .then( Model.firstResult )
    },

    findByUid: function (uid) {
      return db.find_p({ uid: uid }, nodeName)
        .then( Model.firstResult )
    },

    findBy: function (attrs) {
      return db.find_p(attrs, nodeName)
        .then( Model.firstResult )
    },

    create: save,

    update: function (attrs) {
      if (attrs.id === null && attrs.id === undefined) {
        throw new Error("You must provide an id to update.")
      }
      return save(attrs, 'update')
    }
  }


  Model.firstResult = function (rows) {
    return (rows.length === 0) ? Promise.reject(new Model.NotFound()) : rows[0]
  }


  // Errors
  Model.NotFound = function NotFound() {
    Error.captureStackTrace(this, this.constructor)
    this.name = 'NotFound'
    this.message = nodeNameLower + '_not_found'
  }
  util.inherits(Model.NotFound, Error)

  Model.InvalidArgument = function InvalidArgument(message) {
    Error.captureStackTrace(this, this.constructor)
    this.name = 'InvalidArgument'
    this.message = message
  }
  util.inherits(Model.InvalidArgument, Error)



  return Object.assign(Model, extras)



  function save (attrs, saveType) {
    // console.log('['+nodeName+']', saveType || 'create', '::', attrs)
    if (attrs.id !== null && attrs.id !== undefined) {
      var cleanAttrs = Model.cleanAttrs(attrs)
      cleanAttrs.updated_at = Date.now()


      return db.call(
        db.operation('node/' + attrs.id + '/properties', 'PUT', cleanAttrs)
      )
      .return( Object.assign(cleanAttrs, { id: attrs.id }) )
    }
    else {
      attrs.created_at = Date.now()
      return db.save_p(attrs, nodeName)
    }
  }
}

function attrsToQuery (node, obj) {
  return Object.keys(obj).reduce(function(results, propName) {
    results.push( 'SET ' + node + '.' + propName + ' = {' + propName + '}' )
  }, []).join("\n, ")
}
