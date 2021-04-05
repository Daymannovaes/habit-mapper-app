FROM node:alpine

# diretório alvo
WORKDIR /usr/src/app

# It looks like `npm` works "better" with those packages
RUN apk update && apk upgrade
RUN apk add python3 g++ make


# Probably we have everything we need inside dist,
# if we ran the build-server.sh script
COPY dist/ .



# COPY package.json .
# RUN npm install


EXPOSE 5000

ENV NODE_ENV=production

CMD [ "npm", "run", "start:prod" ]
