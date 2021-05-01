FROM node:12.13-alpine As development

# install dev dependencies, necessary for build
WORKDIR /usr/src/app/api

COPY api/package*.json .

RUN npm install --only=development

# copy all files and shared libraries, prepare for build
WORKDIR /usr/src/app

COPY tsconfig.base.json .

COPY api/. api/
COPY entities/. entities/
COPY infrastructures/aws/. infrastructures/aws/

# build api at api/dist
WORKDIR /usr/src/app/api
RUN npm run build

FROM node:12.13-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY api/package*.json ./

RUN npm install --only=production

COPY --from=development /usr/src/app/api/dist ./dist

EXPOSE 5000

CMD ["npm", "run", "start:prod"]
