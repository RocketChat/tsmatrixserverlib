var canonical = require("canonical-json");

function signJson(jsonObject, signatureName, signingKey) {
    var signatures = delete jsonObject["signatures"];
    var unsigned = delete jsonObject["unsigned"];

    var messageBytes = JSON.parse(jsonObject);
    var signed = signingKey.sign(messageBytes);
    var signatureBase64 = btoa(signed.signature);

    var keyId = "%s:%s" % (signingKey.alg, signingKey.version);

    signatures.setdefault(signatureName, {})[keyId] = signatureBase64;
    jsonObject["signatures"] = signatures;
    if (unsigned != null) {
        jsonObject["unsigned"] = unsigned;
    }

    return jsonObject;

}

function signatureIds(jsonObject, signatureName, supportedAlgorithms) {
    var keyIds = jsonObject.signatures.signatureName.keys();

}

function verifySignedJson(jsonObject, signatureName, verifyKey) {
    try {
        var signatures = jsonObject["signatures"];
    } catch (KeyError) {
        throw SignatureVerifyException("No signature on this object");

    }
    var keyId = "%s:%s" % (verifykey.alg, verifyKey.version);

    try {
        var signatureB64 = signatures[signatureName][keyId];
    } catch(error) {
        throw SignatureVerifyException("Missing signature");
    }

    try {
        signature = atob(signatureB64);
    } catch(error) {
        throw SignatureVerifyException("Invalid signature base64");
    }
    var dict = [];
    var jsonObjectCopy = dict.push(jsonObject);
    delete jsonObjectCopy["signatures"];
    delete jsonObjectCopy["unsigned"];
    message = JSON.parse(jsonObjectCopy);

    try {
        verifyKey.verify(message, signature);
    } catch(error) {
        throw SignatureVerifyException("Unable to verify signature");
    }

}