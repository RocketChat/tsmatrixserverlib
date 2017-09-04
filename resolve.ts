import dns = require('dns');
dns.resolve('federation.rocket.chat', 'A', function(err, rec) {
if (err) {
console.log(err);
 }
console.log(rec);
});
