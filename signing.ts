function SignJson(json_object, signature_name, signing_key) {
let signatures = json_object.pop('signatures', {});
let unsigned = json_object.pop('unsigned');
let data = JSON.parse(JSON.stringify(json_object).replace(/"\s+|\s+"/g, '"'));
let message_bytes = data;
let signed = signing_key.sign(message_bytes);
let signature_base64 = new Buffer(signed.signature, 'base64');


}
