#!/bin/bash
set -e

SERVER="habit-mapper-postgres";
PGUSER="root";
PW="habitmapperpg";
DB="root";

echo "echo stop & remove old docker [$SERVER] and starting new fresh instance of [$SERVER]"
(docker kill $SERVER || :) && \
  (docker rm $SERVER || :) && \
  docker run --name $SERVER \
  -e POSTGRES_USER=$PGUSER \
  -e POSTGRES_PASSWORD=$PW \
  -v $HOME/workspace/Docker/Postgres:/var/lib/postgresql/data \
  -p 5432:5432 \
  -d postgres

# # wait for pg to start
# echo "sleep wait for pg-server [$SERVER] to start";
# sleep 3;

# # create the db
# echo "CREATE DATABASE $DB ENCODING 'UTF-8';" | docker exec -i $SERVER psql -U postgres
# echo "\l" | docker exec -i $SERVER psql -U postgres