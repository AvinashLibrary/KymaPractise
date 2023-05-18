var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource avinash port changed');
});
router.get('/item', function(req, res, next) {
  var k = ['A','B','C','D','E']
  // res.json(k);
  res.send(k);
});

module.exports = router;
