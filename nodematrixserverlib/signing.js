var canonical = require("canonical-json");

/*var body = ' { "name": "test", "description": "test json", "website": "domain.com" } ';
console.log(JSON.stringify(JSON.parse(body))); */

function signJson(jsonObject, signatureName, signingKey) {
    var signatures = delete jsonObject["signatures"];
    var unsigned = delete jsonObject["unsigned"];

    var messageBytes = JSON.stringify(jsonObject);
    var signed = signingKey.sign(messageBytes);
    var signatureBase64 = btoa(signed.signature);

    var keyId = "%s:%s" % (signingKey.alg, signingKey.version);

    //signatures.setdefault(signatureName, {})[keyId] = signatureBase64;
    jsonObject["signatures"] = signatures;
    if (unsigned != null) {
        jsonObject["unsigned"] = unsigned;
    }

    return jsonObject;

}

function signatureIds(jsonObject, signatureName, supportedAlgorithms) {
    var keyIds = jsonObject.signatures.signatureName.keys();

}

