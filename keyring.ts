import NamedTuple = require('named-tuple');
let VerifyKeyRequest = NamedTuple('VerifyRequest', 'server_name', 'key_ids', 'json_object', 'deferred');
console.log(VerifyKeyRequest);
