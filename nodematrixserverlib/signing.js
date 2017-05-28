var canonical = require("canonical-json");

function sign_json(json_object, signature_name, signing_key) {
    var signatures = delete json_object["signatures"];
    var unsigned = delete json_object["unsigned"];

    var message_bytes = JSON.parse(json_object);
    var signed = signing_key.sign(message_bytes);
    var signature_base64 = encode_base64(signed.signature);

    var key_id = "%s:%s" % (signing_key.alg, signing_key.version);

    signatures.setdefault(signature_name, {})[key_id] = signature_base64;
    json_object["signatures"] = signatures;
    if (unsigned != null) {
        json_object["unsigned"] = unsigned;
    }

    return json_object;

}

function signature_ids(json_object, signature_name, supported_algorithms) {
    key_ids = json_object.signatures.signature_name.keys();

}

function verify_signed_json(json_object, signature_name, verify_key) {
    try {
        signatures = json_object["signatures"];
    } catch (KeyError) {
        throw SignatureVerifyException("No signature on this object");

    }
    key_id = "%s:%s" % (verify_key.alg, verify_key.version);

    try {
        var signature_b64 = signatures[signature_name][key_id];
    } catch(error) {
        throw SignatureVerifyException("Missing signature");
    }

    try {
        signature = decode_base64(signature_b64);
    } catch(error) {
        throw SignatureVerifyException("Invalid signature base64");
    }
    var dict = [];
    var json_object_copy = dict.push(json_object);
    delete json_object_copy["signatures"];
    delete json_object_copy["unsigned"];
    message = JSON.parse(json_object_copy);

    try {
        verify_key.verify(message, signature);
    } catch(error) {
        throw SignatureVerifyException("Unable to verify signature");
    }

}