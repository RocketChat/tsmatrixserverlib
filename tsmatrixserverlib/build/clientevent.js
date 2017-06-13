var EventFormat;
var FormatAll = iota;
var FormatSync;
function ToClientEvents(serverEvs, Event, format) {
    if (serverEvs === void 0) { serverEvs = []; }
    if (format === void 0) { format = EventFormat; }
    var evs = ClientEvent.slice(0, serverEvs.length);
    for (var _i = 0; _i < serverEvs.length; _i++) {
        evs[i] = ToClientEvent(se, format);
    }
    return;
}
var Event = new se;
var EventFormat = new format;
function ToClientEvent(se, format) {
    var ce = {
        Content: se.Content(),
        Type: se.Type(),
        StateKey: se.StateKey(),
        Unsigned: se.Unsigned(),
        OriginServerTS: se.OriginServerTS(),
        EventID: se.EventID()
    };
    if (format === FormatAll) {
        ce.RoomID = se.RoomID();
    }
    return ce;
}
