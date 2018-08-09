import nacl = require('tweetnacl');
import {baseDecoding, baseEncoding} from './base64';
import keys = require('./keys');
import json = require('canonicaljson');
import crypto = require('crypto');
import ed25519 = require('ed25519');
import sprintf = require('sprintf');
import { SUPPORTED_ALGORITHMS } from './keys';
type KeyID = string;

var alg = "ed25519";
var version = "key_version";
// var signingKey = ed25519.MakeKeypair(seed);
export function SignJson(jsonObject, signatureName, signingKey) {
var seed = crypto.randomBytes(32);
var test = ed25519.MakeKeypair(seed);
let signatures = delete jsonObject.signatures;
let unsigned = delete jsonObject.unsigned;

let messageBytes = json.stringify(jsonObject);
let signed = ed25519.Sign(new Buffer(messageBytes, 'utf8'), test);
let signatureBase64 = baseEncoding(signed);
signatures = signatureBase64;
// let keyId = (signingKey.alg, signingKey.version) + "";
// console.log(keyId);
jsonObject.signatures = signatures;

if (unsigned !== null) {
    jsonObject.unsigned = unsigned;
}
return jsonObject;
}


export function VerifySignedJson(json_object, signature_name, verifyKey) {
try {
let signatures = json_object.signatures;
}
catch (e) {
console.log('No signature of this object');
}
let key_id = sprintf(verifyKey.alg, verifyKey.version);
let signature_b64 = signature_name.key_id;
try {
let signature = baseDecoding(signature_b64);
}
catch (e) {
console.log('invalid signature');
}
let dict = [];
let json_object_copy = json_object;
delete json_object_copy.signatures;
delete json_object_copy.unsigned;
let message = json.stringify(json_object_copy);

return message;

}
