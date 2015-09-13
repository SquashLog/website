#!/bin/bash


echo "Initializing script..."

#check if user has java runtime installed
type java >/dev/null 2>&1 || { echo >&2 "Please install java and try running this script again.  Aborting."; exit 1;}

clear

cat > .env << EOT
DB_USER=admin
DB_PASSWORD=admin
DB_HOST=localhost
DB_NAME=squash_development
DB_URL=http://localhost:2480
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
EOT

brew install wget

# download the orientdb
wget -O orientdb.tar.gz 'http://orientdb.com/download.php?email=unknown@unknown.com&file=orientdb-community-2.1.2.tar.gz&os=mac'
tar -xvf orientdb.tar.gz
mv orientdb-community-2.1.2 orientdb
rm -rf orientdb-community-2.1.2
rm orientdb.tar.gz

# chmod every .sh file to be executable
chmod 755 ./orientdb/bin/*.sh
chmod -R 777 ./orientdb/config

cd ./orientdb/bin/

echo development | ./server.sh &
pid=$!
sleep 20

AUTH_TOKEN=$(echo -n 'root:development' | openssl base64)
echo "AUTH: $AUTH_TOKEN"

echo -n 'Creating development database...'
curl -X POST -H "Authorization: Basic $AUTH_TOKEN" 'http://localhost:2480/database/squash_development/plocal/graph' && echo ' done.'

echo -n 'Creating test database...'
curl -X POST -H "Authorization: Basic $AUTH_TOKEN" 'http://localhost:2480/database/squash_test/plocal/graph' && echo ' done.'

kill ${pid}
npm install
# npm run migrate

echo "Setup Completed"
echo "DEV OPS YO"

# CONFIG_PATH=/orientdb/orientdb-community-2.1.2/config/orientdb-server-config.xml
# PASS=$(grep -o 'password=\([^\ ]\{23,\}\)' $CONFIG_PATH | sed 's/^[^"]*"\([^"]*\)".*/\1/')

# grep -o 'password=\([^\ ]\{23,\}\)' $CONFIG_PATH | sed 's/^[^"]*"\([^"]*\)".*/\1/'
