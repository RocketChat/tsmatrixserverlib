interface StateKeyTuple{
  EventType:string;
  StateKey:string;
}

interface EventReference {
  EventID:string;
  EventSHA256:Base64String;
}

interface EventBuilder {
  Sender:string;
  RoomID:string;
  Type:string;
  StateKey: string;
   PrevEvents: EventReference[];
   AuthEvents: EventReference[];
   Redacts: string;
   Depth: number;
   Content: string;
   Unsigned: string;

}
