import iota = require("iota");

let EventFormat: number;
declare const FormatAll; //a bit of change may come 
declare const FormatSync;

export interface ClientEvent {
  Content: "content";
  EventID: "event_id";
  OriginServerTS: "origin_server_ts";
  RoomID: "room_id,omitempty";
  Sender: "sender";
  StateKey: "state_key,omitempty";
  Type: "type";
  Unsigned: "unsigned,omitempty";
}

export function ToClientEvents(serverEvs:any,format:any){
  let ClientEvent = [];
  let evs = ClientEvent.slice(0,serverEvs.length);
  for (let i in serverEvs ){
    let se;
    evs[i] = ToClientEvent(se,format);
  }
  return evs;
}

export function ToClientEvent(se:ClientEvent,format:ClientEvent){
  let ce = [se.Content,
  se.EventID,
  se.OriginServerTS,
  se.RoomID,
  se.Sender,
  se.StateKey,
  se.Type,
  se.Unsigned];

  let formatALL:any;
  if (format === formatALL){
    ce[3] = se.RoomID;
  }
    return ce;
  }
