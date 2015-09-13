: ${NODE_ENV:=development}
: ${DB_USER:=admin}
: ${DB_PASSWORD:=admin}
: ${DB_NAME:=squash_$NODE_ENV}

echo "Migrating $DB_NAME"

# $@ passes ALL arguments to command
NODE_ENV=$NODE_ENV \
DB_USER=$DB_USER \
DB_PASSWORD=$DB_PASSWORD \
DB_NAME=$DB_NAME \
./node_modules/.bin/migrate $@
