var base64js = require("base64-js");
var TextEncoderLite = require("text-encoder-lite");
// A Base64String is a string of bytes that are base64 encoded when used in JSON.
// The bytes encoded using base64 when parsed as JSON.
// When the bytes are parsed from JSON they are decoded from base64.
function base64EncodingUTF8(str) {
    var encoded = new TextEncoderLite("utf-8").encode(str);        
    var b64Encoded = base64js.fromByteArray(encoded);
    var toJsonString = JSON.stringify(b64Encoded);
    return b64Encoded;
}
// parsing JSON decodes a JSON string and then decodes the resulting base64.
// This takes a pointer receiver because it needs to write the result of decoding.
function base64DecodingUTF8(b64Encoded) {
	var decoded = new TextEncoderLite("utf-8").decode(b64Encoded);
	var b64decoded = base64js.toByteArray(decoded);
	var fromJsonString = JSON.parse(b64decoded);
	return b64decoded;

}


//unit tests has to be written ,still pending :) will do it soon