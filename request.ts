import sprintf = require('sprintf');
import request = require('request');
import http = require('http');
import { SignJson } from './signing';
import {asTimeStamp} from './timestamp';

type ServerName = string;
export interface FederationRequest {
  Content?: string;
  Destination?: ServerName;
  Method?: string;
  Origin?: string;
  RequestURI?: string;
  Signatures?;
}

export function NewFederationRequest(method: string, destination: string, requestURI: string) {
  //  let r = {"method": method, "destination": destination, "uri": requestURI};
  //  return r;

  let r: FederationRequest = {};
  r.Method = method;
  r.Destination = destination;
  r.RequestURI = requestURI;

  return r;
}

export function SetContent(content) {
let r: FederationRequest = {};
if (r.Content !== null) {
    throw new Error("tsmatrixserverlib: content already set on the request");
  }

if (r.Signatures !== null) {
  throw new Error("tsmatrixserverlib: the request is signed and cannot be modified");
}
try {
var data = JSON.stringify(content);
}

catch(e) {
  throw new Error(e);
}

content.Content = JSON.parse(data);
return content; // not sure, if to return complete content or just Content field
}

export function Method() {
  let r: FederationRequest = {};
  return r.Method;
}
export function Content() {
  let r: FederationRequest = {};
  return r.Content;
}
export function Origin() {
  let r: FederationRequest = {};
  return r.Origin;
}
export function RequestURI() {
  let r: FederationRequest = {};
  return r.RequestURI;
}

export function Sign(serverName: string, KeyID: string, privatekey: string) {
  let r: FederationRequest = {};
  // if (r.Origin !== '' && r.Origin !== serverName) {
  //   return 'the request is already signed by a different server';
  // }
  r.Origin = serverName;
  let data = JSON.stringify(r);
  let SignedData = SignJson(r, serverName+"", "test");
  return SignedData;
}

export function HTTPRequest(method, destination, requestURI, content) {
  let r: FederationRequest = {};
  r.Destination = destination;
  r.RequestURI = requestURI;
  r.Content = content;
  r.Method = method;
  let urlStr = sprintf(r.Destination, r.RequestURI);
  console.log("this" + urlStr);
   // content = r.Content;
  let byte = [];
  for (let i = 0; i < 32; i++) {
    byte.push(content.charCodeAt(i));
  }
  if (content == null) {
  let options = {
    method: r.Method,
    host: urlStr,
    
  }
  var httpreq = http.get(options, function(body){
    console.log(body);
  });
}
  // require a sanity check to be done
  if (content !== null) {
    // httpreq.setHeader('Content-Type', 'application/json');
    let options = {
      method: r.Method,
      host: urlStr,
      headers: {
        'Content-Type': 'application/json',
    }
    }
    httpreq = http.request(options, function(res){
      res.on('data', function(chunk){
         console.log(chunk.toString());
      });
    });
    httpreq.write(content);
  }
  return httpreq;
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
let fields: FederationRequest;
let request = readHTTPRequest(req);
fields.Destination = destination;
let toVerify = fields;
// if (Origin(r) === '') {
// let message = 'Missing authorization headers';
// return message;
// }

let results = keys.VerifyJSONs({
  ServerName: fields.Origin,
  AtTS: asTimeStamp(now),
  Message: toVerify
});
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

let scheme, origin, key, sig = parseAuthorization(authorization); // review req.d
// let origin = parseAuthorization(authorization);
// let key = parseAuthorization(authorization);
if (scheme !== 'X-Matrix') {
// if (origin === '' || key === '' || sig === '') {
// return 'invalid x-matrix authorization header';
// }
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
