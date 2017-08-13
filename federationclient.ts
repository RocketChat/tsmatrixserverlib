import http = require('http');
import request = require('request');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
let options = {
    host: 'localhost',
    port: 8448,
    path: '/_matrix/client/#/',
    method: 'GET',
    headers: {
        accept: 'application/json'
    }
};

console.log('Start');
let x = http.request(options, function(res){
    console.log('Connected');
    res.on('data', function(data){
        console.log(data);
    });
});

x.end();
