"use strict";
exports.__esModule = true;
var event_1 = require("./event");
var eventcontent_1 = require("./eventcontent");
var dedupe = require("dedupe");
exports.join = 'join';
exports.ban = 'ban';
exports.leave = 'leave';
exports.invite = 'invite';
exports.Public = 'public'; // public is a reserved word hence 'Public'
exports.MRoomCreate = 'm.room.create';
exports.MRoomJoinRules = 'm.room.join_rules';
exports.MRoomPowerLevels = 'm.room.power_levels';
exports.MRoomMember = 'm.room.member';
exports.MRoomThirdPartyInvite = 'm.room.third_party_invite';
exports.MRoomAliases = 'm.room.aliases';
exports.MRoomHistoryVisibility = 'm.room.history_visibility';
exports.MRoomRedaction = 'm.room.redaction';
function Tuples(res) {
    var s;
    var arr;
    if (s.Create) {
        res.EventType = exports.MRoomCreate;
        res.StateKey = '';
        arr.push(res.EventType, res.StateKey);
    }
    if (s.JoinRules) {
        res.EventType = exports.MRoomJoinRules;
        res.StateKey = '';
        arr.push(res.EventType, res.StateKey);
    }
    if (s.PowerLevels) {
        res.EventType = exports.MRoomPowerLevels;
        res.StateKey = '';
        arr.push(res.EventType, res.StateKey);
    }
    for (var _i = 0, _a = s.Member; _i < _a.length; _i++) {
        var userID = _a[_i];
        res.EventType = exports.MRoomMember;
        res.StateKey = '';
        arr.push(res.EventType, res.StateKey);
    }
    for (var _b = 0, _c = s.ThirdPartyInvite; _b < _c.length; _b++) {
        var token = _c[_b];
        res.EventType = exports.MRoomThirdPartyInvite;
        res.StateKey = '';
        arr.push(res.EventType, res.StateKey);
    }
    return;
}
function AuthEventReferences(provider) {
    var refs;
    var s;
    var e;
    if (s.Create) {
        if (e === provider.Create()) {
            return;
        }
        else {
            // refs = refs.push(e.EventReference()); // start from here next.
            // to be discussed on how to proceed
        }
    }
    if (s.JoinRules) {
        if (e === provider.JoinRules()) {
            return;
        }
        else {
            // similar to line 68 and 69
        }
    }
    if (s.PowerLevels) {
        if (e === provider.PowerLevels()) {
            return;
        }
        else {
            // to be discussed . Issue as similar to line 78 and 68
        }
    }
    for (var _i = 0, _a = s.Member; _i < _a.length; _i++) {
        var userID = _a[_i];
        if (e === provider.Member(userID)) {
            return;
        }
        else {
            // TBD similar to above cases;
        }
    }
    for (var _b = 0, _c = s.ThirdPartyInvite; _b < _c.length; _b++) {
        var token = _c[_b];
        if (e === provider.ThirdPartyInvite(token)) {
            return;
        }
        else {
            // TBD as similar to above cases
        }
    }
    return;
}
function StateNeededForEventBuilder(builder) {
    var result;
    var content;
    if (builder.Type === exports.MRoomMember) {
        return builder.Content;
    }
}
function StateNeededForAuth(events) {
    var result;
    for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
        var undscre = events_1[_i];
        for (var event_2 in events) {
            var content = void 0;
            if (event_1.Type() === exports.MRoomMember) {
                var c = eventcontent_1.newMemberContentFromEvent(event_2);
            }
            undscre = accumulateStateNeeded(result, event_1.Type(), event_1.Sender(), event_1.StateKey(), content);
        }
    }
    result.Member = dedupe(result.Member);
    // TBD: ThirdPartyInvite is required?
    return;
}
function accumulateStateNeeded(result, eventType, sender, stateKey, content) {
    switch (eventType) {
        case exports.MRoomCreate: {
        }
        case exports.MRoomAliases: {
            result.Create = true;
        }
        case exports.MRoomMember: {
            if (content === null) {
                return 'missing member content for m.room.member event';
            }
            result.Create = true;
            result.PowerLevels = true;
            if (stateKey !== null) {
                result.Member.push(sender, stateKey);
            }
            if (content.Membership === exports.join) {
                result.JoinRules = true;
            }
            // if (content.ThirdPartyInvite), third party invite has to be observed properly.
        }
        default:
            result.Create = true;
            result.PowerLevels = true;
            result.Member.push(sender);
    }
    return;
}
function thirdPartyInviteToken(thirdPartyInvite) {
}
function AddEvent(event) {
    var a;
    if (event_1.StateKey() === null) {
        return 'event does not have a state key';
    }
    a.events[event_1.Type(), event_1.StateKey()] = event;
    return event;
}
var arr1;
function Create() {
    var a;
    a.events.EventType = exports.MRoomCreate;
    a.events.StateKey = '';
    arr1.push(a.events.EventType, a.events.StateKey);
}
function JoinRules() {
    var a;
    a.events.EventType = exports.MRoomJoinRules;
    a.events.StateKey = '';
    arr1.push(a.events.EventType, a.events.StateKey);
}
function PowerLevels() {
    var a;
    a.events.EventType = exports.MRoomPowerLevels;
    a.events.StateKey = '';
    arr1.push(a.events.EventType, a.events.StateKey);
}
function Member(stateKey) {
    var a;
    a.events.EventType = exports.MRoomMember;
    a.events.StateKey = stateKey;
    arr1.push(a.events.EventType, a.events.StateKey);
}
function ThirdPartyInvite(stateKey) {
    var a;
    a.events.EventType = exports.MRoomThirdPartyInvite;
    a.events.StateKey = stateKey;
}
function Error() {
    var a;
    return 'eventauth' + a.Message;
}
function Allowed(event, authEvents) {
    // switch (event.fields.Type()) { switch case required
}
function createEventAllowed() {
    if (!event_1.StateKeyEquals('')) {
        return 'create event state key is not empty';
    }
    var roomIDDomain = eventcontent_1.domainFromID(event_1.RoomID());
    var senderDomain = eventcontent_1.domainFromID(event_1.Sender());
    if (senderDomain !== roomIDDomain) {
        return 'create event roomID doesnot match sender';
    }
    if (event_1.PrevEvents() > 0) {
        return 'create event must be the first event in the room';
    }
}
function memberEventAllowed() {
}
function newMembershipAllower(authEvents, event) {
    var m;
    var stateKey = event_1.StateKey();
    m.targetID = stateKey;
    m.senderID = event_1.Sender();
    if (m.create === eventcontent_1.newCreateContentFromAuthEvents(authEvents)) {
        return;
    }
    if (m.newMember === eventcontent_1.newMemberContentFromEvent(event)) {
        return;
    }
    if (m.oldMember === eventcontent_1.newMemberContentFromAuthEvents(authEvents, m.targetID)) {
        return;
    }
    if (m.senderMember === eventcontent_1.newMemberContentFromAuthEvents(authEvents, m.senderID)) {
        return;
    }
    if (m.newMember.Membership === 'join') {
        if (m.joinRule === eventcontent_1.newJoinRuleContentFromAuthEvents(authEvents)) {
            return;
        }
    }
    return;
}
