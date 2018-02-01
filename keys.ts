import nacl = require('tweetnacl');
let NACL_ED25519 = 'ed25519';

export function GenerateSigningKey(version) {
let key = nacl.sign.keyPair(); // nacl.sign.keyPair();
// key.version = version;
// key.alg = NACL_ED25519;
return key;
}

export function GetVerifyKey(signing_key) {
let verify_key = signing_key.verify_key;
// verify_key.version = signing_key.version;

return verify_key;
}

export function DecodeSigningKeyBase64(key_base64) {
let key_bytes = key_base64.toString('base64'); // new Buffer(key_base64, 'base64').toString('ascii');
let key = GenerateSigningKey(key_bytes);
return key;
}

export function EncodeSigningKeyBase64(key) {
let encoded = key.toString('base64');
return encoded;
}

function EncodeVerifyKeyBase64(key) {
let encoded = new Buffer(key).toString('base64');
return encoded;
}

export function IsSigningSupportedAlgorithm(key_id) {
if (key_id.startsWith('ed25519' + ':')) {
return true;
}

}

function DecodeVerifyKeyBytes(key_id, key_bytes) {
if (key_id.startsWith('ed25519' + ':')) {
let key = nacl.sign.keyPair.fromSecretKey(key_bytes);
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
