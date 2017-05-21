var net = require("net");
var dns = require("dns");
var exp = require("express");
var app = exp();



app.get("rocket.chat", function(req, res) {
    var domain = req.params.domain,
        server = domain.substring(
            domain.lastIndexOf(".") + 1
        ),
        port = 80;

    // app.use(function(req, res){
    //     res.setTimeout(1000, function(){
    //         //console.log('Request has timed out.');
    //             res.send(408);
    //         });


    // });
    dns.resolveCname(server, function(error, addresses) {
        var host = "",
            data = "";

        if (!error) {
            host = addresses[0];
        } else {
            host = server;
        }

        var socket = net.createConnection(port, host, function() {
            socket.send("domain " + domain + "\r\n", "ascii");
        });
        socket.setEncoding("ascii");

        socket.on("data", function(response) {
            data = data + response;
        }).on("close", function(error) {
            if (error) {
                data = "nothing found";
            }

            res.header("Content-Type", "application/json");
            res.end(data, "utf-8");
        });
    });
});

dns.lookupService("4.2.2.2", 22, function(err, hostname, service) {
    //console.log(hostname, service);
    if (err) {
        var error = "not found";
        throw error;
    }

});

//more upgrades and improvements will come in the code
//to implement mapping
//DNS module for nodejs is used here...
//127.0.0.1 will be replaced by valid ip