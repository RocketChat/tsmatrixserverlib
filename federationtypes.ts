import {StateKeyTuple} from './event';

interface RespSend {
PDUs: PDUResult [];
}

interface PDUResult {
Error: string;
}

interface RespStateIDs {
StateEventIDs;
AuthEventIDs: string[];
}

interface RespState {
StateEvents;
AuthEventS;
}

function Events(Event) {
let r: RespState;
let eventsByID = Event;
for (let i of r.StateEvents) {
eventsByID [r.StateEvents [i].EventID()] = r.StateEvents[i];
}

for (let i of r.AuthEventS) {
eventsByID [r.AuthEventS[i].EventID()] = r.AuthEventS[i];
}
let queued = Event;
let outputted = Event;
let result: Event[];
for (let event of eventsByID) {
if (outputted === [event]) {
continue;
}
let stack = Event[event];
}
// the function is not yet complete
}

function Check(ctx, keyRing) {
let r: RespState;
let allEvents: Event[];
for (let event of r.AuthEventS) {
if (event.StateKey() === null) {
return 'event does not have a state key';
}
allEvents.push(event);
}
let stateTuples: StateKeyTuple;
for (let event of r.StateEvents) {
if (event.StateKey() === null) {
return 'event does not have a state key';
}
let stateTuple: StateKeyTuple;
stateTuple = event.Type(), event.StateKey();
if (stateTuples === stateTuple) {
return 'duplicate key found';
}
allEvents.push(event);
}

}
