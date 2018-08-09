"use strict";
exports.__esModule = true;
var base64_1 = require("./base64");
var json = require("canonicaljson");
var crypto = require("crypto");
var ed25519 = require("ed25519");
var sprintf = require("sprintf");
var alg = "ed25519";
var version = "key_version";
// var signingKey = ed25519.MakeKeypair(seed);
function SignJson(jsonObject, signatureName, signingKey) {
    var seed = crypto.randomBytes(32);
    var test = ed25519.MakeKeypair(seed);
    var signatures = delete jsonObject.signatures;
    var unsigned = delete jsonObject.unsigned;
    var messageBytes = json.stringify(jsonObject);
    var signed = ed25519.Sign(new Buffer(messageBytes, 'utf8'), test);
    var signatureBase64 = base64_1.baseEncoding(signed);
    signatures = signatureBase64;
    // let keyId = (signingKey.alg, signingKey.version) + "";
    // console.log(keyId);
    jsonObject.signatures = signatures;
    if (unsigned !== null) {
        jsonObject.unsigned = unsigned;
    }
    return jsonObject;
}
exports.SignJson = SignJson;
function VerifySignedJson(json_object, signature_name, verifyKey) {
    try {
        var signatures = json_object.signatures;
    }
    catch (e) {
        console.log('No signature of this object');
    }
    var key_id = sprintf(verifyKey.alg, verifyKey.version);
    var signature_b64 = signature_name.key_id;
    try {
        var signature = base64_1.baseDecoding(signature_b64);
    }
    catch (e) {
        console.log('invalid signature');
    }
    var dict = [];
    var json_object_copy = json_object;
    delete json_object_copy.signatures;
    delete json_object_copy.unsigned;
    var message = json.stringify(json_object_copy);
    return message;
}
exports.VerifySignedJson = VerifySignedJson;
