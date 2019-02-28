FROM node:10.9.0-alpine

RUN mkdir -p /app
COPY . /app
WORKDIR /app

RUN apk update && apk upgrade && apk add git

COPY package.json /app
#RUN npm rebuild
RUN npm install

ENV NODE_ENV=dev

COPY . /app
RUN npm run dev

ENV HOST 0.0.0.0
EXPOSE 3333

CMD ["npm", "run dev"]