const tryPorts = require(".");

const http = require('http');
const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(8888);

tryPorts(8888, port => {
	// should return 8889
	console.log("listening to port: " + port);
})