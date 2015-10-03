#!/bin/bash

SUB_DIR="$TRAVIS_BRANCH/plocal/graph"

TEST_PATH=$DB_URL$SUB_DIR

#initialize AUTH_TOKEN
AUTH_TOKEN=$(echo -n $DB_USERNAME:$DB_PASSWORD | openssl base64)

#create new dp to remote ip in order for travis to have a test db
curl -X POST -H "Authorization: Basic $AUTH_TOKEN" $TEST_PATH && echo ' done.'

#run migrations
npm run travis-migrate
