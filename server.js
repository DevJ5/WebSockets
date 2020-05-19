const ws = require('ws');

const port = 4000;
const server = new ws.Server({ host: '0.0.0.0', port: 4000 }, () => console.log("Listening on port " + port));

server.on('connection', socket => {
    socket.on('message', message => {
        server.clients.forEach(client => {
            const data = JSON.stringify(message);
            console.log(message);
            client.send(message);
        });
    });
});