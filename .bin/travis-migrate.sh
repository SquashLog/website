: ${NODE_ENV:=development}
: ${DB_USER:=$DB_USERNAME}
: ${DB_PASSWORD:=$DB_PASSWORD}
: ${DB_HOST:=$HOST}
: ${DB_NAME:=$TRAVIS_BRANCH}

echo "Migrating $DB_NAME"

# $@ passes ALL arguments to command
NODE_ENV=$NODE_ENV \
DB_USER=$DB_USER \
DB_PASSWORD=$DB_PASSWORD \
DB_HOST=$DB_HOST \
DB_NAME=$DB_NAME \
./node_modules/.bin/migrate $@
