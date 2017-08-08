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

interface EventBuilder {
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

interface  Event {
redacted: boolean;
fields: EventFields;
}

interface EventFields {
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
function Build(eventID: string, now: string, origin: string, ) {
event.OriginServerTS = asTimeStamp(now);
}
function Origin() {
return event.Origin;
}

function EventID() {
return event.EventID;
}

function Sender() {
return event.Sender;
}

function Type() {
return event.Type;
}

function OriginServerTS() {
return event.OriginServerTS;
}

function Content() {
return event.Content;
}

function Redacts() {
return event.Redacts;
}

function RoomID() {
return event.RoomID;
}

function SplitID() {

}
