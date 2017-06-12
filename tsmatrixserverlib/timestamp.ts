//turning time to millisecond posix time
export function asTimeStamp(time):string {
    let timeToMs = new Date(time).getTime();
    return timeToMs;
}
default export asTimestamp;
//turning millisecond posix time to Time(UTC)
export function utcTime(milliseconds) {
    let utcTimeFromMs = new Date(milliseconds);
    return utcTimeFromMs;
}

//exports.asTimeStamp = asTimeStamp;
//exports.utcTime = utcTime;
