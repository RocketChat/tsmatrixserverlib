"use strict";
exports.__esModule = true;
var senderDomain;
var Federate;
function newCreateContentFromAuthEvents(authEvents) {
    var createEvent;
    if (createEvent === authEvents.Create()) {
        return;
    }
    if (createEvent === null) {
        console.log('missing create event');
        return;
    }
    var roomID = createEvent.RoomID();
    var eventID = createEvent.EventID();
    if (senderDomain = domainFromID(createEvent.Sender())) {
        return;
    }
    return;
}
exports.newCreateContentFromAuthEvents = newCreateContentFromAuthEvents;
function domainAllowed(domain) {
    if (domain === senderDomain) {
        return null;
    }
    if (Federate === null) {
        return null;
    }
    console.log('room is unfederable');
}
exports.domainAllowed = domainAllowed;
function userIDAllowed(id) {
    var c;
    var domain = domainFromID(id);
    return domainAllowed(domain);
}
exports.userIDAllowed = userIDAllowed;
function domainFromID(id) {
    var parts = id.split(':');
    if (parts.length !== 2) {
        return 'invalid ID';
    }
    return parts[1];
}
exports.domainFromID = domainFromID;
function newMemberContentFromAuthEvents(authEvents, userID) {
    var memberEvent;
    var leave;
    if (memberEvent === authEvents.Member(userID)) {
        return;
    }
    if (memberEvent === null) {
        var Membership = leave;
    }
    return newMemberContentFromEvent(memberEvent);
}
exports.newMemberContentFromAuthEvents = newMemberContentFromAuthEvents;
function newMemberContentFromEvent(event) {
    var c;
    return event.Content();
}
exports.newMemberContentFromEvent = newMemberContentFromEvent;
function newJoinRuleContentFromAuthEvents(authEvents) {
    var c;
    var joinRulesEvent;
    var invite;
    var JoinRule;
    if (joinRulesEvent === authEvents.JoinRules()) {
        return;
    }
    if (joinRulesEvent === null) {
        JoinRule = invite;
        return;
    }
}
exports.newJoinRuleContentFromAuthEvents = newJoinRuleContentFromAuthEvents;
