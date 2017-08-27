"use strict";
exports.__esModule = true;
function redactEvent(eventJSON) {
    var event;
    JSON.stringify(event);
    var NewContent;
    var membercontent;
    var joinrulescontent;
    var powerlevelcontent;
    var historyvisibilitycontent;
    var aliasescontent;
    switch (event.Type) {
        case 'MRoomCreate': {
            // NewContent.CreateContent === event.Content.CreateContent;
            return event.Content;
        }
        case 'MRoomMember': {
            // NewContent.MemberContent = event.Content.MemberContent;
            return membercontent;
        }
        case 'MRoomJoinRules': {
            // NewContent.JoinRulesContent= event.Content.JoinRulesContent;
            return joinrulescontent;
        }
        case 'MRoomPowerLevels': {
            // NewContent.PowerLevelContent = event.Content.PowerLevelContent;
            return powerlevelcontent;
        }
        case 'MRoomHistoryVisibility': {
            // NewContent.HistoryVisibilityContent = event.Content.HistoryVisibilityContent;
            return historyvisibilitycontent;
        }
        case 'MRoomAliases': {
            // NewContent.AliasesContent = event.Content.AliasesContent;
            return aliasescontent;
        }
    }
    event.Content = NewContent;
    return event;
}
exports.redactEvent = redactEvent;
