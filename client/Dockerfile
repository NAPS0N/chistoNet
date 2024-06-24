FROM node:14 as build

WORKDIR /usr/src/client

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

COPY --from=node /usr/src/client/dist /usr/src/frontend