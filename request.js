"use strict";
exports.__esModule = true;
var http = require("http");
var fs = require("fs");
var FederationRequest;
function NewFederationRequest(method, destination, requestURI) {
    FederationRequest.Destination = destination;
    FederationRequest.Method = method.toUpperCase();
    FederationRequest.RequestURI = requestURI;
    return FederationRequest;
}
exports.NewFederationRequest = NewFederationRequest;
function Method() {
    return FederationRequest.Method;
}
exports.Method = Method;
function Content() {
    return FederationRequest.Content;
}
exports.Content = Content;
function RequestURI() {
    return FederationRequest.RequestURI;
}
exports.RequestURI = RequestURI;
function HTTPRequest() {
    var urlStr = sprintf('matrix://%s%s', FederationRequest.Destination, FederationRequest.RequestURI);
    var Content;
    if (FederationRequest.Content != null) {
        Content = fs.readFileSync(FederationRequest.Content);
    }
    var httpreq;
    httpreq = http.request(urlStr);
    if (httpreq.URL.RequestURI() !== FederationRequest.RequestURI) {
        Error('Did not encode properly');
    }
    if (FederationRequest.Content != null) {
        httpreq.setHeader('Content-Type', 'application/json');
    }
    return httpreq;
}
exports.HTTPRequest = HTTPRequest;
function readHTTPRequest(req, res, Body) {
    var result;
    result.Method = req.Method;
    result.RequestURI = req.URL.RequestURI();
    var content = JSON.parse(req.Body);
    if (content.length !== 0) {
        if (req.getHeader('Content-Type') !== 'application/json') {
            Error('The request must be application/json');
        }
    }
    result.Content = content;
    return result;
}
exports.readHTTPRequest = readHTTPRequest;
