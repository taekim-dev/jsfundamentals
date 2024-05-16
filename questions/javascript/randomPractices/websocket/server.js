const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', socket => {
    console.log('Client connected');

    // Respond messages
    socket.on('message', message => {
        console.log(`Receved message: ${message}`);
        socket.send(`Echo: ${message}`);
    })

    socket.on('close', () => {
        console.log('Client disconnected');
    });
})

console.log('WebSocket server is running on ws://localhost:8080');
