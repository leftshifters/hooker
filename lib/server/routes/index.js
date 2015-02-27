var router = require('express').Router();

router.get('/', function(req, res) {
  res.send('hooker');
});

module.exports = router;