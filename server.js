const ws = require('ws');

const port = 4000;
const server = new ws.Server({ host: '0.0.0.0', port: 4000 }, () => console.log("Listening on port " + port));

server.on('connection', socket => {
    // Send connection established message to client
    socket.send("Connection established.");
    // Listen for messages from client
    socket.on('message', message => {
        server.clients.forEach(client => {
            // Log incoming message
            console.log(message);
            // Broadcast the incoming message to all clients
            client.send(message);
        });
    });
});