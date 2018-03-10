import dns = require('dns');
// import dnsLookup = require('dns-lookup');
function ResolveAddr(address) {
dns.resolve6(address, function(err, result){
// if (err) throw err;
if (result === undefined) {
dns.resolve4(address, function(err, result){
console.log(JSON.stringify(result));
});
}
else {
console.log(JSON.stringify(result[0]));
}
});

}

ResolveAddr('matrix.org');

/*
dnsLookup('open.rocket.chat', function(err, address, family){
console.log(address);
});
*/

// if required we can use dnsLookup function
