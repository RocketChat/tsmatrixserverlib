"use strict";
exports.__esModule = true;
function baseEncoding(tobeencoded) {
    var encoded = new Buffer(tobeencoded).toString('base64');
    return encoded;
}
exports.baseEncoding = baseEncoding;
function baseDecoding(tobedecoded) {
    var decoded = new Buffer(tobedecoded, 'base64');
    return decoded;
}
exports.baseDecoding = baseDecoding;
