const resources = require('./../../resources/model');
var Gpio = require('onoff').Gpio;

let actuator1, actuator2;
let model = resources.pi.actuators.leds;
let pluginName = resources.pi.actuators.leds[1].name + ", " + resources.pi.actuators.leds[2].name;

exports.start = function (params) {
	connectHardware();
	console.log("starting " + pluginName + " plugin");
};

// TODO 1: Complete the ledsPlugin!

function connectHardware () {
	actuator1 = new Gpio(model[1].gpio, "out", "both")
	actuator2 = new Gpio(model[2].gpio, "out", "both")
}

exports.stop = function () {
	actuator1.LEDGpioConnection.write(0);
	actuator2.LEDGpioConnection.write(0);
	actuator1.unexport();
	actuator2.unexport();
}

exports.switchOnOff = {
	1: function (value) {
		actuator1.LEDGpioConnection.write(value+0);
	},
	2: function (value) {
		actuator2.LEDGpioConnection.write(value+0);
	}
}
