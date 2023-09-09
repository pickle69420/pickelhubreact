const express = require('express');
const http = require('http');
const next = require('next');
const { parse } = require('url');
const { createBareServer } = require('@tomphttp/bare-server-node');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const nextOptions = {
  target: 'http://localhost:3001',
  changeOrigin: true,
}
const bareOptions = {
  target: 'http://localhost:3002',
  changeOrigin: true,
}
const nextProxy = createProxyMiddleware(nextOptions);
const bareProxy = createProxyMiddleware(bareOptions);

const dev = process.env.NODE_ENV !== 'production';
const hostname = /*'picklehubreact.hop.sh'*/ 'localhost';
const port = 3001;
const nextapp = next({ dev, hostname, port });
const handle = nextapp.getRequestHandler();

nextapp.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> PIKL Ready on http://${hostname}:${port}`)
    })
});

const httpServer = http.createServer();
const bareServer = createBareServer("/bare/");

httpServer.on("request", (req, res) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

httpServer.on("upgrade", (req, socket, head) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

httpServer.on("listening", () => {
  console.log(`Bare listening on http://localhost:3002/`);
});

httpServer.listen({
  port: 3002
});

app.use('/', (req, res, next) => {
  if (req.url.startsWith('/bare/')) {
    bareProxy(req, res, next);
  } else {
    nextProxy(req, res, next);
  }
});

app.listen(3000,()=>{
  console.log('listening on 3000');
});