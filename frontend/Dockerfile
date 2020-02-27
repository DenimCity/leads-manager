FROM node:12-alpine

WORKDIR '/app'


COPY package.json /app/
RUN npm install

# Add rest of the client code
COPY . /app/

EXPOSE 3000

CMD npm build