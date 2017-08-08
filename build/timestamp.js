"use strict";
exports.__esModule = true;
function asTimeStamp(time) {
    var timeToMs = new Date(time).getTime();
    return timeToMs;
}
exports.asTimeStamp = asTimeStamp;
function utcTime(milliseconds) {
    var utcTimeFromMs = new Date(milliseconds);
    return utcTimeFromMs;
}
exports.utcTime = utcTime;
