#!/bin/bash

#set DB_NAME to branch name
DB_NAME=$TRAVIS_BRANCH

SUB_DIR='$DB_NAME/plocal/graph'

TEST_PATH=$DB_URL$SUB_DIR

#initialize AUTH_TOKEN
AUTH_TOKEN=$(echo -n 'DB_USERNAME:DB_PASSWORD' | openssl base64)

#create new db to remote ip
curl -X POST -H "Authorization: Basic $AUTH_TOKEN" $TEST_PATH && echo ' done.'
