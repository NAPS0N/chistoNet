# authService/Dockerfile
FROM node:22

WORKDIR /usr/src/authService

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]