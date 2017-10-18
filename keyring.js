"use strict";
exports.__esModule = true;
var HashMap = require("hashmap");
var ServerName;
var KeyID;
function KeyFetcher() {
    var map = new HashMap();
    var NewMap = map.set(ServerName, KeyID);
    var MapTimestamp = map.set(NewMap, TimeStamp);
    var ServerKeypair = map.set(NewMap, ServerKeys);
}
