let KeyID:string;

function signJson(jsonObject, signatureName, signingKey) {
    let signatures = delete jsonObject["signatures"];
    let unsigned = delete jsonObject["unsigned"];

    let messageBytes = JSON.stringify(jsonObject);
    let signed = signingKey.sign(messageBytes);
    let signatureBase64 = btoa(signed.signature);

    let keyId = "%s:%s" % (signingKey.alg, signingKey.version);

    //signatures.setdefault(signatureName, {})[keyId] = signatureBase64;
    jsonObject["signatures"] = signatures;
    if (unsigned != null) {
        jsonObject["unsigned"] = unsigned;
    }

    return jsonObject;

}
