var express = require('express'),
	router = express.Router(),
	resources = require('./../resources/model');

	

module.exports = router;

router.route('/leds').get(function (req, res, next) {
	req.result = resources.pi.actuators.leds;
	next();
});

router.route('/leds/:id').get(function (req, res, next) {
	req.result = resources.pi.actuators.leds[req.params.id];
	next();
});
