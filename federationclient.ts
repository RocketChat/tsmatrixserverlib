let https = require('https');
let request = require('request');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
let bodyString = JSON.stringify ({
'message': 'hello'
});
let options = {
    host: 'localhost',
    port: 8448,
    uri: '/_matrix/federation/v1/send_join/room/!rlukPqHNcfqfWVHndH',
    method: 'GET',
    headers: {
'Authorization': 'X-Matrix madguy02:my.domain.name',
'sig': 'ABCDEF...',
'key': 'ed25519:key1',
'Content-Type': 'application/json',
'Content-Length': bodyString.length
    }
};

console.log('Start');
let x = https.request(options, function(res){
    console.log('Connected');
    res.on('data', function(data){
        console.log(data);
        console.log(String.fromCharCode.apply(null, new Uint16Array(data)));
    });
}).write(bodyString);
