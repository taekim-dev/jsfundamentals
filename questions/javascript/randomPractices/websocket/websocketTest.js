const Websocket = require('ws');
const assert = require('assert');

function createWebSocketClient() {
    return new Promise((resolve, reject) => {
        const client = new WebSocket('ws://localhost:8080');

        client.on('open', () => resolve(client));
        client.on('error', error => reject(error));
    })
}

async function runTests() {
    // Test Connection
    try {
        const client = await createWebSocketClient();
        console.log('Test: Client connected successfully');
        client.close();
    } catch (err) {
        console.log('Test: client connection failed', err)
    }

    // Message send / receive
    try {
        const client = await createWebSocketClient();

        client.on('message', message => {
            assert.strictEqual(message, 'Echo: Hello');
            console.log('Test: Message received successfully');
            client.close();
        })

        client.send('Hello');
    } catch (err) {
        consolelog('Test: Send/receive message filed', err);
    }

    // disconnection
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
