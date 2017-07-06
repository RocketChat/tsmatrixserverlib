function redactEvent(eventJSON:string){
  interface createContent{
    creator:undefined;

  }

}
interface joinRulesContent{
    join_rule:undefined;
}

interface powerLevelContent{
    users:undefined;
    users_default:undefined;
    events: undefined;
    events_default: undefined;
    state_default: undefined;
    ban: undefined;
    kick: undefined;
    redact: undefined;
}

interface memberContent{
    membership: undefined;
}

interface aliasesContent{
    aliases: undefined;
}

interface historyVisibilityContent{
    history_visibility: undefined;
}

// not able to understand allContent in https://github.com/matrix-org/gomatrixserverlib/blob/master/redactevent.go#L104

interface eventFields{
    event_id: undefined;
    sender: undefined;
    room_id: undefined;
    hashes: undefined;
    signatures: undefined;
    content: undefined;
    type: undefined;
    state_key: undefined;
    depth: undefined;
    prev_events: undefined;
    prev_state: undefined;
    auth_events: undefined;
    origin: undefined;
    origin_server_ts: undefined;
    membership: undefined;

}
