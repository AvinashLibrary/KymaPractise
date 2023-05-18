var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var k = [1,2,3,4,5,6,7,8,9]
  res.json(k);
});
router.get('/alpha', function(req, res, next) {
  var k = ['A','B','C','D','E']
  res.json(k);
});
router.get('/newDockerFile', function(req, res, next) {
    res.json("Now new Docker file is added");
});

module.exports = router;
