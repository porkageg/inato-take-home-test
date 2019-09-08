FROM node:12

WORKDIR /app

COPY package.json /app/package.json
RUN yarn install

COPY . /app

CMD ["yarn", "start"]