var json2html = require('node-json2html');

module.exports = function() {
	return function (req, res, next) {
		// TODO 2: Create the converter function
		if (req.result) {
			res.send(req.result);
			if (req.accepts('html')) {
				let transform = {'<>': 'div', 'html': [
					{'<>': 'p', 'html': [
						{'<>': 'b', 'html': 'Property1: name'},
						{'<>': 'p', 'html': '${name}'}
					]},
					{'<>': 'p', 'html': [
						{'<>': 'b', 'html': 'Property2: description'},
						{'<>': 'p', 'html': '${description}'}
					]},
					{'<>': 'p', 'html': [
						{'<>': 'b', 'html': 'Property3: value'},
						{'<>': 'p', 'html': '${value}'}
					]}
				]};
				res.send(json2html.transform(req.result, transform));
			}
		} else {
			next();
		}
	};
};
