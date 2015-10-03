
module.exports = {

  development: {
    neo4j: {
      url: 'http://localhost:7474'
    }
  },

  test: {
    neo4j: {
      url: process.env.NEO4J_URL || 'http://localhost:7373'
    }
  },

  production: {
    neo4j: {
      url: process.env.NEO4J_URL
    }
  }

}
