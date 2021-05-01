#!/bin/bash
set -e

ENV_VAR_PATH=../.env
echo "loading variables from ${ENV_VAR_PATH}"
source ${ENV_VAR_PATH}

DATABASE_DOCKER_NAME=habit-mapper-postgres;

SERVER=${DATABASE_DOCKER_NAME};
PGUSER=${DATABASE_USERNAME};
PW=${DATABASE_PASSWORD};
DB=${DATABASE_NAME};

echo "echo stop & remove old docker [$SERVER] and starting new fresh instance of [$SERVER]"
(docker kill $SERVER || :) && \
  (docker rm $SERVER || :) && \
  docker run --name $SERVER \
  -env POSTGRES_USER=$PGUSER \
  -env POSTGRES_PASSWORD=$PW \
  --volume $HOME/workspace/Docker/Postgres:/var/lib/postgresql/data \
  --publish 5432:5432 \
  --detach postgres

# # wait for pg to start
# echo "sleep wait for pg-server [$SERVER] to start";
# sleep 3;

# # create the db
# echo "CREATE DATABASE $DB ENCODING 'UTF-8';" | docker exec -i $SERVER psql -U postgres
# echo "\l" | docker exec -i $SERVER psql -U postgres
