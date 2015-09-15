#!/bin/bash


clear

#check to see if the server is running, if not echo "Please start your orientdb server"

echo "Initializing restart..."

echo "  "

cd ./orientdb/bin/


echo development | ./server.sh &
pid=$!
sleep 15

AUTH_TOKEN=$(echo -n 'root:development' | openssl base64)

echo "Deleting the current database..."
curl -X DELETE -H "Authorization: Basic $AUTH_TOKEN" 'http://localhost:2480/database/squash_development/plocal/graph' && echo ' done.'

echo "Creating a fresh development database..."

curl -X POST -H "Authorization: Basic $AUTH_TOKEN" 'http://localhost:2480/database/squash_development/plocal/graph' && echo ' done.'

kill ${pid}

sleep 10

echo "Re-running migrations on the new database..."

npm run db-migrate

echo "Restart complete"
