import { expect } from 'chai';
import request = require('request');
import {NewFederationRequest} from '../../request';
import {Sign} from '../../request';
import {HTTPRequest} from '../../request';
it('Tests for request module', function (done) {
let exampleGetRequest = 'GET /_matrix/federation/v1/query/directory?room_alias=%23test%3Alocalhost%3A44033 HTTP/1.1' +
'Host: localhost:44033' +
'Authorization: X-Matrix' +
'origin=localhost:8800' +
'key=ed25519:a_Obwu' +
'sig=7vt4vP/w8zYB3Zg77nuTPwie3TxEy2OHZQMsSa4nsXZzL4/qw+DguXbyMy3BF77XvSJmBt+Gw+fU6T4HId7fBg';



function TestSignGetRequest() {
let request = NewFederationRequest('GET', 'localhost:44003', '/_matrix/federation/v1/query/directory?room_alias=%23test%3Alocalhost%3A44033');
let val = Sign('localhost:8008', 'ed25519:a_Obwu', 'privateKey1');
let hr = HTTPRequest();
// hr.setHeader('User-Agent', '');
// let buf = new Buffer(hr);
// console.log(hr);
let got = hr;
let want = exampleGetRequest;
expect(got).to.deep.equal(want);
this.timeout(20000);
}

});
