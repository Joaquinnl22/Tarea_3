FROM node:current-alpine3.16
WORKDIR /usr/app
COPY package-lock.json /usr/app
COPY package.json /usr/app
COPY index.js /usr/app/
RUN npm install




CMD [ "npm","start" ]