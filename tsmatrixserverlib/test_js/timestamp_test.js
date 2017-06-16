var expect = require("chai").expect;
var asTimeStamp = require("../timestamp").asTimeStamp,
        utcTime         = require("../timestamp").utcTime;

describe("tests", function () {
    it("must return timestamp ie., milliseconds in JavaScript", function () {
        expect(asTimeStamp(new Date())).to.be.a("number");
    });

    it("must return UTC string in JavaScript", function () {
        var timeInMilliseconds = new Date().getTime();
        var utctime = new Date(timeInMilliseconds);
        expect(utcTime(timeInMilliseconds)).to.deep.equal(utctime);
    });
});
