const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 5000;

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

http.listen(PORT, () => {
  console.log(`Server working on ${PORT} PORT`);
});
