import  {asTimeStamp} from '../timestamp';
import {utcTime} from '../timestamp';
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
 import 'mocha';

describe('function for timestamp', () => {
  it('should return millisecond posix time', () => {
    //const result = asTimeStamp();
     expect(asTimeStamp(new Date())).to.be.a("number");
  });
  it('must return UTC string', () =>{
    let timeInMilliseconds = new Date().getTime();
     let utctime = new Date(timeInMilliseconds);
     expect(utcTime(timeInMilliseconds)).to.deep.equal(utctime);
  })
});
