var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  try {
      var line1 = "Hello " + req.authInfo.getLogonName();
      var line2 = "your tenant sub-domain is " + req.authInfo.getSubdomain();
      var line3 = "your tenant zone id is " + req.authInfo.getZoneId();
      var responseMsg = line1 + "; " + line2 + "; " + line3;
      res.send(responseMsg);
  } catch (e) {
      console.log("AuthInfo object undefined.");
      var responseMsg = "Hello World! Avinash";
      res.send(responseMsg);
  }
});
module.exports = router;
