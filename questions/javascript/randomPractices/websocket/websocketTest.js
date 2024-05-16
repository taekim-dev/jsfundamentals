import { WebSocket } from 'ws';
import assert from 'assert';

function createWebSocketClient() {
  return new Promise((resolve, reject) => {
    const client = new WebSocket('ws://localhost:8080');

    client.on('open', () => resolve(client));
    client.on('error', err => reject(err));
  });
}

async function runTests() {
  // Test case: Client connection
  try {
    const client = await createWebSocketClient();
    console.log('Test: Client connected successfully');
    client.close();
  } catch (err) {
    console.error('Test: Client connection failed', err);
  }

  // Test case: Send and receive message
  try {
    const client = await createWebSocketClient();

    client.on('message', message => {
      const receivedMessage = message.toString();
      assert.strictEqual(receivedMessage, 'Echo: Hello');
      console.log('Test: Message received successfully');
      client.close();
    });

    client.send('Hello');
  } catch (err) {
    console.error('Test: Send/receive message failed', err);
  }

  // Test case: Handle client disconnection
  try {
    const client = await createWebSocketClient();

    client.on('close', () => {
      console.log('Test: Client disconnected successfully');
    });

    client.close();
  } catch (err) {
    console.error('Test: Client disconnection failed', err);
  }
}

runTests();
