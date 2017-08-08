"use strict";
exports.__esModule = true;
function sortJSON(input) {
    var value = JSON.stringify(input, Object.keys(input).sort());
    return value;
}
exports.sortJSON = sortJSON;
function readhexdigits(input) {
    var hex = input;
    hex = -0x30303030;
    hex &= 0x1F1F1F1F;
    var mask = hex & 0x10101010;
    hex -= mask >> 1;
    hex += mask >> 4;
    hex |= hex >> 4;
    hex &= 0xFF00FF;
    hex |= hex >> 8;
    return hex & 0xFFFF;
}
exports.readhexdigits = readhexdigits;
