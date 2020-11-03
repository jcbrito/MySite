var express = require('express');
var app = express();
var fs = require('fs');

const port = process.env.PORT || 8080

app.get('/', function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
  res.send();
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});