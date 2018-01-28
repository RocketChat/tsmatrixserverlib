"use strict";
exports.__esModule = true;
var http = require("http");
var tls = require("tls");
var fs = require("fs");
var HttpTransport = require("http-transport");
var transport = new HttpTransport();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
var req = http.request({
    host: 'federation.rocket.chat',
    port: 8008,
    path: '',
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
var options = {
    pfx: fs.readFileSync('key.pfx')
};
var socket = tls.connect(8008, options, function () {
    console.log('client connected', socket.authorized ? 'authorized' : 'unauthorized');
    process.stdin.pipe(socket);
    process.stdin.resume();
});
socket.setEncoding('utf8');
socket.on('data', function (data) {
    console.log(data);
});
