var router = require('express').Router();
var debug = require('debug')('hooker:routes:github');

router.post('/issue', function(req, res) {
  debug('url', req.url);
  debug('method', req.method);
  debug('body', req.body);
  res.send('ok');

  debug('sent response');
});

module.exports = router;