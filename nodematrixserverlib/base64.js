// A Base64String is a string of bytes that are base64 encoded when used in JSON.
// The bytes encoded using base64 when parsed as JSON.
// When the bytes are parsed from JSON they are decoded from base64.
// parsing JSON decodes a JSON string and then decodes the resulting base64.
// This takes a pointer receiver because it needs to write the result of decoding.

function baseEncoding(tobeencoded) {
    var encoded = new Buffer(tobeencoded).toString("base64");
    return encoded;
}

function baseDecoding(tobedecoded) {
    var decoded = new Buffer(tobedecoded, "base64").toString();
    return decoded;
}

exports.baseEncoding = baseEncoding;
exports.baseDecoding = baseDecoding;