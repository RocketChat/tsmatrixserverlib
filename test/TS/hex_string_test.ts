import {EncodetoHex} from '../../hexstring';
import {DecodeHex} from '../../hexstring';
import { expect } from 'chai';

import {} from 'mocha';

describe('function for ecoding string to hex', () => {
  it('must encode strings to hex in TypeScript', () => {
    let input = 'this\xffis\xffa\xfftest';
    let want = '74686973c3bf6973c3bf61c3bf74657374';
    expect(EncodetoHex(input)).to.equal(want);
});
});

describe('function for decoding hex to utf8-strings', () => {
  it('must decode hex to utf8-strings in TypeScript', () => {
    let input = '74686973c3bf6973c3bf61c3bf74657374';
    let want = 'thisÿisÿaÿtest';
    expect(DecodeHex(input)).to.equal(want);
});
});
