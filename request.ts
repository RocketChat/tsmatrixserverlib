import http = require('http');
import fs = require('fs');
interface Fields {
Content: string;
Destination: string;
Method: string;
Origin: 'origin';
RequestURI: string;
}
let FederationRequest: Fields;

export function NewFederationRequest (method: string, destination: string, requestURI: string) {
FederationRequest.Destination = destination;
FederationRequest.Method = method.toUpperCase();
FederationRequest.RequestURI = requestURI;
return FederationRequest;
}

export function Method() {
return FederationRequest.Method;
}

export function Content() {
return FederationRequest.Content;
}

export function RequestURI() {
return FederationRequest.RequestURI;
}

export function HTTPRequest() {
let urlStr = sprintf('matrix://%s%s', FederationRequest.Destination, FederationRequest.RequestURI);
let Content;
if (FederationRequest.Content != null) {
Content = fs.readFileSync(FederationRequest.Content);
  }
let httpreq;
httpreq = http.request(urlStr);
if (httpreq.URL.RequestURI() !== FederationRequest.RequestURI) {
Error('Did not encode properly');
  }
if (FederationRequest.Content != null) {
httpreq.setHeader('Content-Type', 'application/json');
  }
return httpreq;
}

export function readHTTPRequest(req, res, Body: string) {
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
