import iota = require("iota");

let EventFormat: number;
declare const FormatAll;
declare const FormatSync;

interface ClientEvent {
  Content: "content";
  EventID: "event_id";
  OriginServerTS: "origin_server_ts";
  RoomID: "room_id,omitempty";
  Sender: "sender";
  StateKey: "state_key,omitempty";
  Type: "type";
  Unsigned: "unsigned,omitempty";
}

function ToClientEvent(serverevs:number,format:number)
// interface ClientEvent {
   EventID: string;
//   OriginServerTS:Date;
//   RoomID: string;
//   Sender: string;
//   StateKey: string;
//   Type: string;
//   Unsigned: string;
// }
//
// export function ToClientEvents(serverEvs:any[], format: any): ClientEvent {
//   var evs = ClientEvent.slice(0, serverEvs.length);
//   for (var _i = 0; _i < serverEvs.length; _i++) {
//     evs[i] = ToClientEvent(se, format);
//   }
//   return;
// }
// let Event = new se;
// let EventFormat = new format;
// function ToClientEvent(se: any, format: any): ClientEvent {
//     let ce: ClientEvent{
//     Content: se.Content:();
//     Type: se.Type();
//     StateKey: se.StateKey();
//     Unsigned: se.Unsigned();
//     OriginServerTS: se.OriginServerTS();
//     EventID: se.EventID();
//   }
//   if (format === FormatAll) {
//     ce.RoomID = se.RoomID();
//   }
//   return ce;
// }
