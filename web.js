var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  console.log("About to read index.html from file");
  var buffer = fs.readFileSync("index.html");
  console.log("Read in file");
  response.send(buffer.toString());
  console.log("Printed to response");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
