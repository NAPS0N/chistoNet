# authService/Dockerfile
FROM node:22

WORKDIR /usr/src/productService

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4000

CMD ["node", "index.js"]