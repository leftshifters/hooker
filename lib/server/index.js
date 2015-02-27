var express = require('express');
var debug = require('debug')('hooker:server');
var bodyParser = require('body-parser');

var routes = require('./routes');
var github = require('./routes/github');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);
app.use('/github', github);

module.exports = exports = app;