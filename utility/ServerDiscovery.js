"use strict";
exports.__esModule = true;
var dns = require("dns");
var net = require("net");
function ResolveSrv(Srvrecord) {
    dns.resolveSrv(Srvrecord, function (err, result) {
        console.log(JSON.stringify(result));
        var val = result.map(function (_a) {
            var port = _a.port;
            return port;
        });
        var i = val[0];
        console.log(i);
        var client = new net.Socket();
        client.connect(i, 'matrix.org', function () {
            client.write('jee');
            console.log('Connected');
        });
        client.on('data', function (data) {
            console.log('Received: ' + data);
            console.log('hii');
        });
    });
}
ResolveSrv('_matrix._tcp.matrix.org');
