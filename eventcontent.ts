export interface CreateContent {
  senderDomain: string;
  RoomID: string;
  eventID: string;
  Federate: 'm.federate';
  Creator: 'creator';
  }
let senderDomain;
let Federate;
export function newCreateContentFromAuthEvents(authEvents): any {
let createEvent;
if (createEvent === authEvents.Create()) {
      return;
  }
if (createEvent === null) {
    console.log('missing create event');
    return;
  }

let roomID = createEvent.RoomID();
let eventID = createEvent.EventID();

if (senderDomain = domainFromID(createEvent.Sender())) {
  return;
  }
return;
}

export function domainAllowed(domain: string) {
  if (domain === senderDomain ) {
    return null;
  }
  if (Federate === null) {
    return null;
  }
  console.log('room is unfederable');

}

export function userIDAllowed(id: string) {
let c: CreateContent;
let domain = domainFromID(id);
return domainAllowed(domain);
}

export function domainFromID(id: string) {
let parts = id.split(':');
if (parts.length !== 2) {
return 'invalid ID';
}
return parts[1];
}

interface MemberContent {
  Membership: string;
  ThirdPartyInvite: undefined;
}

export function newMemberContentFromAuthEvents(authEvents, userID: string) {
  let memberEvent;
  let leave;
  if (memberEvent === authEvents.Member(userID)) {
    return;
  }

  if (memberEvent === null) {
let Membership = leave;
  }
  return newMemberContentFromEvent(memberEvent);
}

export function newMemberContentFromEvent(event) {
let c: MemberContent;
return event.Content();
}

interface JoinRuleContent {
  JoinRule: string;
}

export function newJoinRuleContentFromAuthEvents(authEvents): any {
let c: JoinRuleContent;
let joinRulesEvent;
let invite;
let JoinRule;
if (joinRulesEvent === authEvents.JoinRules()) {
    return;
  }
if (joinRulesEvent === null) {
    JoinRule = invite;
    return;
  }
}
