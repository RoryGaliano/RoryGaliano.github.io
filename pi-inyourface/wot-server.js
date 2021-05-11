var httpServer = require('./servers/http'),
	resources = require('./resources/model'),
	websocketsServer = require('./servers/websockets');

var pirPlugin = require("./plugins/internal/pirPlugin");
pirPlugin.start({});

var dhtPlugin = require("./plugins/internal/dhtPlugin");
dhtPlugin.start({'frequency': 2000});

var ledsPlugin = require("./plugins/internal/ledsPlugin");
ledsPlugin.start({});

var server = httpServer.listen(resources.pi.port, function () {
	console.log("Running the Pi on port " + resources.pi.port);
	websocketsServer.listen(server);
});

process.on('SIGINT', function() {
	pirPlugin.stop();
	dhtPlugin.stop();
	ledsPlugin.stop();
	process.exit();
});
