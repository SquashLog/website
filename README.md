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

```brew install orientdb```

Then you want to access orientdb console

```orientdb-console```

And create a local database

```CREATE DATABASE plocal:/usr/local/Cellar/orientdb/2.0.11/libexec/databases/<your database name>/<your database name>```

Then connect to your database

```CONNECT <database-url> <user-name> <user-password>```

After that, you should set your environment variables to these credentials and run a connection script in db.js: coming soon

## Jump-starting your App

Check the [wiki](https://github.com/mindeavor/node-catapult/wiki) for snippets to jump-start your app, including:

- Express cookie sessions
- Postgres and knex.js
- A functional-programming-based "ORM" pattern for your database models

## Browserify Middleware

The most notable part of this app is [browserify-middleware](https://github.com/ForbesLindesay/browserify-middleware). Great node packages are exceedingly rare – this is one of those packages.
