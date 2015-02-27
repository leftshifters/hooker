var express = require('express');
var debug = require('debug')('hooker:server');

var routes = require('./routes');
var github = require('./routes/github');

var app = express();

app.use('/', routes);
app.use('/github', github);

module.exports = exports = app;