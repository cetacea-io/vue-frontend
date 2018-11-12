FROM node:8.11.1-alpine

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install


EXPOSE 8080
CMD [ "npm", "run", "dev" ]