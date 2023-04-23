# Uses current node LTS image with slim bullseye debian version
FROM node:lts-bullseye-slim

# Sets workspace folder
WORKDIR /usr/src/app

# Copies both package.json and
COPY package*.json ./

# Install app dependencies
RUN yarn install

# Copies source files
COPY . .

# Starts the application
CMD yarn start
