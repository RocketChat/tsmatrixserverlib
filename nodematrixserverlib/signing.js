var canonical = require("canonical-json");

function signJson(json_object, signature_name, signing_key) {
    var signatures = delete json_object["signatures"];
    var unsigned = delete json_object["unsigned"];

    var messageBytes = JSON.parse(json_object);
    var signed = signing_key.sign(message_bytes);
    var signatureBase64 = encode_base64(signed.signature);

    var keyId = "%s:%s" % (signing_key.alg, signing_key.version);

    signatures.setdefault(signature_name, {})[key_id] = signature_base64;
    jsonObject["signatures"] = signatures;
    if (unsigned != null) {
        jsonObject["unsigned"] = unsigned;
    }

    return jsonObject;

}

function signatureIds(json_object, signature_name, supported_algorithms) {
    var keyIds = jsonObject.signatures.signature_name.keys();

}

function verifySignedJson(json_object, signature_name, verify_key) {
    try {
        signatures = jsonObject["signatures"];
    } catch (KeyError) {
        throw SignatureVerifyException("No signature on this object");

    }
    keyId = "%s:%s" % (verify_key.alg, verify_key.version);

    try {
        var signatureB64 = signatures[signature_name][key_id];
    } catch(error) {
        throw SignatureVerifyException("Missing signature");
    }

    try {
        signature = decode_base64(signature_b64);
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