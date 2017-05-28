var canonical = require("canonical-json");

function signJson(jsonObject, signatureName, signingKey) {
    var signatures = delete jsonObject["signatures"];
    var unsigned = delete jsonObject["unsigned"];

    var messageBytes = JSON.parse(jsonObject);
    var signed = signing_key.sign(messageBytes);
    var signatureBase64 = encode_base64(signed.signature);

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
        signatures = jsonObject["signatures"];
    } catch (KeyError) {
        throw SignatureVerifyException("No signature on this object");

    }
    keyId = "%s:%s" % (verifykey.alg, verifyKey.version);

    try {
        var signatureB64 = signatures[signatureName][keyId];
    } catch(error) {
        throw SignatureVerifyException("Missing signature");
    }

    try {
        signature = decode_base64(signatureB64);
    } catch(error) {
        throw SignatureVerifyException("Invalid signature base64");
    }
    var dict = [];
    var jsonObjectCopy = dict.push(jsonObject);
    delete jsonObjectCopy["signatures"];
    delete jsonObjectCopy["unsigned"];
    message = JSON.parse(jsonObjectCopy);

    try {
        verify_key.verify(message, signature);
    } catch(error) {
        throw SignatureVerifyException("Unable to verify signature");
    }

}