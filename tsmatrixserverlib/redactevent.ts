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
    membership: string;
}

interface aliasesContent{
    aliases: string;
}

interface historyVisibilityContent{
    history_visibility: string;
}

// not able to understand allContent in https://github.com/matrix-org/gomatrixserverlib/blob/master/redactevent.go#L104

interface eventFields{
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
