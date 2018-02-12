import crypto = require('crypto');
import * as event from './event';

function ResolveStateConflicts (conflicted, authEvents) {
let r: StateResolver;
// r.resolvedThirdPartyInvites
}

interface StateResolver {
creates;
powerLevels;
joinRules;
thirdpartyinvites;
members;
others;
resolvedCreate;
resolvedPowerLevels;
resolvedJoinRules;
resolvedThirdPartyInvites;
resolvedMembers;
result;
}

function Create() {
let r: StateResolver;
return r.resolvedCreate;
}

function powerLevels() {
let r: StateResolver;
return r.resolvedPowerLevels;
}

function JoinRules() {
let r: StateResolver;
return r.resolvedJoinRules;
}

function ThirdPartyInvite(key: string) {
let r: StateResolver;
return r.resolvedThirdPartyInvites[key];
}

function Member(key: string) {
let r: StateResolver;
return r.resolvedMembers[key];
}

function addConflicted(event) {
let r: StateResolver;
let eventType;
let statekey;
let conflictkey = [eventType, statekey];
let offsets = conflictkey; // need to be converted to a number
let key = conflictkey[event.Type(), event.StateKey()];
let blocklist = r.others;
switch (key.eventType) {
case 'MRoomCreate':
if (key.statekey === '') {
r.creates = r.creates.push(event);
}
case 'MRoomPowerLevels':
if (key.statekey === '') {
r.powerLevels = r.powerLevels.push(event);
}

case 'MRoomJoinRules':
if (key.statekey === '') {
r.joinRules = r.joinRules.push(event);
}

case 'MRoomMember': {
blocklist = r.members;
}

case 'MRoomThirdPartyInvite': {
blocklist = r.thirdpartyinvites;
}
}
let offset, ok = offsets[key];
if (!ok) {
offset = blocklist.length;
blocklist = blocklist.push(null);
offsets[key] = offset;
}
let block = [offset];
block = event;
}

function addAuthEvent(event) {
let r: StateResolver;
switch (event.Type()) {
case 'MRoomCreate': {
if (event.StateKeyEquals('')) {
r.resolvedCreate = event;
}
}
case 'MRoomPowerLevels': {
if (event.StateKeyEquals('')) {
r.resolvedPowerLevels = event;
}
}

case 'MRoomJoinRules': {
if (event.StateKeyEquals('')) {
r.resolvedJoinRules = event;
}
}
case 'MRoomMember': {
r.resolvedMembers[event.StateKey()] = event;
}

case 'MRoomThirdPartyInvite': {
r.resolvedThirdPartyInvites[event.StateKey()] = event;
}
default:
return 'unexpected auth event';
}
}
