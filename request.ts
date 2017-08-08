interface Fields {
Content: string;
Destination: string;
Method: string;
Origin: 'origin';
RequestURI: string;
}
let FederationRequest: Fields;

function NewFederationRequest (method: string, destination: string, requestURI: string) {
FederationRequest.Destination = destination;
FederationRequest.Method = method.toUpperCase();
FederationRequest.RequestURI = requestURI;
return FederationRequest;
}

function Method() {
return FederationRequest.Method;
}

function Content() {
return FederationRequest.Content;
}

function RequestURI() {
return FederationRequest.RequestURI;
}

function HTTPRequest() {
let urlStr = sprintf('matrix://%s%s', FederationRequest.Destination, FederationRequest.RequestURI);
let Content;
if (FederationRequest.Content != null) {
Content = JSON.parse(FederationRequest.Content);
  }
let httpreq;
httpreq = this.http.get(urlStr, FederationRequest.Method, FederationRequest.Content);
if (httpreq.URL.RequestURI() !== FederationRequest.RequestURI) {
Error('Did not encode properly');
  }
}
