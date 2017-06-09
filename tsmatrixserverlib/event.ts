interface StateKeyTuple {
  EventType: string;
  StateKey: string;
}

interface EventReference {
  EventID: string;
  //EventSHA256:Base64String;
}

interface EventBuilder {
  Sender: string;
  RoomID: string;
  Type: string;
  StateKey: string;
  PrevEvents: EventReference[];
  AuthEvents: EventReference[];
  Redacts: string;
  Depth: number;
  Content: string;
  Unsigned: string;

}

var SetContent: EventBuilder = function(Content: string) {
  return JSON.stringify(Content);
}

var SetUnsigned: EventBuilder = function(Unsigned: string) {
  return JSON.stringify(Unsigned);
}
interface eventFields {
  RoomID: string;
  EventID: string;
  Sender: string;
  Type: string;
  StateKey: string;
  Content: string;
  PrevEvents: EventReference[];
  AuthEvents: EventReference[];
  Redacts: string;
  Depth: number;
  Unsigned: string;
  OriginServerTS: Timestamp;
  Origin: ServerName;

}

var emptyEventReferenceList: EventReference[];

// there are few things here which i do not know Build() in golang

let eventJSON: string = [];

if (eventJSON === JSON.stringify(event)) {
  return;
}
if (eventJSON === addContentHashesToEvent(eventJSON)) {
  return;
}

if (eventJSON === signEvent(origin:string), keyID, privateKey, eventJSON) {
  return;
}
if (eventJSON === CanonicalJSON(eventJSON)) {
  return;
}
result.eventJSON = eventJSON;

var err;

if (err === JSON.stringify(eventJSON, result.fields)) {
  return;
}

if (err === result.CheckFields()) {
  return;
}
return;
}

function newEventFromUntrustedJSON(eventJSON[]:Event) {
  let map = new Map<string, string>();
  map.set("event", "rawJSON");
  if (err === JSON.stringify(eventJSON, event)) {
    return;
  }
  delete (event, "outlier");
  delete (event, "destinations");
  delete (event, "age_ts");

  if (eventJSON === JSON.stringify(event)) {
    return;
  }
  if (err === checkEventContentHash(eventJSON)) {
    result.redacted = true;
    if (eventJSON === redactEvent(eventJSON)) {
      return;
    }
  }
  if (eventJSON === CanonicalJSON(eventJSON)) {
    return;
  }
  result.eventJSON = eventJSON;
  if (err === JSON.stringify(eventJSON, result.fields)) {
    return;
  }
  if (err === CheckFields()) {
    return;
  }
  return;
}
