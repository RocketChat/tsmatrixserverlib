"use strict";
exports.__esModule = true;
function ToClientEvents(serverEvs, format) {
    var ClientEvent = [];
    var evs = ClientEvent.slice(0, serverEvs.length);
    for (var i in serverEvs) {
        var se = void 0;
        evs[i] = ToClientEvent(se, format);
    }
    return evs;
}
exports.ToClientEvents = ToClientEvents;
function ToClientEvent(Event, EventFormat) {
    var ce = { Content: Event.Content(),
        Sender: Event.EventID(),
        Type: Event.Type(),
        StateKey: Event.StateKey(),
        Unsigned: Event.Sender(),
        OriginServerTS: Event.OriginServerTS(),
        EventID: Event.EventID(),
        RoomID: Event.RoomID()
    };
    // let FormatAll;
    if (EventFormat === FormatAll) {
        ce.RoomID = Event.RoomID();
    }
    return ce;
}
exports.ToClientEvent = ToClientEvent;
