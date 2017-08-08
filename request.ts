interface Fields {
Content: 'content';
Destination: string;
Method: string;
Origin: 'origin';
RequestURI: string;
}

function NewFederationRequest (method: string, destination: string, requestURI: string) {
let FederationRequest: Fields;
FederationRequest.Destination = destination;
FederationRequest.Method = method.toUpperCase();
FederationRequest.RequestURI = requestURI;
return FederationRequest;
}
