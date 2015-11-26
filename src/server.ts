import Hapi = require('hapi');
var log = require('./logger');


var server = new Hapi.Server();
server.connection({
	port: 10001,
	labels: "Web"
});

server.start((err) => {
	if (err)
		return log.error("Error while loading server: " + err);
	return log.info('Server running on port: ' + server.info.uri);
});