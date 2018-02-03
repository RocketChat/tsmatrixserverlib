"use strict";
exports.__esModule = true;
function EncodetoHex(buf) {
    var encode = Buffer.from(buf).toString('hex');
    return encode;
}
exports.EncodetoHex = EncodetoHex;
// console.log(Buffer.from('74686973c3bf6973c3bf61c3bf74657374', 'hex').toString());
function DecodeHex(rev) {
    var decode = Buffer.from(rev, 'hex').toString('utf8');
    return decode;
}
exports.DecodeHex = DecodeHex;
// console.log(Buffer.from('this\xffis\xffa\xfftest', 'utf8').toString('hex'));
