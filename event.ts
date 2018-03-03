import {asTimeStamp} from './timestamp';
import {utcTime} from './timestamp';
import {redactEvent} from './redactevent';
import {addContentHashesToEvent} from  './eventcrypto';
import {signEvent} from './eventcrypto';

export interface StateKeyTuple {
  EventType: string;
  StateKey: string;
}

export interface EventReference {
  EventID: string;
  EventSHA256;
}

export interface EventBuilder {
  Sender: string;
  RoomID: string;
  Type: string;
  StateKey: string;
  PrevEvents;
  AuthEvents;
  Redacts: string;
  Depth: number;
  Content;
  Unsigned;
}
let eb: EventBuilder;

export function SetContent(content) {
eb.Content = content;
return;
}

function SetUnsigned(unsigned) {
eb.Unsigned = unsigned;
}

export interface  Event {
redacted;
eventJSON;
fields: EventFields;
}

export interface EventFields {
RoomID: string;
EventID: string;
Sender: string;
Type: string;
StateKey;
Content;
PrevEvents;
AuthEvents;
Redacts: string;
Depth: number;
Unsigned;
OriginServerTS;
Origin;
PrevState;
}
let emptyEventReferenceList = [];
// let event: EventFields;

export function Build(eventID: string, now, origin, keyID, privatekey ) {
let result: Event;
// type event = EventBuilder | Origin | OriginServerTS | eventID;
let event: EventFields;
if (event.PrevEvents === null) {
event.PrevEvents = emptyEventReferenceList;
}
if (event.AuthEvents === null) {
event.AuthEvents = emptyEventReferenceList;
}
event.OriginServerTS = asTimeStamp(now);
event.Origin = origin;
event.EventID = eventID;

if (event.StateKey !== null) {
event.PrevState = emptyEventReferenceList;
}
let eventJSON;
if (eventJSON === event) {
return;
}
if (eventJSON === addContentHashesToEvent(eventJSON)) {
return;
}
if (eventJSON === signEvent(origin, keyID, privatekey, eventJSON)) {
return;
}
// if (eventJSON === eventJSON) {

// } // TBD
result.eventJSON = eventJSON;
return;
}
// let result: Event;
export function NewEventFromTrustedJSON(eventJSON, redacted) {
let result: Event;
result.redacted = redacted;
result.eventJSON = eventJSON;
return redacted;
}

export function Redacted() {
let e: Event;
return e.redacted;
}

export function JSON() {
let e: Event;
return e.eventJSON;
}

function Redact() {
let e: Event;
if (e.redacted) {
return e;
}
let eventJSON = redactEvent(e.eventJSON);
let result =  { redacted: true, eventJSON: eventJSON};
result.redacted = true;
// result.redacted = eventJSON;
return result;
}

export function StateKey() {
let fields: EventFields;
return fields.StateKey;
}

export function StateKeyEquals(statekey) {
let fields: EventFields;
if (fields.StateKey === null) {
return false;
}
return fields.StateKey = statekey;
}
export function Origin() {
let fields: EventFields;
return fields.Origin;
}

export function EventID() {
let fields: EventFields;
return fields.EventID;
}

export function Sender() {
let fields: EventFields;
return fields.Sender;
}

export function Type() {
let e: Event;
let fields: EventFields;
return e.fields.Type;
}

export function OriginServerTS() {
let e: Event;
let fields: EventFields;
return e.fields.OriginServerTS;
}

export function Content() {
let e: Event;
let fields: EventFields;
return e.fields.Content;
}

export function PrevEvents() {
let e: Event;
let fields: EventFields;
return e.fields.PrevEvents;

}
export function AuthEvents() {
let e: Event;
let fields: EventFields;
return e.fields.AuthEvents;
}

export function AuthEventIDs() {
let fields: EventFields;
let result;
for (let i of fields.AuthEvents) {
result[i] = fields.AuthEvents[i].EventID;
}
return result;
}

export function Redacts() {
let e: Event;
let fields: EventFields;
return e.fields.Redacts;
}

export function RoomID() {
let e: Event;
let fields: EventFields;
return e.fields.RoomID;
}

export function Depth() {
let e: Event;
let fields: EventFields;
return e.fields.Depth;
}

export function SplitID(address) {
let local = address.split(':')[0];
let domain = address.split(':')[1];
return local;
}
