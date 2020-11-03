var express = require('express');
var app = express();
var fs = require('fs');

const port = process.env.PORT || 8080

app.get('/', function (req, res) {

  res.send("Hello World!");
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});