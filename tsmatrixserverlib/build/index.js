"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function asTimeStamp(time) {
    var timeToMs = new Date(time).getTime();
    return timeToMs;
}
exports.default = asTimeStamp;
function utcTime(milliseconds) {
    var utcTimeFromMs = new Date(milliseconds);
    return utcTimeFromMs;
}
exports.utcTime = utcTime;
//# sourceMappingURL=index.js.map