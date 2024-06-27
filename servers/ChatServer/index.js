const path = require("path");
require("dotenv").config({ path: path.join('../.env')});
const express = require('express');
const cookieParser = require("cookie-parser");

const cors = require('cors');

const app = express();

app.use(cookieParser()); 
app.use(express.urlencoded()); 
app.use(express.json()); 

// функция, которая будет прослушивать приложение
app.get('/api', (req, res) => {
  res.json({
    message: 'Hello',
  });
});

// чтобы работал socket io - сервер будет слушать модуль http
const http = require('http').Server(app);

const socketIo = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:5173', // 5173 потому что vite будет работать на нем
  },
});
const indexRouteApi = require('./routes/index.routes');

app.use('/api/chat/message', indexRouteApi);

const users = [];
// connection - это имя события, которое мы хотим прослушивать
socketIo.on('connection', (socket) => {
  console.log(`${socket.id} user connected`);

  socket.on('message', (data) => {
    socketIo.emit('response', data);
  });

  // broadcast чтобы надпись появлялась и исчезала
  socket.on('typing', (data) => {
    socket.broadcast.emit('responseTyping', data);
  });

  socket.on('newUser', (data) => {
    users.push(data);
    socketIo.emit('responseNewUser', users);
  });

  socket.on('disconnect', () => {
    console.log(`${socket.id} user disconnect`);
  });
});

http.listen(process.env.PORTchat, () => {
  console.log(`Server working on ${process.env.PORTchat} PORT`);
});
