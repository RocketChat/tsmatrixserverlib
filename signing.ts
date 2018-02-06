import nacl = require('tweetnacl');
import {baseDecoding} from './base64';

export function SignJson(json_object, signature_name, signing_key, data) {
let signatures = json_object.pop('signatures', {});
let unsigned = json_object.pop('unsigned', null);
data = JSON.parse(JSON.stringify(json_object).replace(/"\s+|\s+"/g, '"'));
let message_bytes = data;
let signed = signing_key.sign(message_bytes);
let signature_base64 = new Buffer(signed.signature, 'base64');
signatures.signature_name = signature_base64;
json_object['signatures'] = signatures;

if (unsigned != null) {
json_object['unsigned'] = unsigned;
}
return json_object;
}

export function VerifySignedJson(json_object, signature_name, verify_key) {
try {
let signatures = json_object['signatures'];
}
catch (e) {
console.log('No signature of this object');
}
let key_id = (verify_key.alg, verify_key.version);
let signature_b64;
try {
let signature = baseDecoding(signature_b64);
}
catch (e) {
console.log('invalid signature');
}
let dict = [];
let json_object_copy = dict[json_object];
delete json_object_copy['signatures'];
json_object_copy.pop('unsigned', null);
let message = JSON.parse(JSON.stringify(json_object_copy).replace(/"\s+|\s+"/g, '"'));

}
