function redactEvent(eventJSON:string){
  interface createContent{
    creator:string;
  }
  // function omitempty(createContent): {creator:string } {
  //   let newomit = {creator: undefined};
}
interface joinRulesContent{
    join_rule:string;
}

interface powerLevelContent{
    users:string;
    users_default:string;
    events: string;
    events_default: string;
    state_default: string;
    ban: string;
    kick: string;
    redact: string;
}
