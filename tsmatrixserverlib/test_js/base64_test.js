var expect = require("chai").expect;
var baseEncoding = require("../base64").baseEncoding,
    baseDecoding = require("../base64").baseDecoding;


it("must encode strings to base64", function() {
    var encoded = "this\xffis\xffa\xfftest";
    var result = "dGhpc8O/aXPDv2HDv3Rlc3Q=";
    expect(baseEncoding(encoded)).to.deep.equal(result);
});

it("must decode strings", function() {
    var decoded = "dGhpc8O/aXPDv2HDv3Rlc3Q=";
    var result = "this\xffis\xffa\xfftest";
    expect(baseDecoding(decoded)).to.deep.equal(result);
});