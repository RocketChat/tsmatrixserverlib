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

}
