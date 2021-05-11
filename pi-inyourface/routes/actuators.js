var ledsPlugin = require('./../plugins/internal/ledsPlugin');

var express = require('express'),
	router = express.Router(),
	resources = require('./../resources/model');

	

module.exports = router;

router.route('/leds').get(function (req, res, next) {
	req.result = resources.pi.actuators.leds;
	next();
}).put(function (req, res, next) {
	resources.pi.actuators.leds.value = req.body.value;
	req.result = resources.pi.actuators.leds.value
	ledsPlugin.switchOnOff[req.params.id](req.body.value);
	next();
});

router.route('/leds/:id').get(function (req, res, next) {
	req.result = resources.pi.actuators.leds[req.params.id];
	next();
});
