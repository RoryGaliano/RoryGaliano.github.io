// requestServer.js file
// var args = process.argv.slice(2);
const { RSA_NO_PADDING } = require("constants");
const http = require("http");
const request = require("request");
var args = process.argv.slice(2);
var port = 8686;

var server = http.createServer(function(req,res){
    // handle response
    /*
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello ');
    res.end('World!');
    */

   request('http://rorygaliano.github.io', function(error, response, body) {
     var url = args[0] ? args[0] : "http://rorygaliano.github.io";
     if (!error && response.statusCode === 200) {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write(body);
     }
     else {
       res.writeHead(response.statusCode, {"Content-Type": "text/plain"})
       res.write(error.toString());
     }
     res.end();
   });

    // var url = args[0] ? args[0] : "<a default url>";
  });
server.listen(port);

// example request call
// request('http://url.com', callbackFunction);