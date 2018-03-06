import dns = require('dns');

let domainName = 'open.rocket.chat';
let hostName = '';
// dns.resolveCname('104.196.189.8', function(err, addresses){
// console.log('resolved Cname:' + addresses);
// });

function Resolve4(domainName) {
dns.resolve4(domainName, function (err, addresses) {
if (err)
throw err;
// console.log('addresses: ' + JSON.stringify(addresses));
addresses.forEach(function (a) {
            dns.reverse(a, function (err, matrix) {
                if (err) {
                    throw err;
                }
                // console.log('reverse for ' + a + ': ' + JSON.stringify(matrix));
                return JSON.stringify(addresses);
            });
        });
    });
}

function Resolve6(domainName) { // resolve6 is added because you know , just in case
dns.resolve6(domainName, function (err, addresses) {
            if (err)
                throw err;
            // console.log('addresses: ' + JSON.stringify(addresses));
            return JSON.stringify(addresses);
        });
}

function Lookup(domainName) {
dns.lookup('serv2.service.consul', function (err, addresses, family) {
        // console.log(addresses);
        // console.log(family);
        return [addresses, family];
        });
}

function ResolveSrv(hostName) {
dns.resolveSrv(hostName, function(error, records) {
if (error) {
 return console.log(error);
}
return records;
// console.log(records);
});
}
