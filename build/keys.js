"use strict";
exports.__esModule = true;
var nacl = require("tweetnacl");
var NACL_ED25519 = 'ed25519';
function GenerateSigningKey(version) {
    var key = nacl.sign.keyPair(); // nacl.sign.keyPair();
    // key.version = version;
    // key.alg = NACL_ED25519;
    return key;
}
exports.GenerateSigningKey = GenerateSigningKey;
function GetVerifyKey(signing_key) {
    var verify_key = signing_key.verify_key;
    // verify_key.version = signing_key.version;
    return verify_key;
}
exports.GetVerifyKey = GetVerifyKey;
function DecodeSigningKeyBase64(key_base64) {
    var key_bytes = key_base64.toString('base64'); // new Buffer(key_base64, 'base64').toString('ascii');
    var key = GenerateSigningKey(key_bytes);
    return key;
}
exports.DecodeSigningKeyBase64 = DecodeSigningKeyBase64;
function EncodeSigningKeyBase64(key) {
    var encoded = key.toString('base64');
    return encoded;
}
exports.EncodeSigningKeyBase64 = EncodeSigningKeyBase64;
function EncodeVerifyKeyBase64(key) {
    var encoded = new Buffer(key).toString('base64');
    return encoded;
}
function IsSigningSupportedAlgorithm(key_id) {
    if (key_id.startsWith('ed25519' + ':')) {
        return true;
    }
}
exports.IsSigningSupportedAlgorithm = IsSigningSupportedAlgorithm;
function DecodeVerifyKeyBytes(key_id, key_bytes) {
    if (key_id.startsWith('ed25519' + ':')) {
        var key = nacl.sign.keyPair.fromSecretKey(key_bytes);
        // key.version = version;
        return key;
    }
}
// function ReadSigningKeys(stream) {
// let keys = [];
// let line;
// for (line in stream) {
// key_base64 = line.split();
// let key = new Buffer(key_base64, 'base64').toString('ascii');
// keys.push(key);
// }
// }
// function WriteSigningKeys(stream, keys) {
// let key;
// for (key in keys) {
// key_base64 = new Buffer(key, 'base64').toString('ascii');
// stream.write(key_base64);
// }
// }
// let my_version = 'my_version';
// let key = GenerateSigningKey(my_version);
// console.log(key);
// let newkey = key.toString();
// let key_base64 = EncodeSigningKeyBase64(newkey);
// let verify_key = GetVerifyKey(key);
// console.log(key_base64);
// console.log(verify_key);
// let newkeybase64 = key_base64.toString();
// let decoder = DecodeSigningKeyBase64(newkeybase64);
// console.log(decoder);
// // var signing_key_seed = DecodeSigningKeyBase64("YJDBA9Xnr2sVqXD9Vj7XVUnmFZcZrlw8Md7kMW+3XA1");
// let seed = 'YJDBA9Xnr2sVqXD9Vj7XVUnmFZcZrlw8Md7kMW+3XA1';
// let b = new Buffer(seed, 'base64');
// let s = b.toString();
// console.log(s);
// let setup = nacl.sign.keyPair.fromSeed(b).toString();
// console.log(setup);
// console.log(signing_key_seed);
