import { StateKeyTuple, EventReference, EventBuilder, StateKey, Type, StateKeyEquals, Sender, RoomID, PrevEvents } from './event';
import { MemberContent, PowerLevelContent, JoinRulesContent} from './redactevent';
import {domainFromID, newCreateContentFromAuthEvents, CreateContent, newMemberContentFromEvent, newMemberContentFromAuthEvents, newJoinRuleContentFromAuthEvents} from './eventcontent';
import dedupe = require('dedupe');
export const join = 'join';
export const ban = 'ban';
export const leave = 'leave';
export const invite = 'invite';
export const Public = 'public'; // public is a reserved word hence 'Public'

export const MRoomCreate = 'm.room.create';
export const MRoomJoinRules = 'm.room.join_rules';
export const MRoomPowerLevels = 'm.room.power_levels';
export const MRoomMember = 'm.room.member';
export const MRoomThirdPartyInvite = 'm.room.third_party_invite';
export const MRoomAliases = 'm.room.aliases';
export const MRoomHistoryVisibility = 'm.room.history_visibility';
export const MRoomRedaction = 'm.room.redaction';

interface StateNeeded {
Create: boolean;
JoinRules: boolean;
PowerLevels: boolean;
Member: string[];
ThirdPartyInvite: string[];
}

function Tuples(res: StateKeyTuple) {
let s: StateNeeded;
let arr;
if (s.Create) {
    res.EventType = MRoomCreate;
    res.StateKey = '';
    arr.push(res.EventType, res.StateKey);
}
if (s.JoinRules) {
    res.EventType = MRoomJoinRules;
    res.StateKey = '';
    arr.push(res.EventType, res.StateKey);

 }
if (s.PowerLevels) {
     res.EventType = MRoomPowerLevels;
     res.StateKey = '';
     arr.push(res.EventType, res.StateKey);
 }
for (let userID of s.Member ) {
    res.EventType = MRoomMember;
    res.StateKey = '';
    arr.push(res.EventType, res.StateKey);
}

for (let token of s.ThirdPartyInvite) {
    res.EventType = MRoomThirdPartyInvite;
    res.StateKey = '';
    arr.push(res.EventType, res.StateKey);
}
return;
}

function AuthEventReferences(provider: AuthEventProvider) {
let refs: EventReference;
let s: StateNeeded;
let e: Event;
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

for (let userID of s.Member) {
        if (e === provider.Member(userID)) {
            return;
        }
        else {
            // TBD similar to above cases;
        }
    }

for (let token of s.ThirdPartyInvite) {
        if (e === provider.ThirdPartyInvite(token)) {
            return;
        }
        else {
            // TBD as similar to above cases
        }
    }
return;
}

function StateNeededForEventBuilder(builder: EventBuilder) {
let result: StateNeeded;
let content: MemberContent;
if (builder.Type === MRoomMember) {
    return builder.Content;
}
}

function StateNeededForAuth(events) {
let result: StateNeeded;
for (let undscre of events) {
  for (let event in events) {
let content: MemberContent;
if (Type() === MRoomMember) {
let c = newMemberContentFromEvent(event);
}
undscre = accumulateStateNeeded(result, Type(), Sender(), StateKey(), content);
}
}
result.Member = dedupe(result.Member);
// TBD: ThirdPartyInvite is required?
return;
}

function accumulateStateNeeded(result: StateNeeded, eventType, sender: string, stateKey: string, content: MemberContent) {
switch (eventType) {
    case MRoomCreate: {

    }
    case MRoomAliases: {
        result.Create = true;
    }

    case MRoomMember: {
        if (content === null) {
            return 'missing member content for m.room.member event';
        }
        result.Create = true;
        result.PowerLevels = true;
        if (stateKey !== null) {
            result.Member.push(sender, stateKey);
        }
        if (content.Membership === join) {
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

interface AuthEventProvider {
    Create();
    JoinRules();
    PowerLevels();
    Member(StateKey: string);
    ThirdPartyInvite(StateKey: string);
}


interface AuthEvents {
    events: StateKeyTuple;
}

function AddEvent(event: Event) {
    let a: AuthEvents;
    if (StateKey() === null) {
        return 'event does not have a state key';
    }
    a.events[Type(), StateKey()] = event;
    return event;
}

let arr1;
function Create() {
    let a: AuthEvents;
    a.events.EventType = MRoomCreate;
    a.events.StateKey = '';
    arr1.push(a.events.EventType, a.events.StateKey);
}

function JoinRules() {
    let a: AuthEvents;
    a.events.EventType = MRoomJoinRules;
    a.events.StateKey = '';
    arr1.push(a.events.EventType, a.events.StateKey);
}

function PowerLevels() {
    let a: AuthEvents;
    a.events.EventType = MRoomPowerLevels;
    a.events.StateKey = '';
    arr1.push(a.events.EventType, a.events.StateKey);
}

function Member(stateKey: string) {
    let a: AuthEvents;
    a.events.EventType = MRoomMember;
    a.events.StateKey = stateKey;
    arr1.push(a.events.EventType, a.events.StateKey);
}

function ThirdPartyInvite(stateKey: string) {
    let a: AuthEvents;
    a.events.EventType = MRoomThirdPartyInvite;
    a.events.StateKey = stateKey;
}


// NewAuthEvents returns an AuthEventProvider backed by the given events. New events can be added by
// calling AddEvent().
// NewAuthEvents yet to be added

interface NotAllowed {
Message: string;
}

function Error() {
let a: NotAllowed;
return  'eventauth' + a.Message;
}

function Allowed(event: Event, authEvents: AuthEventProvider) {
// switch (event.fields.Type()) { switch case required

}

function createEventAllowed() {
if (!StateKeyEquals('')) {
return 'create event state key is not empty';
}

let roomIDDomain = domainFromID(RoomID());
let senderDomain = domainFromID(Sender());
if (senderDomain !== roomIDDomain) {
return 'create event roomID doesnot match sender';
}
if (PrevEvents() > 0) {
return 'create event must be the first event in the room';
}
}

function memberEventAllowed() {

}

interface MembershipAllower {
targetID: string;
senderID: string;
senderMember: MemberContent;
oldMember: MemberContent;
newMember: MemberContent;
create: CreateContent;
powerLevels: PowerLevelContent;
joinRule: JoinRulesContent;
// thirdPartyInvite: ThirdPartyContent; to be taken care of
}

function newMembershipAllower(authEvents: AuthEventProvider, event: Event) {
let m: MembershipAllower;
let stateKey = StateKey();
m.targetID = stateKey;
m.senderID = Sender();
if (m.create === newCreateContentFromAuthEvents(authEvents)) {
return;
}
if (m.newMember === newMemberContentFromEvent(event)) {
return;
}
if (m.oldMember === newMemberContentFromAuthEvents(authEvents, m.targetID)) {
return;
}

if (m.senderMember === newMemberContentFromAuthEvents(authEvents, m.senderID)) {
return;
}
if (m.newMember.Membership === 'join') {
if (m.joinRule === newJoinRuleContentFromAuthEvents(authEvents)) {
return;
}
}
return;
}
