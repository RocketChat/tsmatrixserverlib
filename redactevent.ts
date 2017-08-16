function redactEvent(eventJSON: string) {
interface CreateContent {
Creator: string | null | undefined;
  }
interface JoinRulesContent {
JoinRule: string | null | undefined;
  }

interface  PowerLevelContent {
Users: string | null | undefined;
UsersDefault: string | null | undefined;
Events: string |null | undefined;
EventsDefault: string | null | undefined;
StateDefault: string | null | undefined;
Ban: string | null | undefined;
Kick: string | null | undefined;
Redact: string | null | undefined;
  }

interface MemberContent {
Membership: string | null | undefined;
  }
interface AliasesContent {
Aliases: string | null | undefined;
  }

interface  HistoryVisibilityContent {
HistoryVisibility: string | null | undefined;
  }
type AllContent = CreateContent | JoinRulesContent | PowerLevelContent | MemberContent | AliasesContent | HistoryVisibilityContent;

interface EventFields {
EventID: string | null | undefined;
Sender: string | null | undefined;
RoomID: string | null | undefined;
Hashes: string | null | undefined;
Signatures: string | null | undefined;
Content: AllContent;
Type: string;
StateKey: string | null | undefined;
Depth: string | null | undefined;
PrevEvents: string | null | undefined;
PrevState: string | null | undefined;
AuthEvents: string | null | undefined;
Origin: string | null | undefined;
OriginServerTS: string | null | undefined;
  }
let event: EventFields;
JSON.stringify(event);
let NewContent: AllContent;

}
