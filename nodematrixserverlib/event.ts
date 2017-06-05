  interface StateKeyTuple{
    EventType:string;
    StateKey:string;
  }

  interface EventReference {
    EventID:string;
    //EventSHA256:Base64String;
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

var SetContent: EventBuilder = function (Content: string) {
      return JSON.stringify(Content);
  }

var SetUnsigned: EventBuilder = function (Unsigned: string) {
    return JSON.stringify(Unsigned);
}
interface eventFields {
    RoomID:string;
    EventID:string;
    Sender:string;
    Type:string;
    StateKey:string;
    Content:string;
    PrevEvents:EventReference[];
    AuthEvents: EventReference[];
    Redacts:string;
    Depth:number;
    Unsigned:string;
    OriginServerTS:Timestamp;
    Origin:ServerName;

}
