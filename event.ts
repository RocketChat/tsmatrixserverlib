import {asTimeStamp} from './timestamp';
import {utcTime} from './timestamp';
interface StateKeyTuple {
  EventType: string;
  StateKey: string;
}

interface EventReference {
  EventID: string;
  EventSHA256: string;
}

export interface EventBuilder {
  Sender: string;
  RoomID: string;
  Type: string;
  StateKey: string;
  Redacts: string;
  Depth: number;
  Content: string;
}
let eb: EventBuilder;
function SetContent() {
eb.Content = 'content';
return;
}

export interface  Event {
redacted: boolean;
eventJSON: string[];
fields: EventFields;
}

export interface EventFields {
RoomID: string;
EventID: string;
Sender: string;
Type: string;
Content: string;
Redacts: string;
OriginServerTS: number;
Origin: string;
}
let event: EventFields;

export function Build(eventID: string, now: string, origin: string, ) {
event.OriginServerTS = asTimeStamp(now);
event.Origin = origin;
event.EventID = eventID;
}
let result: Event;
function NewEventFromTrustedJSON(eventJSON: string[], redacted) {

result.redacted = redacted;
result.eventJSON = eventJSON;
return;
}
let e: Event;
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
let eventJSON = redactEvent(e.eventJSON); // redactEvent has to be added to redactEvent.ts
result.redacted = true;
result.eventJSON = eventJSON;
return result;
}

export function Origin() {
return event.Origin;
}

export function EventID() {
return event.EventID;
}

export function Sender() {
return event.Sender;
}

export function Type() {
return event.Type;
}

export function OriginServerTS() {
return event.OriginServerTS;
}

export function Content() {
return event.Content;
}

export function Redacts() {
return event.Redacts;
}

export function RoomID() {
return event.RoomID;
}

export function SplitID(address) {
let local = address.split(':')[0];
let domain = address.split(':')[1];
return local;
}
