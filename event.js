"use strict";
exports.__esModule = true;
var timestamp_1 = require("./timestamp");
var redactevent_1 = require("./redactevent");
var eventcrypto_1 = require("./eventcrypto");
var eventcrypto_2 = require("./eventcrypto");
var eb;
function SetContent(content) {
    eb.Content = content;
    return;
}
exports.SetContent = SetContent;
function SetUnsigned(unsigned) {
    eb.Unsigned = unsigned;
}
var emptyEventReferenceList = [];
// let event: EventFields;
function Build(eventID, now, origin, keyID, privatekey) {
    var result;
    // type event = EventBuilder | Origin | OriginServerTS | eventID;
    var event;
    if (event.PrevEvents === null) {
        event.PrevEvents = emptyEventReferenceList;
    }
    if (event.AuthEvents === null) {
        event.AuthEvents = emptyEventReferenceList;
    }
    event.OriginServerTS = timestamp_1.asTimeStamp(now);
    event.Origin = origin;
    event.EventID = eventID;
    if (event.StateKey !== null) {
        event.PrevState = emptyEventReferenceList;
    }
    var eventJSON;
    if (eventJSON === event) {
        return;
    }
    if (eventJSON === eventcrypto_1.addContentHashesToEvent(eventJSON)) {
        return;
    }
    if (eventJSON === eventcrypto_2.signEvent(origin, keyID, privatekey, eventJSON)) {
        return;
    }
    // if (eventJSON === eventJSON) {
    // } // TBD
    result.eventJSON = eventJSON;
    return;
}
exports.Build = Build;
// let result: Event;
function NewEventFromTrustedJSON(eventJSON, redacted) {
    var result;
    result.redacted = redacted;
    result.eventJSON = eventJSON;
    return redacted;
}
exports.NewEventFromTrustedJSON = NewEventFromTrustedJSON;
function Redacted() {
    var e;
    return e.redacted;
}
exports.Redacted = Redacted;
function JSON() {
    var e;
    return e.eventJSON;
}
exports.JSON = JSON;
function Redact() {
    var e;
    if (e.redacted) {
        return e;
    }
    var eventJSON = redactevent_1.redactEvent(e.eventJSON);
    var result = { redacted: true, eventJSON: eventJSON };
    result.redacted = true;
    // result.redacted = eventJSON;
    return result;
}
function StateKey() {
    var fields;
    return fields.StateKey;
}
exports.StateKey = StateKey;
function StateKeyEquals(statekey) {
    var fields;
    if (fields.StateKey === null) {
        return false;
    }
    return fields.StateKey = statekey;
}
exports.StateKeyEquals = StateKeyEquals;
function Origin() {
    var fields;
    return fields.Origin;
}
exports.Origin = Origin;
function EventID() {
    var fields;
    return fields.EventID;
}
exports.EventID = EventID;
function Sender() {
    var fields;
    return fields.Sender;
}
exports.Sender = Sender;
function Type() {
    var e;
    var fields;
    return e.fields.Type;
}
exports.Type = Type;
function OriginServerTS() {
    var e;
    var fields;
    return e.fields.OriginServerTS;
}
exports.OriginServerTS = OriginServerTS;
function Content() {
    var e;
    var fields;
    return e.fields.Content;
}
exports.Content = Content;
function PrevEvents() {
    var e;
    var fields;
    return e.fields.PrevEvents;
}
exports.PrevEvents = PrevEvents;
function AuthEvents() {
    var e;
    var fields;
    return e.fields.AuthEvents;
}
exports.AuthEvents = AuthEvents;
function AuthEventIDs() {
    var fields;
    var result;
    for (var _i = 0, _a = fields.AuthEvents; _i < _a.length; _i++) {
        var i = _a[_i];
        result[i] = fields.AuthEvents[i].EventID;
    }
    return result;
}
exports.AuthEventIDs = AuthEventIDs;
function Redacts() {
    var e;
    var fields;
    return e.fields.Redacts;
}
exports.Redacts = Redacts;
function RoomID() {
    var e;
    var fields;
    return e.fields.RoomID;
}
exports.RoomID = RoomID;
function Depth() {
    var e;
    var fields;
    return e.fields.Depth;
}
exports.Depth = Depth;
function SplitID(address) {
    var local = address.split(':')[0];
    var domain = address.split(':')[1];
    return local;
}
exports.SplitID = SplitID;
