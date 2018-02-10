export interface CreateContent {
Creator;
  }
export interface JoinRulesContent {
JoinRule;
  }

export interface  PowerLevelContent {
Users;
UsersDefault;
Events;
EventsDefault;
StateDefault;
Ban;
Kick;
Redact;
}

export interface MemberContent {
Membership;
  }
export interface AliasesContent {
Aliases;
  }

export interface  HistoryVisibilityContent {
HistoryVisibility;
  }
// type AllContent = CreateContent | JoinRulesContent | PowerLevelContent | MemberContent | AliasesContent | HistoryVisibilityContent;
export interface AllContent {
CreateContent;
JoinRulesContent;
PowerLevelContent;
MemberContent;
AliasesContent;
HistoryVisibilityContent;

}

export interface EventFields {
EventID;
Sender;
RoomID;
Hashes;
Signatures;
Content: AllContent;
Type;
StateKey;
Depth;
PrevEvents;
PrevState;
AuthEvents;
Origin;
OriginServerTS;
  }

export let event: EventFields;
export function redactEvent(eventJSON: string) {
// interface CreateContent {
// Creator;
//   }
// interface JoinRulesContent {
// JoinRule;
//   }

// interface  PowerLevelContent {
// Users;
// UsersDefault;
// Events;
// EventsDefault;
// StateDefault;
// Ban;
// Kick;
// Redact;
// }

// interface MemberContent {
// Membership;
//   }
// interface AliasesContent {
// Aliases;
//   }

// interface  HistoryVisibilityContent {
// HistoryVisibility;
//   }
// // type AllContent = CreateContent | JoinRulesContent | PowerLevelContent | MemberContent | AliasesContent | HistoryVisibilityContent;
// interface AllContent {
// CreateContent;
// JoinRulesContent;
// PowerLevelContent;
// MemberContent;
// AliasesContent;
// HistoryVisibilityContent;

// }

// interface EventFields {
// EventID;
// Sender;
// RoomID;
// Hashes;
// Signatures;
// Content: AllContent;
// Type;
// StateKey;
// Depth;
// PrevEvents;
// PrevState;
// AuthEvents;
// Origin;
// OriginServerTS;
//   }
// let event: EventFields;
JSON.stringify(event);
let NewContent: AllContent;
// let membercontent: MemberContent;
// let joinrulescontent: JoinRulesContent;
// let powerlevelcontent: PowerLevelContent;
// let historyvisibilitycontent: HistoryVisibilityContent;
// let aliasescontent: AliasesContent;
switch (event.Type) {
case 'MRoomCreate': {
NewContent.CreateContent === event.Content.CreateContent;
return event.Content;
}
case 'MRoomMember': {
 NewContent.MemberContent = event.Content.MemberContent;
// return membercontent;
}
case 'MRoomJoinRules': {
NewContent.JoinRulesContent = event.Content.JoinRulesContent;
 // return joinrulescontent;
}
case 'MRoomPowerLevels': {
NewContent.PowerLevelContent = event.Content.PowerLevelContent;
// return powerlevelcontent;
}
case 'MRoomHistoryVisibility': {
NewContent.HistoryVisibilityContent = event.Content.HistoryVisibilityContent;
// return historyvisibilitycontent;
}
case 'MRoomAliases': {
NewContent.AliasesContent = event.Content.AliasesContent;
// return aliasescontent;
}
  }

event.Content = NewContent;
return event;

}
