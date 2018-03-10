"use strict";
exports.__esModule = true;
var dns = require("dns");
function ResolveAddr(address) {
    dns.resolve6(address, function (err, result) {
        // if (err) throw err;
        if (result === undefined) {
            dns.resolve4(address, function (err, result) {
                console.log(JSON.stringify(result));
            });
        }
        else {
            console.log(JSON.stringify(result));
        }
    });
}
ResolveAddr('matrix.org');
