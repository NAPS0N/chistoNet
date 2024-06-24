const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const morgan = require("morgan");
const http = require("http");
require("dotenv").config();
// const { connectionCb, wss } = require("./socket/wsServer");
// const { WebSocketServer } = require("ws");
const map = new Map();
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("dev")); // логирует HTTP запросы
app.use(cookieParser()); // для чтения кук
app.use(express.urlencoded()); // для чтения данных из формы
app.use(express.json()); // для чтения JSON данных

const indexRouteApi = require("./routes/index.routes");
// const wssCb = require("./socket/wssCb");


app.use("/api", indexRouteApi);

//
// Create an HTTP server.
//
const server = http.createServer(app);

// // Ловим событие переключения на сокеты
// server.on("upgrade", connectionCb);
// // Ловим событие подключения к веб-сокету см connectionCb  wss.emit("connection", ws, request, user.user);
// wss.on("connection", wssCb);

server.listen(process.env.PORTauth, () => {
  console.log(`Server Auth запущен! PORT=${process.env.PORTauth}`);
});