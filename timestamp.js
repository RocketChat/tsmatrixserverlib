"use strict";
exports.__esModule = true;
//turning time to millisecond posix time
//export class Index{
function asTimeStamp(time) {
    var timeToMs = new Date(time).getTime();
    return timeToMs;
}
exports.asTimeStamp = asTimeStamp;
//default export asTimestamp;
//turning millisecond posix time to Time(UTC)
function utcTime(milliseconds) {
    var utcTimeFromMs = new Date(milliseconds);
    return utcTimeFromMs;
}
exports.utcTime = utcTime;
//}
//exports.asTimeStamp = asTimeStamp;
//exports.utcTime = utcTime;
