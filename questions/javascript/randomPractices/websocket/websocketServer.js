import { WebSocketServer } from 'ws';

const server = new WebSocketServer({ port: 8080 });

server.on('connection', socket => {
  console.log('Client connected');

  // Respond to messages from the client
  socket.on('message', message => {
    console.log(`Received message: ${message}`);
    socket.send(`Echo: ${message}`);
  });

  // Handle client disconnection
  socket.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
