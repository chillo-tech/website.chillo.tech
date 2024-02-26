FROM node:18.19-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./ ./

RUN npm install
#Uncomment this when you're on prod environment
#RUN npm run build

EXPOSE 3000

#Uncomment this when you're on prod environment
#CMD ["npm", "start"]
#Comment this when you're on prod environment
CMD ["npm", "run", "dev"]
