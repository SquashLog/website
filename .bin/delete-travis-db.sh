#!/bin/bash

SUB_DIR="$TRAVIS_BRANCH/plocal/graph"

TEST_PATH=$DB_URL$SUB_DIR

#initialize AUTH_TOKEN
AUTH_TOKEN=$(echo -n $DB_USERNAME:$DB_PASSWORD | openssl base64)

#delete branchname db to remote ip
#prevents server from becoming polluted
curl -X DELETE -H "Authorization: Basic $AUTH_TOKEN" $TEST_PATH && echo ' done.'
