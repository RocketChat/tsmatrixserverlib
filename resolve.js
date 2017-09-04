"use strict";
exports.__esModule = true;
var dns = require("dns");
/*dns.resolve('federation.rocket.chat', 'A', function(err, rec) {
if (err) {
console.log(err);
 }
console.log(rec);
}); */
dns.resolve4('federation.rocket.chat', function (err, addresses) {
    if (err)
        throw err;
    console.log('addresses: ' + JSON.stringify(addresses));
    addresses.forEach(function (a) {
        dns.reverse(a, function (err, domains) {
            if (err) {
                console.log('reverse for ' + a + ' failed: ' +
                    err.message);
            }
            else {
                console.log('reverse for ' + a + ': ' +
                    JSON.stringify(domains));
            }
        });
    });
});
