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
function domainFromID(id) {
}
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
}
exports.newMemberContentFromEvent = newMemberContentFromEvent;
function newJoinRuleContentFromAuthEvents(authEvents, JoinRuleContent) {
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
