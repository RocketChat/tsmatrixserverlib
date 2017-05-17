var dns = require("dns");

var nsLookup = function(domain, timeout, callback) {
    var Called = false;
    var doCallback = function(err, domains) {
        if (Called) {
            return;
        }
        Called = true;
        callback(err, domains);
    };

    /*setTimeout(function() {
        doCallback(new Error, null);
    }, timeout);*/ //It is unsafe

    dns.resolveNs(domain, doCallback);
};

nsLookup("rocket.chat", 1000, function(err, addresses) {
    //console.log("Reults for rocket.chat, timeout 1000:");
    if (err) {
        //console.log("Err: " + err);
        return;
    }

});

dns.lookupService("127.0.0.1", 22, function(err, hostname, service)  {
  console.log(hostname, service);
  // Prints: localhost ssh
});
dns.resolve4("localhost", function(err, rec) {
  if (err) {
    //console.log(chalk.red('* dns.resolve4(\'%s\'): err: %j'), HOSTNAME, err);
    return;
  }
  console.log('* dns.resolve4(\'%s\')', rec);
});

//more upgrades and improvements will come in the code
//to implement mapping
//DNS module for nodejs is used here...
//127.0.0.1 will be replaced by valid ip