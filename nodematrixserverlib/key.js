var ed = require("ed25519-supercop");
const crypto = require("crypto");
// A ServerName is the name a matrix homeserver is identified by.
// It is a DNS name without a trailing dot optionally followed by a port.
// So it has the format: "[0-9A-Za-z\-]+(\.[0-9A-Za-z\-]+)*(:[0-9]+)?"

var ServerName;

function ServerKeys(Raw, FromServer, ServerKeyFields) {
    this.FromServer = ServerName;
    this.ServerKeyFields = ServerKeyFields;
    Raw = [];
}

function TLSFingerprint() {
    const hash = crypto.createHash("sha256")
        .digest("base64");
    return hash;
}

function VerifyKey() {
    var seed = ed.createSeed();
    return seed;
}

function OldVerifyKey(verifykey, ExpiredTS) {
	var TimeStamp;
    this.verifykey = VerifyKey;
    this.ExpiredTS = TimeStamp;
}


// var seed = ed.createSeed();
// console.log(seed);
//var keypair = ed.createKeyPair(seed);
//console.log(keypair);
//console.log(keypair.publicKey)
//var message;
//var signature = ed.sign(message, publicKey, secretKey)
//console.log(signature);