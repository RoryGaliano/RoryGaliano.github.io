// console.log("Hello!");

var Gpio = require('onoff').Gpio;
var sensor = new Gpio(4, 'in', 'both');

sensor.watch(function (err, value) {
  // console.log(value);
  // console.log(err);
  if (err) {
  	exit(err);
  }
  console.log(value ? 'there is someone!' : 'not anymore!');
});

function exit(err) {
  sensor.unexport();
  console.log('Bye, bye!')
  process.exit();
}
process.on('SIGINT', exit);

