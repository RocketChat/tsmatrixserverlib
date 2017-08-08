import * as TimeStamp from './timestamp';
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
OriginServerTS: string;
Origin: string;
}
