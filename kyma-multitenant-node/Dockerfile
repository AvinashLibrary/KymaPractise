FROM node:18-alpine
WORKDIR ./app
COPY package*.json ./
RUN npm install
COPY public /app/public
COPY routes /app/routes
COPY views /app/views
COPY bin /app/bin
COPY app.js /app/app.js
EXPOSE 3000
CMD [ "npm", "start" ]
