"use strict";
exports.__esModule = true;
var timestamp_1 = require("./timestamp");
var eb;
function SetContent() {
    eb.Content = 'content';
    return;
}
var event;
function Build(eventID, now, origin) {
    event.OriginServerTS = timestamp_1.asTimeStamp(now);
    event.Origin = origin;
    event.EventID = eventID;
}
exports.Build = Build;
var result;
function NewEventFromTrustedJSON(eventJSON, redacted) {
    result.redacted = redacted;
    result.eventJSON = eventJSON;
    return;
}
var e;
function Redacted() {
    return e.redacted;
}
function JSON() {
    return e.eventJSON;
}
function Redact() {
    if (e.redacted) {
        return e;
    }
    // let eventJSON = redactEvent(e.eventJSON); // redactEvent has to be added to redactEvent.ts
    result.redacted = true;
    // result.redacted = eventJSON;
    return result;
}
function Origin() {
    return event.Origin;
}
exports.Origin = Origin;
function EventID() {
    return event.EventID;
}
exports.EventID = EventID;
function Sender() {
    return event.Sender;
}
exports.Sender = Sender;
function Type() {
    return event.Type;
}
exports.Type = Type;
function OriginServerTS() {
    return event.OriginServerTS;
}
exports.OriginServerTS = OriginServerTS;
function Content() {
    return event.Content;
}
exports.Content = Content;
function Redacts() {
    return event.Redacts;
}
exports.Redacts = Redacts;
function RoomID() {
    return event.RoomID;
}
exports.RoomID = RoomID;
function SplitID(address) {
    var local = address.split(':')[0];
    var domain = address.split(':')[1];
    return local;
}
exports.SplitID = SplitID;
