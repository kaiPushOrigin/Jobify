/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

var app = express();
var bodyParser = require('body-parser');
var ibmdb = require("ibm_db");
  // , connStr = "DRIVER={DB2};DATABASE=SQLDB;HOSTNAME=75.126.155.153;PORT=50000;PROTOCOL=TCPIP;UID=user17284;PWD=Yo5azm1bAe1r";

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); //Need JSON from body

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

app.get('/contactList', function(req, res) {
    console.log("I received a GET request");
    ibmdb.open("DRIVER={DB2};DATABASE=SQLDB;HOSTNAME=75.126.155.153;UID=user17284;PWD=Yo5azm1bAe1r;PORT=50000;PROTOCOL=TCPIP", function (err,conn) {
        if (err) return console.log(err);

        conn.query("select SUM(\"Price in Contemporary Dollars\") AS PRICE from \"test\"", function (err, data) {     // tell
            if (err) console.log(err);
            else {
                console.log(data);
                console.log(data[0].PRICE);
                res.json(data);
            }

            conn.close(function () {
                console.log('done');
            });
        });
    });
});






// {
//   "sqldb": [
//     {
//       "name": "SQL Database-nk",
//       "label": "sqldb",
//       "plan": "sqldb_free",
//       "credentials": {
//         "hostname": "75.126.155.153",
//         "password": "Yo5azm1bAe1r",
//         "port": 50000,
//         "host": "75.126.155.153",
//         "jdbcurl": "jdbc:db2://75.126.155.153:50000/SQLDB",
//         "uri": "db2://user17284:Yo5azm1bAe1r@75.126.155.153:50000/SQLDB",
//         "db": "SQLDB",
//         "username": "user17284"
//       }
//     }
//   ]
// }





// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {

	// print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
