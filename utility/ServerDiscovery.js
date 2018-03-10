"use strict";
// import srv = require('dns-srv');
// import net = require('net');
exports.__esModule = true;
// let sock = new net.Stream();
// let connector = srv.connect(sock // This socket will become connected if everything goes well
//          , ['_matrix._tcp'] // The SRV record to query
//          , 'matrix.org'           // The domain whose DNS SRV we are interested in
//          , 8008                // Default fallback port to connect to in case SRV lookup failed
// );
// connector.on('error', function() { console.error('meh...'); }).
//           on('connect', function() { console.log('yeah baby!!'); });
var dns = require("dns");
dns.resolveSrv('matrix.org', function (err, result) {
    console.log(JSON.stringify(result));
});
