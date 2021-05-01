# Title
Migrate from lerna and multiple packages to multiple folders and refactor infrastructure package

## Status

_What is the status, such as proposed, accepted, rejected, deprecated, superseded, etc.?_

- proposed

## Context

_What is the issue that we're seeing that is motivating this decision or change?_

Managing the folders as packages caused some troubles. For example:
- typescript not always have found the packages. I needed to add some build steps to create a .d.ts, .ts and .js for each shared package
- Docker build didn't work properly. Since the packages aren't published, `npm install` didn't work

- environment variables for the database access were placed inside the infrastructure package, which is a bad practice.

## Decision

_What is the change that we're proposing and/or doing?_
- moved packages/* to * (server, interfaces, infrastructure, entities)
- the import statements remains the same (import '@habit-mapper-app/...'), but they are now managed by typescript, instead of lerna
  - all tsconfig files in the packages now extends tsconfig.base.json in the root, which defines the path resolving
- the tsconfig files needed to be copied in the docker build proccess. It worked smoothly

- ormConfig was moved from infrastructures to api. Because orm is something specific to the api app.
- The env config files was move to the root. To run api in dev environment correctly, the developer needs to source the .env file. This is done automatically in the `npm start`
- To run the production version of api (docker), the developer needs to pass the --env-file parameter, which is also done automatically in the `npm run run:api:prod`

- moved eslint to the root folder

## Consequences

_What becomes easier or more difficult to do because of this change?_

- building dockerized API became easier
- importing shared libraries is now easier. Not build process is required anymore
   - [FIXED] However, linting is not working properly, although the ts importing are. This is due probably because if inability of lintinh to follow the extends command
- Installing packages is slightly more difficult because we don't have `npx lerna boostrap` anymore. I needed to add a `concurrently` to cd & install all packages after install the root
- It's still hard to distinguish what is an deployable app (in the case, api and user-interfaces) and what is a library shared by all apps (in the case, infrastructures and entities)

- eslint configurations were centralized, but now it's VERY slow to run. Tryed some optimizations, but didn't work.
