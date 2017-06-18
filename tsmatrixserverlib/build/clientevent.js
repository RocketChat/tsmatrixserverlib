"use strict";
exports.__esModule = true;
var EventFormat;
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
function ToClientEvent(se, format) {
    var ce = [se.Content,
        se.EventID,
        se.OriginServerTS,
        se.RoomID,
        se.Sender,
        se.StateKey,
        se.Type,
        se.Unsigned];
    var formatALL;
    if (format === formatALL) {
        ce[3] = se.RoomID;
    }
    return ce;
}
exports.ToClientEvent = ToClientEvent;
