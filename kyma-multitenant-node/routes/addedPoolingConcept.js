const { PerformanceObserver, performance } = require('perf_hooks');
var util = require('util');
var hana = require('@sap/hana-client');
var express = require('express');
var router = express.Router();


var connOptions = {
    serverNode: '677330c3-0171-4191-af2a-9d4feaf26ab9.hana.trial-us10.hanacloud.ondemand.com:443',
    UID: "USR_0RX6V0P185WE2ZYJ0JHEN65AC",
    PWD: "Zr02IiEtq42R0GVSM7yi6MeEusSVInBjY.mMqXJgxQ84ed17sHi1_uJgZ2h5rbIUsFGJeNY3twsRfSTY5noKAn7O_eRtPGPCTlh1BBvRCYPJjfALW9E4UNMUtuTsFZEZ",
    sslValidateCertificate: 'false',

};

var conn = hana.createConnection();

var poolProperties = {
    poolCapacity: 10,  //max # of connections in the pool waiting to be used
    maxConnectedOrPooled: 20, //max # of connections in the pool + the # of connections in use
    pingCheck: false,
    maxPooledIdleTime: 3600, //1 hour (in seconds)
}

var pool = null;



function queryTable(usePool, run) {
    var t0 = performance.now()
    var connection = null;
    if (!usePool) {
        connection = hana.createConnection();
        connection.connect(connOptions);
        var t1 = performance.now();
    }
    else {
        var t0 = performance.now();
        if (pool === null) {
            pool = hana.createPool(connOptions, poolProperties); //create a connection pool
        }

        connection = pool.getConnection(); //get a connection from the pool
        var t1 = performance.now();
    }

    var t2 = performance.now();
    var sql = `SELECT TOP 1000
    "PERSONID",
    "LASTNAME",
    "FIRSTNAME",
    "ADDRESS",
    "CITY"
    FROM "USR_0RX6V0P185WE2ZYJ0JHEN65AC"."PERSONS"`;
    var result = connection.exec(sql);
    var t3 = performance.now();

    var t4 = performance.now();
    //console.log(util.inspect(result, { colors: false }));
    var t5 = performance.now();

    var t6 = performance.now();
    connection.disconnect(); //returns connection to the pool
    var t7 = performance.now();

    console.log("Connection Pool Enabled: " + usePool + " " + run);
    console.log("=====================================");
    console.log("Connection time in ms: " + (t1 - t0));
    console.log("Query time in ms        " + (t3 - t2));
    console.log("Display time in ms:     " + (t5 - t4));
    console.log("Disconnect time in ms:   " + (t7 - t6));
    console.log("Total time in ms:      " + (t7 - t0) + "\n");
}

router.get('/', function (req, res, next) {

    queryTable(false, "1st Run");
    queryTable(false, "2nd Run");
    queryTable(true, "1st Run");
    queryTable(true, "2nd Run");
    console.log("Connections in use :" + pool.getInUseCount());
    console.log("Connections in the pool :" + pool.getPooledCount());
});




function queryTableSecond(usePool, run) {
    var t0 = performance.now()
    var connection = null;
    if (!usePool) {
        connection = hana.createConnection();
        connection.connect(connOptions);
        var t1 = performance.now();
    }
    else {
        var t0 = performance.now();
        if (pool === null) {
            pool = hana.createPool(connOptions, poolProperties); //create a connection pool
        }

        connection = pool.getConnection(); //get a connection from the pool
        var t1 = performance.now();
    }

    var t2 = performance.now();
    var sql = `SELECT TOP 1000
    "PERSONID",
    "LASTNAME",
    "FIRSTNAME",
    "ADDRESS",
    "CITY"
    FROM "USR_0RX6V0P185WE2ZYJ0JHEN65AC"."PERSONS"`;


    var sql2 = `SELECT TOP 1000
    "PERSONID",
    "LASTNAME"
    FROM "USR_0RX6V0P185WE2ZYJ0JHEN65AC"."PERSONS"`;

    var result = connection.exec(sql);
    var result2 = connection.exec(sql2);



    var t3 = performance.now();

    var t4 = performance.now();
    //console.log(util.inspect(result, { colors: false }));
    var t5 = performance.now();

    var t6 = performance.now();
    connection.disconnect(); //returns connection to the pool
    var t7 = performance.now();

    console.log("Connection Pool Enabled: " + usePool + " " + run);
    console.log("=====================================");
    console.log("Connection time in ms: " + (t1 - t0));
    console.log("Query time in ms        " + (t3 - t2));
    console.log("Display time in ms:     " + (t5 - t4));
    console.log("Disconnect time in ms:   " + (t7 - t6));
    console.log("Total time in ms:      " + (t7 - t0) + "\n");
}

module.exports = router;