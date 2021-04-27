var sensorRoutes = require('./../routes/sensors');

var express = require('express'),
	cors = require('cors');
	

var app = express();
app.use(cors());
app.use("/pi/sensors", sensorRoutes);
app.get('/', function(req, res){
	res.send('Some response for accessing the root');
});

module.exports = app;

var actuatorRoutes = require("./../routes/actuators");
app.use('/pi/actuators', actuatorRoutes);
