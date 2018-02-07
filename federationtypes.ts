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
}
