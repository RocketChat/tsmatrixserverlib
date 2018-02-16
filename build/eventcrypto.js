"use strict";
exports.__esModule = true;
var sha256 = require("crypto-js/sha256");
var base64_1 = require("./base64");
var base64_2 = require("./base64");
var redactevent_1 = require("./redactevent");
var signing_1 = require("./signing");
var signing_2 = require("./signing");
function addContentHashesToEvent(eventJSON) {
    var event;
    var unsignedJSON = event['unsigned'];
    delete event.unsigned;
    delete event.hashes;
    var hashableEventJSON = event;
    try {
        JSON.parse(hashableEventJSON);
    }
    catch (e) {
        return 'Does not seem to be valid json';
    }
    var sha256hash = sha256.digest(hashableEventJSON);
    var hashes = base64_1.baseEncoding(sha256hash);
    var hashesJSON = hashes;
    if (unsignedJSON.length > 0) {
        event['unsigned'] = unsignedJSON;
    }
    event['hashes'] = hashesJSON;
    return event;
}
exports.addContentHashesToEvent = addContentHashesToEvent;
function checkEventContentHash(eventJSON) {
    var result = JSON.parse(eventJSON);
    var hash = base64_2.baseDecoding(result.Str);
    var hashableEventJSON = eventJSON;
    var array = ['signatures', 'unsigned', 'hashes'];
    for (var i = array.length - 1; i--;) {
        if (array[i] === 'signatures' || array[i] === 'unsigned' || array[i] === 'hashes') {
            array.splice(i, 1);
        }
    }
    var sha256hash = sha256.digest(hashableEventJSON);
    if (sha256hash !== hash) {
        return 'invalid SHA256 content';
    }
}
function referenceofEvent(eventJSON) {
    var redactedJSON = redactevent_1.redactEvent(eventJSON);
    var event;
    delete (event.signatures);
    delete (event.unsigned);
    var hashableEventJSON = event;
    try {
        JSON.parse(hashableEventJSON);
    }
    catch (e) {
        return 'Invalid';
    }
    var sha256hash = sha256.digest(hashableEventJSON);
    var eventID;
    event['event_id'] = eventID;
    return eventID;
}
function signEvent(signingName, keyID, privatekey, eventJSON) {
    var redactedJSON = redactevent_1.redactEvent(eventJSON);
    var signedJSON = signing_1.SignJson(signingName, keyID, privatekey, redactedJSON);
    var event;
    var se;
    event['signatures'] = se.Signatures;
    return event;
}
exports.signEvent = signEvent;
function verifyEventSignature(signingName, keyID, publickey, eventJSON) {
    var redactedJSON = redactevent_1.redactEvent(eventJSON);
    return signing_2.VerifySignedJson(signingName, keyID, publickey);
}
exports.verifyEventSignature = verifyEventSignature;
function verifyEventSignatures(ctx, events, keyRing) {
    // let toVerify = VerifyJSONRequest(0, events.length);
    var VerifyJSONRequest;
    var toVerify = VerifyJSONRequest.slice(0, events.length());
    for (var i in events) {
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var j = events_1[_i];
            var verificationMap = events[i][j];
        }
    }
    for (var _a = 0, events_2 = events; _a < events_2.length; _a++) {
        var eventIdx = events_2[_a];
        for (var _b = 0, events_3 = events; _b < events_3.length; _b++) {
            var event_1 = events_3[_b];
            var redactedJSON = redactevent_1.redactEvent(eventIdx.eventJSON);
        }
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
