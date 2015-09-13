# Node Catapult

A boilerplate starter project that includes Node, Express, Browserify, and Mithril:

* Minimal - Understand everything.
* Efficient - Great defaults for development and production.
* Rapid - Get started immediately.

## Getting Started

```
$ git clone https://github.com/mindeavor/node-catapult my-project
$ cd my-project
$ npm install
$ npm start
```

Now visit [localhost:4000](http://localhost:4000/)

Go to terminal and brew install orientdb

```
brew install orientdb
```

Then you want to access orientdb console

```
orientdb-console
```

And create a local database

```
CREATE DATABASE plocal:/usr/local/Cellar/orientdb/2.0.11/libexec/databases/squash_test/squash_test
```

Then connect to your database

```
CONNECT plocal:/usr/local/Cellar/orientdb/2.0.11/libexec/databases/squash_test/squash_test
```

After that, set your environment variables to these credentials

The default username and password when creating a local db is "admin".

Set your environment variables with the command

```
export DB_USER=admin DB_PASSWORD=admin DB_HOST=localhost DB_NAME=squash_test
```
Create a new database called 'squash_dev' using the same instructions above in order to create a development database.

After that your local database is up and running for testing, cheers!

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
