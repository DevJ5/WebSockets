FROM node:14.4.0-alpine
RUN mkdir /app
WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

CMD node server.js

EXPOSE 4000
