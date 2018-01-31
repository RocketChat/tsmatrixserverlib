// import https = require('https');
// import fs = require('fs');
// import sprintf = require('sprintf');
// import request = require('request');

// let options = {
// method: 'GET',
// path: '/_matrix/federation/v1/send/',
// host: 'federation.rocket.chat',
// port: '8089'
// };
// console.log('Federating to matrix......');

// let x = https.request(options, function(res){
// console.log('Connected');
// res.on('data', function(data){
// console.log(data);
// // console.log(String.fromCharCode.apply(null, new Uint16Array()));
//  });

// });
// x.end();
/* export class Fields {
Content: string;
Destination: string;
Method: string;
Origin: string;
RequestURI: string;
constructor(destination: string, method: string, requestURI: string) {
this.Destination = destination;
this.Method = method;
this.RequestURI = requestURI;
  }

// }
// let FederationRequest: Fields;
NewFederationRequests() {
// FederationRequest.Destination = destination;
// FederationRequest.Method = method.toUpperCase();
// FederationRequest.RequestURI = requestURI;
return this.Destination + '' + this.Method + this.RequestURI;
}

/*Method() {
return this.Method;
} */

/*Content() {
return this.Content;
}*/

/*export function RequestURI() {
return this.RequestURI;
}*/

/* HTTPRequest() {
let urlStr = sprintf('matrix://%s%s', this.Destination, this.RequestURI);
let Content;
if (this.Content != null) {
Content = fs.readFileSync(this.Content);
  }
let httpreq;
httpreq = https.request(urlStr);
if (httpreq.URL.RequestURI() !== this.RequestURI) {
Error('Did not encode properly');
  }
if (this.Content != null) {
httpreq.setHeader('Content-Type', 'application/json');
  }
return httpreq;
}

readHTTPRequest(req, res, Body: string) {
let result: Fields;
result.Method = req.Method;
result.RequestURI = req.URL.RequestURI();
let content = JSON.parse(req.Body);
if (content.length !== 0) {
if (req.getHeader('Content-Type') !== 'application/json') {
Error('The request must be application/json');
    }
  }
result.Content = content;
return result;
  }
} */
// let Field = new Fields('localhost:8448', 'GET', '/_matrix/federation/v1/query/directory?room_alias=%23test%3Alocalhost%3A8448');
// console.log(Field);
// console.log(https.request());

import sprintf = require('sprintf');
import request = require('request');
import { SignJson } from './signing';
interface FederationRequest {
  Content: string;
  Destination: string;
  Method: string;
  Origin: string;
  RequestURI: string;
  Signatures;
}

function NewFederationRequest(method: string, destination: string, requestURI: string, r: FederationRequest) {
r.Destination = destination;
r.Method = method;
r.RequestURI = requestURI;
return r;
}

function SetContent(r: FederationRequest) {
  if (r.Content != null) {
    return 'Content already set on the request';
  }
  if (r.Signatures != null) {
    return 'the request is being signed and cannot be modified';
  }
  let data = Content;

  return data;
}

function Method(r: FederationRequest) {
  return r.Method;
}

function Content(r: FederationRequest) {
  return r.Content;
}

function Origin(r: FederationRequest) {
  return r.Origin;
}

function RequestURI(r: FederationRequest) {
  return r.RequestURI;
}
function Sign(serverName: string, KeyID: string, privatekey: string, r: FederationRequest) {
  if (r.Origin !== '' && r.Origin !== serverName) {
    return 'the request is already signed by a different server';
  }
  r.Origin = serverName;
  let data = r.Origin;
  let SignedData = SignJson(serverName, KeyID, privatekey, data);
  return SignedData;
}
function HTTPRequest(r: FederationRequest) {
  let urlStr = sprintf('matrix://%s%s', r.Destination, r.RequestURI);
  let content;
  let byte = [];
  for (let i = 0; i < content.length(); i++) {
    byte.push(content.charCodeAt(i));
  }
  let httpreq = request(r.Method, urlStr, content);
  // require a sanity check to be done
  if (r.Content != null) {
    httpreq.setHeader('Content-Type', 'application/json');
  }
}

function IsSafeInHttpQuotedString(text: string) {
  let texts = [];
  for (let i = 0; i < text.length; i++) {
    let c = texts[i];

    switch (c) {
      case c === '\t': {
        continue;
      }

      case c === ' ': {
        continue;
      }

      case c === 0x21: {
        continue;
      }

      case 0x23 <= c && c <= 0x5b: {
        continue;
      }

      case (0x5d <= c && c <= 0x7e): {
        continue;
      }

      case (0x80 <= c && c <= 0xff): {
        continue;
      }
      default:
        return false;
    }
  }
}

function VerifyHTTPRequest(req, now, destination, keys) {
let request = readHTTPRequest(req);
request.Destination = destination;
let toVerify = request.FederationRequest;
if (request.Origin() === '') {
let message = 'Missing authorization headers';
return message;
}
// the next piece of code requires keyring, once  done with keyring module and
// imported, this piece will be written
return request;
}

function readHTTPRequest(req) {
let result: FederationRequest;
result.Method = req.Method;
result.RequestURI = req.URL.requestURI;
let content = req.body;

if (content.length !== 0) {
if (req.headers.get('Content-Type') !== 'application/json') {
return 'the request must be application/json';
}
result.Content = content;
}

let authorization = req.headers['Authorization'];

let scheme, origin, key, sig: [] = parseAuthorization(authorization); // review req.d
// let origin = parseAuthorization(authorization);
// let key = parseAuthorization(authorization);
if (scheme !== 'X-Matrix') {
if (origin === '' || key === '' || sig === '') {
return 'invalid x-matrix authorization header';
}
if (result.Origin !== '' && result.Origin !== origin) {
return 'different origins in X-matrix authorization headers';
}
}
result.Origin = origin;
if (result.Signatures === null) {
result.Signatures = {origin: {key: sig}};
}
else {
result.Signatures = sig;
}
return result;
}

function parseAuthorization(header) {
let sig: string;
let parts = header.split(' ').slice(2);
let scheme = parts[0];
if (scheme !== 'X-Matrix') {
return;
}
if (parts.length !== 2) {
return;
}
// requirement for a loop functionality over 208 // TBD
let data = parts[1].split(',');
let pair = data.split('=').slice(2);
// if (pair.length !== 2) {
// continue; // review required
// }
let name = pair[0];
let value = pair[1].trim('\'');
if (name === 'origin') {
let origin = value; // review required
}
if (name === 'key') {
let key = value;  // review required
}
if (name === 'sig') {
let sig = value;
}
return;
 }
