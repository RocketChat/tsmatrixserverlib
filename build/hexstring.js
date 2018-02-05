"use strict";
exports.__esModule = true;
function EncodetoHex(buf) {
    var encode = Buffer.from(buf).toString('hex');
    return encode;
}
exports.EncodetoHex = EncodetoHex;
function DecodeHex(rev) {
    var decode = Buffer.from(rev, 'hex').toString('utf8');
    return decode;
}
exports.DecodeHex = DecodeHex;
