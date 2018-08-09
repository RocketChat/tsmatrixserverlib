// import { asTimeStamp } from './timestamp';
// import {baseEncoding} from './base64';
// import {baseDecoding} from './base64';
// import {signJson} from './signing';
import {ToClientEvent} from './clientevent';
// import {Fields} from './request';
import https = require('https');
import request = require('request');
// let myValidator = asTimeStamp('2009 02 13 23:31:30');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
// let myValidator1 = baseEncoding('this\xffis\xffa\xfftest');
// let myValidator2 = baseDecoding('dGhpc8O/aXPDv2HDv3Rlc3Q=');
let req = {
  host: 'localhost',
      port: 8448,
      path: '/_matrix/federation/v1',
      method: 'GET',
// Authorization: 'X-Matrix',
// sig: '7vt4vP/w8zYB3Zg77nuTPwie3TxEy2OHZQMsSa4nsXZzL4/qw+DguXbyMy3BF77XvSJmBt+Gw+fU6T4HId7fBg',
// key: 'ed25519:a_Obwu'

};
// let Fielding = new Fields('localhost:8448', 'GET' , '/_matrix/federation/v1/query/directory?room_alias=%23test%3Alocalhost%3A8448 HTTP/1.1');
let x = https.request(req, function(res){
    console.log('Connected');
    res.on('data', function(data){
console.log(data);
// console.log(String.fromCharCode.apply(null, new Uint16Array(data)));
    });
});
// let myValidator3 = NewFederationRequest();
// console.log(myValidator3);
