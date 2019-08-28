const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes.func);

console.log(routes.text);

server.listen(3000);