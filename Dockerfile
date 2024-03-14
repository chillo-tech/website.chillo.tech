FROM node:18.19-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install
#Uncomment this when you're on prod environment
#RUN yarn build

COPY ./ ./

EXPOSE 3000

#Uncomment this when you're on prod environment
#CMD ["yarn", "start"]
#Comment this when you're on prod environment
CMD ["yarn", "dev"]
