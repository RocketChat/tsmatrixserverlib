// import * as TimeStamp from './timestamp';
import {TimeStamp} from './timestamp';
import {EventFields} from './event';
import * as Event from './event';

type EventFormat = number;
declare const FormatAll;
declare const FormatSync;

export interface ClientEvent {
Content: string;
EventID: string;
OriginServerTS: TimeStamp;
RoomID: string;
Sender: string;
StateKey: string;
Type: string;
}

export function ToClientEvents(serverEvs: Event[], format: EventFormat) {
let ClientEvent = [];
let evs = ClientEvent.slice(0, serverEvs.length);
for (let i in serverEvs ) {
let se;
evs[i] = ToClientEvent(se, format);
  }
return evs;
}

export function ToClientEvent(Event, EventFormat) {
let ce = {Content: Event.Content(),
Sender: Event.EventID(),
Type: Event.Type(),
StateKey: Event.StateKey(),
Unsigned: Event.Sender(),
OriginServerTS: Event.OriginServerTS(),
EventID: Event.EventID(),
RoomID: Event.RoomID()
};

// let FormatAll;

if (EventFormat === FormatAll) {
ce.RoomID = Event.RoomID();
  }
return ce;
  }
