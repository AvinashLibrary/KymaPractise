const { PerformanceObserver, performance } = require('perf_hooks');
var util = require('util');
var hana = require('@sap/hana-client');
var express = require('express');
var router = express.Router();
var  xsenv = require('@sap/xsenv');

router.get('/', function(req, res, next) {

console.log('AT sapcp also ',xsenv.readServices('/etc/secrets/sapcp/credstore/credential-store'));



// var connOptions = {
//         serverNode: '677330c3-0171-4191-af2a-9d4feaf26ab9.hana.trial-us10.hanacloud.ondemand.com:443',
//         UID: "USR_0RX6V0P185WE2ZYJ0JHEN65AC",
//         PWD: "Zr02IiEtq42R0GVSM7yi6MeEusSVInBjY.mMqXJgxQ84ed17sHi1_uJgZ2h5rbIUsFGJeNY3twsRfSTY5noKAn7O_eRtPGPCTlh1BBvRCYPJjfALW9E4UNMUtuTsFZEZ",
//         sslValidateCertificate: 'false',

// };
//     var conn = hana.createConnection();
//     // connection.connect();
//     conn.connect(connOptions, function(err) {
//         if (err) throw err;
//         conn.exec(`SELECT TOP 1000
//         "PERSONID",
//         "LASTNAME",
//         "FIRSTNAME",
//         "ADDRESS",
//         "CITY"
//     FROM "USR_0RX6V0P185WE2ZYJ0JHEN65AC"."PERSONS"`, function (err, result) {
//           if (err) throw err;
//           console.log(result);
//           conn.disconnect();
//         })
//       });
});
  
module.exports = router;