"use strict";
exports.__esModule = true;
function redactEvent(eventJSON) {
    var event;
    var newContent;
    var joinrule;
    var powerlevel;
    var historyvisibility;
    var aliascontent;
    function eventfunction(method) {
        switch (event.Type) {
            case "MRoomCreate":
                return event.Content;
            case "MRoomMember":
                return event.Membership;
            case "MRoomjoinRules":
                return joinrule.JoinRule;
            case "MRoomPowerLevels":
                return powerlevel;
            case "MRoomHistoryVisibility":
                return historyvisibility;
            case "MRoomAliases":
                return aliascontent;
        }
    }
}
exports.redactEvent = redactEvent;
