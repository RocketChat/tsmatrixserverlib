// import * as TimeStamp from './timestamp';
import {TimeStamp} from './timestamp';

type EventFormat =  number;
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

export function ToClientEvents(serverEvs, format) {
let ClientEvent = [];
let evs = ClientEvent.slice(0, serverEvs.length);
for (let i in serverEvs ) {
let se;
evs[i] = ToClientEvent(se, format);
  }
return evs;
}

export function ToClientEvent(se: ClientEvent, format: ClientEvent) {
let ce = [se.Content,
  se.EventID,
  se.OriginServerTS,
  se.RoomID,
  se.Sender,
  se.StateKey,
  se.Type];

let formatALL;
if (format === formatALL) {
ce[3] = se.RoomID;
  }
return ce;
  }
