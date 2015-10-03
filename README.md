# SquashLog

* Show off to your friends all the bugs you are squashing.
* Document how you resolved issues.

## Getting Started
* Make sure you have Node.js 4.0.0 or higher installed.
```
# Dependencies - Node modules
$ npm install

# Dependencies - Neo4j 2.1.6
$ brew install https://raw.githubusercontent.com/Homebrew/homebrew/90709afeaf347527fe84605283f44aa4a6fe93d3/Library/Formula/neo4j.rb
$ neo4j start

# Dependencies - Neo4j 2.1.6 test database
$ git clone https://github.com/loop-recur/neo4j-test-server
$ cd neo4j-test-server
$ git checkout 2.1.6.1
$ cd -
$ ./neo4j-test-server/bin/neo4j start

$ npm start
```

Now visit [localhost:4000](http://localhost:4000/)

## Running Tests
* Make sure you have installed the Neo4j 2.1.6 test database dependencies and have started the test server.
```
$ npm test
```

## Browserify Middleware

[browserify-middleware](https://github.com/ForbesLindesay/browserify-middleware)

When adding a new package to use in the frontend, ADD THE NEW LIBRARY TO `vendorLibs` IN `server/index.js` !!

## Edge Schema

```
(:User)-[:AUTHOR_OF]->(:Squash)
(:User)-[:AUTHOR_OF]->(:Comment)
(:User)-[:FOLLOWS]->(:User)

(:Squash)-[:FAVORITED_BY]->(:User)
(:Squash)-[:TAGGED_WITH]->(:Tag)

(:Comment)-[:CHILD_OF]->(:Squash)
(:Comment)-[:CHILD_OF]->(:Comment)
```

***

This application was built using [Node Catapult](https://github.com/mindeavor/node-catapult), a boilerplate starter project that uses Node, Express, Browserify, and Mithril.
