"use strict";
exports.__esModule = true;
var http = require("http");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
var req = http.request({
    host: '127.0.0.1',
    port: 3000,
    path: '/general',
    method: 'PUT'
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
