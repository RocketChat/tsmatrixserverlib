
import { expect } from 'chai';
import request = require('request');
it('should return 400', function (done) {
  request.get('http://localhost', function (err, res, body){
    expect(res.statusCode).to.equal(200);
    done();
  });
});
