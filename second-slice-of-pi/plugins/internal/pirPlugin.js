var resources = require('./../../resources/model');
var Gpio = require('onoff').Gpio;

var sensor;
var device = resources.pi.sensors.pir;

function connectHardware() {
	sensor = new Gpio(device.gpio, "in", "both")
	// Gpio.watch()
	sensor.watch(function (err, value){
	  if (err) {
	  	exit(err);
	  }
	  console.log(value ? 'there is someone!' : 'not anymore!');
});
}

/*
Gpio.watch()
sensor.watch(function (err, value){
  if (err) {
  	exit(err);
  }
  console.log(value ? 'there is someone!' : 'not anymore!');
});
*/

exports.start = function (params) {
	connectHardware();
};

exports.stop = function () {
	sensor.unexport();
};
