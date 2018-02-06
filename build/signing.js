"use strict";
exports.__esModule = true;
var base64_1 = require("./base64");
function SignJson(json_object, signature_name, signing_key, data) {
    var signatures = json_object.pop('signatures', {});
    var unsigned = json_object.pop('unsigned', null);
    data = JSON.parse(JSON.stringify(json_object).replace(/"\s+|\s+"/g, '"'));
    var message_bytes = data;
    var signed = signing_key.sign(message_bytes);
    var signature_base64 = new Buffer(signed.signature, 'base64');
    signatures.signature_name = signature_base64;
    json_object['signatures'] = signatures;
    if (unsigned != null) {
        json_object['unsigned'] = unsigned;
    }
    return json_object;
}
exports.SignJson = SignJson;
function VerifySignedJson(json_object, signature_name, verify_key) {
    try {
        var signatures = json_object['signatures'];
    }
    catch (e) {
        console.log('No signature of this object');
    }
    var key_id = (verify_key.alg, verify_key.version);
    var signature_b64;
    try {
        var signature = base64_1.baseDecoding(signature_b64);
    }
    catch (e) {
        console.log('invalid signature');
    }
    var dict = [];
    var json_object_copy = dict[json_object];
    delete json_object_copy['signatures'];
    json_object_copy.pop('unsigned', null);
    var message = JSON.parse(JSON.stringify(json_object_copy).replace(/"\s+|\s+"/g, '"'));
}
exports.VerifySignedJson = VerifySignedJson;
