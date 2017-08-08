export  function  asTimeStamp(time) {
let timeToMs = new Date(time).getTime();
return timeToMs;
  }

export function utcTime(milliseconds) {
let utcTimeFromMs = new Date(milliseconds);
return utcTimeFromMs;
  }
