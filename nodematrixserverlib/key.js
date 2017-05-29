var ed = require('ed25519-supercop')
var seed = ed.createSeed();
console.log(seed);
var keypair = ed.createKeyPair(seed);
console.log(keypair);
console.log(keypair.publicKey)
var message;
var signature = ed.sign(message, publicKey, secretKey)
console.log(signature);