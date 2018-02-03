import sha256 = require('crypto-js/sha256');
import { baseEncoding } from './base64';
import { baseDecoding } from './base64';
import { redactEvent } from './redactevent';

function addContentHashesToEvent (eventJSON) {
let event;
let unsignedJSON = event['unsigned'];
delete event.unsigned;
delete event.hashes;

let hashableEventJSON = event;
try {
JSON.parse(hashableEventJSON);
}
catch (e) {
return 'Does not seem to be valid json';
}

let sha256hash = sha256.digest(hashableEventJSON);
let hashes = baseEncoding(sha256hash);
let hashesJSON = hashes;
if (unsignedJSON.length > 0) {
event['unsigned'] = unsignedJSON;
}
event['hashes'] = hashesJSON;
return event;

}

function checkEventContentHash(eventJSON) {
let result = JSON.parse(eventJSON);
let hash  = baseDecoding(result.Str);
let hashableEventJSON = eventJSON;
let array = ['signatures', 'unsigned', 'hashes'];
for (let i = array.length - 1; i--; ) {
if (array[i] === 'signatures' || array[i] === 'unsigned' || array[i] === 'hashes') {
  array.splice(i, 1);
}
}
let sha256hash = sha256.digest(hashableEventJSON);

if (sha256hash !== hash) {
return 'invalid SHA256 content';
}
}

function referenceofEvent(eventJSON) {
let redactedJSON = redactEvent(eventJSON);
let event;
delete(event.signatures);
delete(event.unsigned);
let hashableEventJSON = event;
try {
JSON.parse(hashableEventJSON);
}
catch (e) {
return 'Invalid';
}
let sha256hash = sha256.digest(hashableEventJSON);
let eventID;
event['event_id'] = eventID;
return eventID;
}
