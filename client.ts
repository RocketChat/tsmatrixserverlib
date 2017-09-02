import http = require('http');
import HttpTransport = require('http-transport');
let transport = new HttpTransport();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
let req = http.request({
    host: 'localhost',
    port: 8448,
    path: '',
    method: 'PUT'

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
