#!/bin/bash

# @todo this file shouldn't exist. We should be able to rely completely on Dockerfile

# ensure all packages installed and also builded
printf "\n\n\tBOOTSTRAPING ALL PACKAGES...\n\n"
npx lerna bootstrap


# construct the dist/ folder
printf "\n\n\tBUILDING SERVER PACKAGE...\n\n"
cd packages/server
yarn build

# We can't use Docker COPY here because at node_modules/@habit-mapper-app
# we have a symlink, which docker can't follow. So we use the cp with the `-r` option
# Also, we can't rely on `npm install` completely because @habit-mapper-app
# packages are not published
printf "\n\n\tCOPYING NODE_MODULES TO DIST/ FOLDER...\n\n"
cp -r node_modules/ dist/node_modules/

cp package.json dist/


printf "\n\n\tCALLING DOCKER BUILD...\n\n"
docker build . -t habit-mapper-app/server

printf "\n\n\tDONE...\n\n"
