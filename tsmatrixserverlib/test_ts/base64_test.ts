import {baseEncoding} from '../base64';
import {baseDecoding} from '../base64';
import { expect } from 'chai';

import {} from 'mocha';

describe('function for encoding and decoding base64string', () => {
  it("must encode strings to base64", () => {
    let encoded = "this\xffis\xffa\xfftest";
    let result = "dGhpc8O/aXPDv2HDv3Rlc3Q=";
    expect(baseEncoding(encoded)).to.deep.equal(result);
  });

  it("must decode strings", () => {
    let decoded = "dGhpc8O/aXPDv2HDv3Rlc3Q=";
    let result = "this\xffis\xffa\xfftest";
    expect(baseDecoding(decoded)).to.deep.equal(result);
  });
});
