interface createContent{
  senderDomain:string;
  RoomID:string;
  eventID:string;
  Federate:"m.federate";
  Creator:"creator";
  }
  let senderDomain;
  let Federate;
  function newCreateContentFromAuthEvents(authEvents){
  var createEvent;
  if (createEvent == authEvents.Create()){
      return;
  }
  if (createEvent == null){
    console.log("missing create event");
    return;
  }
  //one more if
let roomID = createEvent.RoomID();
let eventID = createEvent.EventID();
//domainFromID call
if (senderDomain = domainFromID(createEvent.Sender())){
  return;
  }
return;
}

export function domainAllowed(domain:string){
  if (domain ==senderDomain ){
    return null;
  }
  if (Federate == null){
    return null;
  }
  console.log("room is unfederable");

}

function domainFromID(id:string){
  //code to be written
}

interface memberContent{
  Membership:string;
  ThirdPartyInvite: undefined;
}

export function newMemberContentFromAuthEvents(authEvents,userID:string){
  let memberEvent;
  let leave;
  if (memberEvent==authEvents.Member(userID)){
    return;
  }
  if(memberEvent==null){
    let Membership=leave;
  }
  return newMemberContentFromEvent(memberEvent);
}

function newMemberContentFromEvent(event){

}

interface joinRuleContent{
  JoinRule: string;
}

export function newJoinRuleContentFromAuthEvents(authEvents,joinRuleContent){
let joinRulesEvent;
let invite;
let JoinRule;
if (joinRulesEvent == authEvents.JoinRules()){
    return;
  }
  if (joinRulesEvent == null){
    JoinRule = invite;
    return;
  }
}
