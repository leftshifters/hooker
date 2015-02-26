var express = require('express');
var debug = require('debug')('hooker:server');

var app = express();

app.get('/', function(req, res) {
  res.send('ok');
});

module.exports = exports = app;