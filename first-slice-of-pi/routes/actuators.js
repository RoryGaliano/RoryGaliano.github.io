var express = require('express'),
	router = express.Router(),
	resources = require('./../resources/model');

	

module.exports = router;

router.route('/leds/:id').get(function (req, res, next) {
	res.send(resources.pi.actuators.leds[req.params.id]);
});

router.route('/leds').get(function (req, res, next) {
	res.send(resources.pi.actuators.leds);
});
