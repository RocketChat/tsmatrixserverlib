
import { expect } from 'chai';
import request = require('request');
it('should return 200', function (done) {
  request.get('http://localhost:3000', function (err, res, body){
    expect(res.statusCode).to.equal(200);
    done();
  });
});
