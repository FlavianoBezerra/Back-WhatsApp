const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

//on -> receptor
//emit -> enviar

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`server is running on ${port}`));

io.on('connection', (socket) => {
    console.log(socket.id);
});