var dns = require('dns');

var nsLookup = function(domain, timeout, callback) {
    var Called = false;
    var doCallback = function(err, domains) {
        if (Called) return;
        Called = true;
        callback(err, domains);
    };

    setTimeout(function() {
        doCallback(new Error("Timeout exceeded"), null);
    }, timeout);

    dns.resolveNs(domain, doCallback);
};

nsLookup('rocket.chat', 1000, function(err, addresses) {
    console.log("Results for rocket.chat, timeout 1000:");
    if (err) {
        console.log("Err: " + err);
        return;
    }
    console.log(addresses);
});

//more upgrades and improvements will come in the code