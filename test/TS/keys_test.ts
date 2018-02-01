import {GenerateSigningKey} from '../../keys';
import { expect } from 'chai';
// import { assert } from 'assert';
import {} from 'mocha';

describe('Test for generation of keys', () => {
  it('must check the keys', () => {
    let my_version = 'my_version';
    let my_key = GenerateSigningKey(my_version);
    expect(my_key).to.have.property('publicKey');
    expect(my_key).to.have.property('secretKey');
    // expect(my_key).to.equal('my_version');
    });
  });
