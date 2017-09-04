"use strict";
exports.__esModule = true;
var NamedTuple = require("named-tuple");
var VerifyKeyRequest = NamedTuple('VerifyRequest', 'server_name', 'key_ids', 'json_object', 'deferred');
console.log(VerifyKeyRequest);
