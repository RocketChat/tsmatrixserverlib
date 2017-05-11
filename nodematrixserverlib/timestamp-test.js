var assert = require('chai').assert;
var add = require('../timestamp');

describe('checking the timestamps',function(){
	var result = TimeToMs;
	 this.timeout(30);
	 var result1 = TimeToMs;
	 if (result<result1)
	 {
	 	assert.equal('Pass');
	 }
	 else
	 {
	 	assert.equal('fail');
	 }

});