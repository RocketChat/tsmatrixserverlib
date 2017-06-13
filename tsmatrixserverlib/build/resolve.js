"use strict";
exports.__esModule = true;
var dns = require("dns");
var serverName;
function LookupServer(serverName) {
    var result;
    var str1;
    var val = str1.indexOf(serverName);
    //result.Hosts = HostResult{};
    var hosts = serverName.SRVRecords;
    if (val === -1) {
        result.SRVCName = dns.lookup("rocket.chat", "tcp", serverName);
        result.SRVRecords = dns.lookup("rocket.chat", "tcp", serverName);
    }
    var err;
    if (err != null) {
        dns.TIMEOUT();
    }
}
