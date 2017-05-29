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

function VerifyJson(jsonObject, signatureName, verifyKey) {
    try {
        var signatures = jsonObject["signatures"];
    } catch (Error) {
        throw new Error("No signatures on this object");
    }

    var keyId = "%s:%s" % (verifyKey.alg, verifyKey.version);

    try {
        var signatureB64 = signatures[signatureName][keyId];
    } catch (Error) {
        throw new Error("Missing signature for %s,%s" % (signatureName, keyId));

    }

    try {
        var signature = Base64.decode(signatureB64);
    } catch (Error) {
        throw new Error("Invalid signature base64");
    }
    var dict = {};
    var jsonObjectCopy = dict(jsonObject);
    delete jsonObjectCopy["signatures"];
    delete jsonObjectCopy["unsigned"];
    var message = JSON.stringify(JSON.parse(jsonObjectCopy));




}