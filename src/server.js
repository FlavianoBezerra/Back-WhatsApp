const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
//on -> receptor
//emit -> enviar
const users = [];

const port = process.env.PORT || 4000;

io.on("connection", (socket) => {
    socket.on("disconnect", () => {

    })

    socket.on("join", (name) => {
        const user = { id: socket.id, name };
        users.push(user);
        io.emit("message", {name: null, message: `${name} entrou no chat`});
        io.emit("users", users);
    });

    socket.on("message", (message) => {
        io.emit("message", message);
    });
});

server.listen(port, () => console.log(`server is running on ${port}`));