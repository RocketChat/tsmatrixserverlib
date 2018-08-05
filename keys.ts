import nacl = require('tweetnacl');
import crypto = require('crypto');
import ed25519 = require('ed25519');
import sprintf = require('sprintf');
import {baseDecoding, baseEncoding} from './base64';


export var NACL_ED25519 = "ed25519";
export var SUPPORTED_ALGORITHMS = [NACL_ED25519];

export function GenerateSigningKey(version) {
var seed = crypto.randomBytes(32);
var key = ed25519.MakeKeypair(seed);
key.version = version;
key.alg = NACL_ED25519;
console.log(version);
return key;
}

export function GetVerifyKey(signingKey) {
var verifyKey = signingKey.verifyKey;
verifyKey.version = signingKey.version;
verifyKey.alg = signingKey.alg;
return verifyKey;
}

export function DecodeSigningKeyBase64(algorithm, version, keyBase64) {

if (algorithm = NACL_ED25519) {
let keyBytes = baseDecoding(keyBase64);
let key = ed25519.MakeKeypair(keyBytes);
key.version = version;
key.alg = NACL_ED25519;
return key;

    }
else {
    throw new Error("Unsupported Algorithm");
    }
}

export function EncodeSigningKeyBase64(key) {
// var encoded = new Buffer(key).toString('base64');
return baseEncoding(key);
}

export function EncodeVerifyKeyBase64(key) {
return baseEncoding(key);
}

export function IsSigningSupportedAlgorithm(keyId) {
if (keyId.startswith(NACL_ED25519 + ":")) {
return true;
}
else{
return false;
}
	}

export function DecodeVerifyKeyBytes(keyId, keyBytes) {
if (keyId.startswith(NACL_ED25519+ ":")) {
    let version = keyId[NACL_ED25519.length - 1];
    let key = ed25519.Verify(keyBytes);
    key.version = version;
    key.alg = NACL_ED25519;
    return key;

    }
else {
    throw new Error("Unsupported Algorithms" + keyId);
}
}

export function ReadSigningKeys(stream) {
var keys = [];
for ( let line in stream) {
let [algorithm, version, keyBase64] = line.split('');
let key = DecodeSigningKeyBase64(algorithm, version, keyBase64);
keys.push(key);
    }
    return keys;
}

export function ReadOldSigningKeys(stream) {
    var keys = [];
    for (let line in stream) {
        let [algorithm, version, keyBase64] = line.split('');
        let keyName = sprintf(algorithm, version);
        let key = DecodeVerifyKeyBytes(keyName, baseDecoding(keyBase64));
        // key.expired = not sure about this
        keys.push(key); 
    }
    return keys;
}

export function WriteSigningKeys(stream, keys) {
for (let key in keys) {
let keyBase64 = EncodeSigningKeyBase64(key);
stream.write(key, keyBase64);
}
}
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
