"use strict";
exports.__esModule = true;
var sprintf = require("sprintf");
var http = require("http");
var signing_1 = require("./signing");
var timestamp_1 = require("./timestamp");
function NewFederationRequest(method, destination, requestURI) {
    //  let r = {"method": method, "destination": destination, "uri": requestURI};
    //  return r;
    var r = {};
    r.Method = method;
    r.Destination = destination;
    r.RequestURI = requestURI;
    return r;
}
exports.NewFederationRequest = NewFederationRequest;
function SetContent(content) {
    var r = {};
    if (r.Content !== null) {
        throw new Error("tsmatrixserverlib: content already set on the request");
    }
    if (r.Signatures !== null) {
        throw new Error("tsmatrixserverlib: the request is signed and cannot be modified");
    }
    try {
        var data = JSON.stringify(content);
    }
    catch (e) {
        throw new Error(e);
    }
    content.Content = JSON.parse(data);
    return content; // not sure, if to return complete content or just Content field
}
exports.SetContent = SetContent;
function Method() {
    var r = {};
    return r.Method;
}
exports.Method = Method;
function Content() {
    var r = {};
    return r.Content;
}
exports.Content = Content;
function Origin() {
    var r = {};
    return r.Origin;
}
exports.Origin = Origin;
function RequestURI() {
    var r = {};
    return r.RequestURI;
}
exports.RequestURI = RequestURI;
function Sign(serverName, KeyID, privatekey) {
    var r = {};
    // if (r.Origin !== '' && r.Origin !== serverName) {
    //   return 'the request is already signed by a different server';
    // }
    r.Origin = serverName;
    var data = JSON.stringify(r);
    var SignedData = signing_1.SignJson(r, serverName + "", "test");
    return SignedData;
}
exports.Sign = Sign;
function HTTPRequest(method, destination, requestURI, content) {
    var r = {};
    r.Destination = destination;
    r.RequestURI = requestURI;
    r.Content = content;
    r.Method = method;
    var urlStr = sprintf(r.Destination, r.RequestURI);
    console.log("this" + urlStr);
    // content = r.Content;
    var byte = [];
    for (var i = 0; i < 32; i++) {
        byte.push(content.charCodeAt(i));
    }
    if (content == null) {
        var options = {
            method: r.Method,
            host: urlStr
        };
        var httpreq = http.get(options, function (body) {
            console.log(body);
        });
    }
    // require a sanity check to be done
    if (content !== null) {
        // httpreq.setHeader('Content-Type', 'application/json');
        var options = {
            method: r.Method,
            host: urlStr,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        httpreq = http.request(options, function (res) {
            res.on('data', function (chunk) {
                console.log(chunk.toString());
            });
        });
        httpreq.write(content);
    }
    return httpreq;
}
exports.HTTPRequest = HTTPRequest;
function IsSafeInHttpQuotedString(text) {
    var texts = [];
    for (var i = 0; i < text.length; i++) {
        var c = texts[i];
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
    var fields;
    var request = readHTTPRequest(req);
    fields.Destination = destination;
    var toVerify = fields;
    // if (Origin(r) === '') {
    // let message = 'Missing authorization headers';
    // return message;
    // }
    var results = keys.VerifyJSONs({
        ServerName: fields.Origin,
        AtTS: timestamp_1.asTimeStamp(now),
        Message: toVerify
    });
    return request;
}
function readHTTPRequest(req) {
    var result;
    result.Method = req.Method;
    result.RequestURI = req.URL.requestURI;
    var content = req.body;
    if (content.length !== 0) {
        if (req.headers.get('Content-Type') !== 'application/json') {
            return 'the request must be application/json';
        }
        result.Content = content;
    }
    var authorization = req.headers['Authorization'];
    var scheme, origin, key, sig = parseAuthorization(authorization); // review req.d
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
        result.Signatures = { origin: { key: sig } };
    }
    else {
        result.Signatures = sig;
    }
    return result;
}
function parseAuthorization(header) {
    var sig;
    var parts = header.split(' ').slice(2);
    var scheme = parts[0];
    if (scheme !== 'X-Matrix') {
        return;
    }
    if (parts.length !== 2) {
        return;
    }
    // requirement for a loop functionality over 208 // TBD
    var data = parts[1].split(',');
    var pair = data.split('=').slice(2);
    // if (pair.length !== 2) {
    // continue; // review required
    // }
    var name = pair[0];
    var value = pair[1].trim('\'');
    if (name === 'origin') {
        var origin = value; // review required
    }
    if (name === 'key') {
        var key = value; // review required
    }
    if (name === 'sig') {
        var sig_1 = value;
    }
    return;
}
