
function redactEvent(eventJSON: string) {

  interface createContent {
    Creator: "creator";

  }


  interface joinRulesContent {
    JoinRule: "join_rule";
  }

  interface powerLevelContent {
    Users: "users";
    UsersDefault: "users_default";
    Events: "events";
    EventsDefault: "events_default";
    StateDefault: "state_default";
    Ban: "ban";
    Kick: "kick";
    Redact: "redact";
  }

  interface memberContent {
    Membership: "membership";
  }

  interface aliasesContent {
    Aliases: "aliases";
  }

  interface historyVisibilityContent {
    HistoryVisibility: "history_visibility";
  }
  type allContent = createContent | joinRulesContent | powerLevelContent | memberContent | aliasesContent | historyVisibilityContent;


  interface eventFields {
    EventID: "event_id";
    Sender: "sender";
    RoomID: "room_id";
    Hashes: "hashes";
    Signatures: "signatures";
    Content: "content";
    Type: "type";
    StateKey: "state_key";
    Depth: "depth";
    PrevEvents: "prev_events";
    AuthEvents: "auth_events";
    Origin: "origin";
    OriginServerTS: "origin_server_ts";
    Membership: "membership";

  }
  var event: eventFields;
  var newContent: allContent;

  function describeContentfields() {


    }
  }
