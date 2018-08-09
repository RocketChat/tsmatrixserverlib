"use strict";
exports.__esModule = true;
var eventAuth_1 = require("./eventAuth");
function redactEvent(eventJSON) {
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
    JSON.stringify(exports.event);
    var NewContent;
    // let membercontent: MemberContent;
    // let joinrulescontent: JoinRulesContent;
    // let powerlevelcontent: PowerLevelContent;
    // let historyvisibilitycontent: HistoryVisibilityContent;
    // let aliasescontent: AliasesContent;
    switch (exports.event.Type) {
        case eventAuth_1.MRoomCreate: {
            NewContent.CreateContent === exports.event.Content.CreateContent;
            return exports.event.Content;
        }
        case eventAuth_1.MRoomMember: {
            NewContent.MemberContent = exports.event.Content.MemberContent;
            // return membercontent;
        }
        case eventAuth_1.MRoomJoinRules: {
            NewContent.JoinRulesContent = exports.event.Content.JoinRulesContent;
            // return joinrulescontent;
        }
        case eventAuth_1.MRoomPowerLevels: {
            NewContent.PowerLevelContent = exports.event.Content.PowerLevelContent;
            // return powerlevelcontent;
        }
        case eventAuth_1.MRoomHistoryVisibility: {
            NewContent.HistoryVisibilityContent = exports.event.Content.HistoryVisibilityContent;
            // return historyvisibilitycontent;
        }
        case eventAuth_1.MRoomAliases: {
            NewContent.AliasesContent = exports.event.Content.AliasesContent;
            // return aliasescontent;
        }
    }
    exports.event.Content = NewContent;
    return exports.event;
}
exports.redactEvent = redactEvent;
