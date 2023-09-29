const next = require('next');
const http = require('http');
const { createBareServer } = require('@tomphttp/bare-server-node');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

app.prepare();

const httpServer = http.createServer();

const bareServer = createBareServer('/bare/');

httpServer.on('request', (req, res) => {
    if (bareServer.shouldRoute(req)) {
        bareServer.routeRequest(req, res);
    } else {
        handle(req,res);
    }
});

httpServer.on('upgrade', (req, socket, head) => {
    if (bareServer.shouldRoute(req)) {
        bareServer.routeUpgrade(req, socket, head);
    } else {
        socket.end();
    }
});

httpServer.on('listening', () => {
    console.log(' > PIKL ready on port 3000');
});

httpServer.listen({
    port: 3000,
});