FROM node:12
# Use an official node runtime as a parent image

WORKDIR /app/

# Install dependencies
# COPY package.json yarn.lock /app/

# RUN npm install

# Add rest of the client code
COPY client ./
COPY package.json ./

RUN npm install

EXPOSE 3000

CMD npm start