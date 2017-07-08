function redactEvent(eventJSON: string) {
  interface createContent {
    creator: string;

  }


  interface joinRulesContent {
    join_rule: string;
  }

  interface powerLevelContent {
    users: string;
    users_default: string;
    events: string;
    events_default: string;
    state_default: string;
    ban: string;
    kick: string;
    redact: string;
  }

  interface memberContent {
    membership: string;
  }

  interface aliasesContent {
    aliases: string;
  }

  interface historyVisibilityContent {
    history_visibility: string;
  }
  type allContent = createContent | joinRulesContent | powerLevelContent | memberContent | aliasesContent | historyVisibilityContent;



  interface eventFields {
    event_id: string;
    sender: string;
    room_id: string;
    hashes: string;
    signatures: string;
    content: string;
    type: string;
    state_key: string;
    depth: string;
    prev_events: string;
    prev_state: string;
    auth_events: string;
    origin: string;
    origin_server_ts: string;
    membership: string;

  }
  function describeContentfields(method: allContent){
  switch (event.type) {
    case "MRoomCreate":
   

  }
}
}
