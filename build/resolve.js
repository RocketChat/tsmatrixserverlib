"use strict";
exports.__esModule = true;
var dns = require("dns");
/*interface HostResult {
  CName: string;
  Addrs: string;

} */
/*interface DNSResult {
  SRVCName: string;
  SRVRecords: string;
  Host: HostResult;
  Addrs: string;
}
let serverName: string;

export function LookupServer(serverName: DNSResult) {
  let result;
  let str1;
  let val = str1.indexOf(serverName);

  let hosts = serverName.SRVRecords;

  if (val === -1) {
result.SRVCName  = dns.lookup('matrix', 'tcp', serverName);
result.SRVRecords = dns.lookup('matrix', 'tcp', serverName);
  }
dns.lookup ('testwsserver', function(err, result) {
return result;
})

} */
function LookupServer() {
    dns.resolve4('matrix', function (err, addresses) {
        if (err)
            throw err;
        console.log("addresses: " + JSON.stringify(addresses));
        addresses.forEach(function (a) {
            dns.reverse(a, function (err, matrix) {
                if (err) {
                    throw err;
                }
                console.log("reverse for " + a + ": " + JSON.stringify(matrix));
            });
        });
    });
}
