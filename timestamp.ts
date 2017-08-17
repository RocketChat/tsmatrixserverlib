export interface TimeStamp {
timeToMs: string;
utcTimeFromMs: string;
}
export  function  asTimeStamp(time) {
let timeToMs = new Date(time).getTime();
return timeToMs;
  }

export function utcTime(milliseconds) {
let utcTimeFromMs = new Date(milliseconds);
return utcTimeFromMs;
  }
