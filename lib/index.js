#!/usr/bin/env node

var debug = require('debug')('hooker:www');
var app = require('./server');

if ('production' === process.env.NODE_ENV) {
  try {
    require('newrelic');
  } catch(e) {
    console.error('WARNING!');
    console.error('newrelic npm package is not installed.');
    console.error('run the following command to install');
    console.error('npm install newrelic');
  }
}

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Hooker server listening on port ' + server.address().port);
});