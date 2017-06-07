let EventFormat: number;

const FormatAll: EventFormat = iota;
const FormatSync;

interface ClientEvent {
  Content: string;
  EventID: string;
  OriginServerTS: string;
  RoomID: string;
  Sender: string;
  StateKey: string;
  Type: string;
  Unsigned: string;
}

function ToClientEvents(serverEvs[]Event, format EventFormat): ClientEvent {
  var evs = ClientEvent.slice(0, serverEvs.length);
  for (var _i = 0; _i < serverEvs.length; _i++) {
    evs[i] = ToClientEvent(se, format);
  }
  return;
}
let Event = new se;
let EventFormat = new format;
function ToClientEvent(se, format): ClientEvent {
  var ce: ClientEvent{
    Content: se.Content();
    Type: se.Type();
    StateKey: se.StateKey();
    Unsigned: se.Unsigned();
    OriginServerTS: se.OriginServerTS();
    EventID: se.EventID();
  }
  if (format === FormatAll) {
    ce.RoomID = se.RoomID();
  }
  return ce;
}
