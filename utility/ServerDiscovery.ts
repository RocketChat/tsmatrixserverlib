import dns = require('dns');
import net = require('net');

function ResolveSrv(Srvrecord) {
dns.resolveSrv(Srvrecord, function(err, result){
console.log(JSON.stringify(result));
let val = result.map(({port}) => port);
let i = val[0];
console.log(i);
let client = new net.Socket();
client.connect(i, 'matrix.org', function() {
console.log('Connected');
client.write('jee');

});

client.on('data', function(data) {
console.log('Received: ' + data);
console.log('hii');
});
});

}

ResolveSrv('_matrix._tcp.matrix.org');
