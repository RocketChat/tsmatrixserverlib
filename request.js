"use strict";
exports.__esModule = true;
var https = require("https");
var fs = require("fs");
var sprintf = require("sprintf");
var Fields = (function () {
    function Fields(destination, method, requestURI) {
        this.Destination = destination;
        this.Method = method;
        this.RequestURI = requestURI;
    }
    // }
    // let FederationRequest: Fields;
    Fields.prototype.NewFederationRequest = function () {
        // FederationRequest.Destination = destination;
        // FederationRequest.Method = method.toUpperCase();
        // FederationRequest.RequestURI = requestURI;
        return this.Destination + '' + this.Method + this.RequestURI;
    };
    /*Method() {
    return this.Method;
    } */
    /*Content() {
    return this.Content;
    }*/
    /*export function RequestURI() {
    return this.RequestURI;
    }*/
    Fields.prototype.HTTPRequest = function () {
        var urlStr = sprintf('matrix://%s%s', this.Destination, this.RequestURI);
        var Content;
        if (this.Content != null) {
            Content = fs.readFileSync(this.Content);
        }
        var httpreq;
        httpreq = https.request(urlStr);
        if (httpreq.URL.RequestURI() !== this.RequestURI) {
            Error('Did not encode properly');
        }
        if (this.Content != null) {
            httpreq.setHeader('Content-Type', 'application/json');
        }
        return httpreq;
    };
    Fields.prototype.readHTTPRequest = function (req, res, Body) {
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
    };
    return Fields;
}());
exports.Fields = Fields;
// let Field = new Fields('localhost:8448', 'GET', '/_matrix/federation/v1/query/directory?room_alias=%23test%3Alocalhost%3A8448');
// console.log(Field);
// console.log(https.request());
