"use strict";
exports.__esModule = true;
var dns = require("dns");
dns.resolve4('matrix.org', function (err, addresses) {
    if (err)
        throw err;
    console.log('addresses: ' + JSON.stringify(addresses));
    addresses.forEach(function (a) {
        dns.reverse(a, function (err, matrix) {
            if (err) {
                throw err;
            }
            console.log('reverse for ' + a + ': ' + JSON.stringify(matrix));
        });
    });
});
