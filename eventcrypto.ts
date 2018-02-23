import sha256 = require('crypto-js/sha256');
import { baseEncoding } from './base64';
import { baseDecoding } from './base64';
import { redactEvent } from './redactevent';
import {SignJson} from './signing';
import {VerifySignedJson } from './signing';
import {event} from './redactevent';
import {domainFromID} from './eventcontent';
import ctx = require('node-context');

export function addContentHashesToEvent (eventJSON) {
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

export function signEvent(signingName: string, keyID, privatekey, eventJSON ) {
let redactedJSON = redactEvent(eventJSON);
let signedJSON = SignJson(signingName, keyID, privatekey, redactedJSON);
interface SignedEvent {
Signatures;
}
let event;
let se: SignedEvent;
event['signatures'] = se.Signatures;
return event;
}

export function verifyEventSignature(signingName: string, keyID, publickey, eventJSON) {
let redactedJSON = redactEvent(eventJSON);
return VerifySignedJson(signingName, keyID, publickey);
}

function verifyEventSignatures(ctx, events, keyRing) {
// let toVerify = VerifyJSONRequest(0, events.length);
let VerifyJSONRequest;
let toVerify = VerifyJSONRequest.slice(0, events.length());
for (let i in events) {
for (let j of events) {
let verificationMap = events[i][j];
}
}
for (let eventIdx of events) {
  for (let event of events) {
let redactedJSON = redactEvent(eventIdx.eventJSON);
}
  let senderDomain = domainFromID(event.Sender());
}
// let domains = ServerName; // yet to be implemented, just the call here
// domains[event.Origin()] = true;
// if (event.Type() === 'MRoomMember' && event.StateKey() !== null) {
// let targetDomain = domainfromID(event.StateKey()); // yet to be implemented
// if (ServerName(targetDomain) !== event.Origin()) {
// let c = newMemberContentfromEvent(event) // the module containing this function
// // is yet to be written
// if (c.Membership === 'invite') {
// domains[ServerName(targetDomain)] = true;
// }
// }
}
// for (let domain of domains) {
// VerifyJSONRequest [Message] = redactedJSON;
// let verificationMap[evtIdx] = verificationMap.push(evtIdx)
// }

// }
