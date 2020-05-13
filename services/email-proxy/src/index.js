const http = require('http');
const app = require('./app');
const { PORT, EXPOSED_PORT } = require('./env');

const { log } = console;

process.on('unhandledRejection', (e) => { throw e; });

const server = http.createServer(app);

server.listen(PORT, () => log(`> Ready on http://0.0.0.0:${EXPOSED_PORT}`));
