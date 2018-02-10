import {asTimeStamp} from './timestamp';
import {utcTime} from './timestamp';
import {redactEvent} from './redactevent';
import {addContentHashesToEvent} from  './eventcrypto';
import {signEvent} from './eventcrypto';

interface StateKeyTuple {
  EventType: string;
  StateKey: string;
}

interface EventReference {
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

function SetContent(content) {
eb.Content = content;
return;
}

function SetUnsigned(unsigned) {
eb.Unsigned = unsigned;
}

export interface  Event {
redacted: boolean;
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
function NewEventFromTrustedJSON(eventJSON, redacted) {
let result: Event;
result.redacted = redacted;
result.eventJSON = eventJSON;
return;
}

function Redacted() {
let e: Event;
return e.redacted;
}

function JSON() {
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
let fields: EventFields;
return fields.Type;
}

export function OriginServerTS() {
let fields: EventFields;
return fields.OriginServerTS;
}

export function Content() {
let fields: EventFields;
return fields.Content;
}

export function AuthEvents() {
let fields: EventFields;
return fields.AuthEvents;
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
let fields: EventFields;
return fields.Redacts;
}

export function RoomID() {
let fields: EventFields;
return fields.RoomID;
}

export function Depth() {
let fields: EventFields;
return fields.Depth;
}

export function SplitID(address) {
let local = address.split(':')[0];
let domain = address.split(':')[1];
return local;
}
