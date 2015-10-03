# Node Catapult

A boilerplate starter project that includes Node, Express, Browserify, and Mithril:

* Minimal - Understand everything.
* Efficient - Great defaults for development and production.
* Rapid - Get started immediately.

## Getting Started

```
# Dependencies - Node modules
$ npm install

# Dependencies - Neo4j 2.1.6
$ brew install https://raw.githubusercontent.com/Homebrew/homebrew/90709afeaf347527fe84605283f44aa4a6fe93d3/Library/Formula/neo4j.rb
$ node config/create-indexes.js # TODO: Use migrations
$ neo4j start

# Dependencies - Neo4j 2.1.6 test database
$ git clone https://github.com/loop-recur/neo4j-test-server
$ cd neo4j-test-server
$ git checkout 2.1.6.1
$ cd -
$ NODE_ENV=test node config/create-indexes.js
$ ./neo4j-test-server/bin/neo4j start

$ npm start
```

Now visit [localhost:4000](http://localhost:4000/)

## Migrating

```bash
$ npm run db-migrate
$ NODE_ENV=test npm run db-migrate
```

## Jump-starting your App

Check the [wiki](https://github.com/mindeavor/node-catapult/wiki) for snippets to jump-start your app, including:

- Express cookie sessions
- Postgres and knex.js
- A functional-programming-based "ORM" pattern for your database models

## Browserify Middleware

The most notable part of this app is [browserify-middleware](https://github.com/ForbesLindesay/browserify-middleware). Great node packages are exceedingly rare – this is one of those packages.

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
