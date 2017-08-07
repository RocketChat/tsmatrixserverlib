interface StateKeyTuple{
  EventType: string;
  StateKey: string;
}

interface EventReference{
  EventID: string;
  EventSHA256: string;
}

interface EventBuilder{
  Sender: string;
  RoomID: string;
  Type: string;
  StateKey:string;
  PrevEvents:"prev_events";
  authEvents: "auth_events";
  Redacts: string;
  Depth:number;
  Content:"rawjson";
  Unsigned:"unsigned";

}
