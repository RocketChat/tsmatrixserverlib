"use strict";
exports.__esModule = true;
var crypto = require("crypto");
var ed25519 = require("ed25519");
var sprintf = require("sprintf");
var base64_1 = require("./base64");
exports.NACL_ED25519 = "ed25519";
exports.SUPPORTED_ALGORITHMS = [exports.NACL_ED25519];
function GenerateSigningKey(version) {
    var seed = crypto.randomBytes(32);
    var key = ed25519.MakeKeypair(seed);
    key.version = version;
    key.alg = exports.NACL_ED25519;
    console.log(version);
    return key;
}
exports.GenerateSigningKey = GenerateSigningKey;
function GetVerifyKey(signingKey) {
    var verifyKey = signingKey.verifyKey;
    verifyKey.version = signingKey.version;
    verifyKey.alg = signingKey.alg;
    return verifyKey;
}
exports.GetVerifyKey = GetVerifyKey;
function DecodeSigningKeyBase64(algorithm, version, keyBase64) {
    if (algorithm = exports.NACL_ED25519) {
        var keyBytes = base64_1.baseDecoding(keyBase64);
        var key = ed25519.MakeKeypair(keyBytes);
        key.version = version;
        key.alg = exports.NACL_ED25519;
        return key;
    }
    else {
        throw new Error("Unsupported Algorithm");
    }
}
exports.DecodeSigningKeyBase64 = DecodeSigningKeyBase64;
function EncodeSigningKeyBase64(key) {
    // var encoded = new Buffer(key).toString('base64');
    return base64_1.baseEncoding(key);
}
exports.EncodeSigningKeyBase64 = EncodeSigningKeyBase64;
function EncodeVerifyKeyBase64(key) {
    return base64_1.baseEncoding(key);
}
exports.EncodeVerifyKeyBase64 = EncodeVerifyKeyBase64;
function IsSigningSupportedAlgorithm(keyId) {
    if (keyId.startswith(exports.NACL_ED25519 + ":")) {
        return true;
    }
    else {
        return false;
    }
}
exports.IsSigningSupportedAlgorithm = IsSigningSupportedAlgorithm;
function DecodeVerifyKeyBytes(keyId, keyBytes) {
    if (keyId.startswith(exports.NACL_ED25519 + ":")) {
        var version = keyId[exports.NACL_ED25519.length - 1];
        var key = ed25519.Verify(keyBytes);
        key.version = version;
        key.alg = exports.NACL_ED25519;
        return key;
    }
    else {
        throw new Error("Unsupported Algorithms" + keyId);
    }
}
exports.DecodeVerifyKeyBytes = DecodeVerifyKeyBytes;
function ReadSigningKeys(stream) {
    var keys = [];
    for (var line in stream) {
        var _a = line.split(''), algorithm = _a[0], version = _a[1], keyBase64 = _a[2];
        var key = DecodeSigningKeyBase64(algorithm, version, keyBase64);
        keys.push(key);
    }
    return keys;
}
exports.ReadSigningKeys = ReadSigningKeys;
function ReadOldSigningKeys(stream) {
    var keys = [];
    for (var line in stream) {
        var _a = line.split(''), algorithm = _a[0], version = _a[1], keyBase64 = _a[2];
        var keyName = sprintf(algorithm, version);
        var key = DecodeVerifyKeyBytes(keyName, base64_1.baseDecoding(keyBase64));
        // key.expired = not sure about this
        keys.push(key);
    }
    return keys;
}
exports.ReadOldSigningKeys = ReadOldSigningKeys;
function WriteSigningKeys(stream, keys) {
    for (var key in keys) {
        var keyBase64 = EncodeSigningKeyBase64(key);
        stream.write(key, keyBase64);
    }
}
exports.WriteSigningKeys = WriteSigningKeys;
// var my_version = "my_version";
// var key = GenerateSigningKey(my_version);
// console.log(key);
// var newkey = key.toString('utf-8');
// var key_base64 = EncodeSigningKeyBase64(newkey);
// var verify_key = GetVerifyKey(key);
// console.log(key_base64);
// console.log(verify_key);
// var newkeybase64 = key_base64.toString('utf-8');
// var decoder = DecodeSigningKeyBase64(newkeybase64);
// console.log(decoder);
// //var signing_key_seed = DecodeSigningKeyBase64("YJDBA9Xnr2sVqXD9Vj7XVUnmFZcZrlw8Md7kMW+3XA1");
// var seed = "YJDBA9Xnr2sVqXD9Vj7XVUnmFZcZrlw8Md7kMW+3XA1";
// var b = new Buffer(seed,"base64");
// var s = b.toString();
// console.log(s);
// var setup = nacl.sign.keyPair.fromSeed(b).toString();
// console.log(setup);
//console.log(signing_key_seed);
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
