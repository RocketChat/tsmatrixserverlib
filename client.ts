process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
let req = https.request({
    host: '192.168.1.1',
    port: 443,
    path: '/',
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
