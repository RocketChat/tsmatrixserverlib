"use strict";
exports.__esModule = true;
var http = require("http");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
var req = http.request({
    host: 'localhost',
    port: 8448,
    path: '/_matrix/federation/v1/query/directory?room_alias=%23test%3Alocalhost%3A8448HTTP/1.1',
    method: 'GET'
}, function (res) {
    var body = [];
    res.on('data', function (data) {
        body.push(data);
    });
    res.on('end', function () {
        console.log(body.join(''));
    });
});
req.end();
req.on('error', function (err) {
    console.log(err);
});
