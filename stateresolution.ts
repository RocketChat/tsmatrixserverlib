import crypto = require('crypto');
import * as event from './event';

function ResolveStateConflicts (conflicted, authEvents) {
let r: StateResolver;
// r.resolvedThirdPartyInvites
r.resolvedThirdPartyInvites = Event;
r.resolvedMembers = Event;
addConflicted(conflicted);
for (let i in authEvents) {
addAuthEvent(authEvents[i]);
}
resolveAndAddAuthBlocks(r.creates);
resolveAndAddAuthBlocks(r.powerLevels);
resolveAndAddAuthBlocks(r.joinRules);
resolveAndAddAuthBlocks(r.thirdpartyinvites);
resolveAndAddAuthBlocks(r.members);

for (let block of r.others) {
if (event === resolveNormalBlock(block)) {
r.result.push(event);
}
}
return r.result;
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


function removeauthEvent(eventType, statekey) {
let r: StateResolver;
switch (eventType) {
case 'MRoomCreate': {
if (statekey === '') {
r.resolvedCreate = null;
}
}

case 'MRoomPowerLevels': {
if (statekey === '') {
r.resolvedPowerLevels = null;
}
}

case 'MRoomJoinRules': {
if (statekey === '') {
r.resolvedJoinRules = null;
}
}

case 'MRoomMember': {
r.resolvedMembers[statekey] = null;
}

case 'MRoomThirdPartyInvite': {
r.resolvedThirdPartyInvites[statekey] = null;
}

default:
return 'unexpected autherror';
}
}

function resolveAndAddAuthBlocks(blocks) {
let r: StateResolver;
let start = r.result.length;
for (let block of blocks) {
if (block.length === 0) {
continue;
}
let event;
if ( event === resolveAuthBlock(block)) {
r.result.push(event);
}
}
for (let i = start; i < r.result.length; i++) {
addAuthEvent(r.result[i]);
}
}

function resolveAuthBlock(events) {
let block = sortConflictedEventByDepthAndSHA1(events);
let result = block[0].event;
addAuthEvent(result);
for (let i = 1; i < block.lenNamegth; i++) {
let event = block[i].event;
result = event;
addAuthEvent(result);
}
removeauthEvent(result.Type(), result.StateKey());
return result;
}

function resolveNormalBlock(events) {
let r: StateResolver;
let block = sortConflictedEventByDepthAndSHA1(events);
for (let i = block.length() - 1; i > 0; i--) {
let event = block[i].event;
return event;
}
return block[0].event;
}

export function sortConflictedEventByDepthAndSHA1(events) {
let ConflictedEvent;
let block  = ConflictedEvent.slice(0, events.length);
for (let i of events) {
let event = events[i];
block[i] = ConflictedEvent.push({ 'depth' : event.Depth(), 'eventIDSHA1': crypto.createHash('sha1').update(event.eventID()).digest('hex'), 'event': event });
}
ConflictedEvent.sort(block);
return block;
}

interface  ConflictedEvent {
depth;
eventIDSHA1;
event;
}
