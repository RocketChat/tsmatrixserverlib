import http = require('http');
import tls = require('tls');
import fs = require('fs');
import HttpTransport = require('http-transport');
let transport = new HttpTransport();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
let req = http.request({
    host: 'federation.rocket.chat',
    port: 8008,
    path: '',
    method: 'GET'

}, function(res){

    let body = [];
    res.on('data', function(data){
        body.push(data);
    });

    res.on('end', function(){
        console.log( body.join('') );
    });

});
req.end();

req.on('error', function(err){
    console.log(err);
});
let options = {
pfx: fs.readFileSync('key.pfx')
};
let socket = tls.connect(8008, options, () => {
  console.log('client connected',
              socket.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket);
  process.stdin.resume();
});
socket.setEncoding('utf8');
socket.on('data', (data) => {
  console.log(data);
});
