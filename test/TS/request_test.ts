import { expect } from 'chai';
import {assert} from 'chai';
import request = require('request');
import {NewFederationRequest, SetContent} from '../../request';

import {Sign} from '../../request';
import {HTTPRequest} from '../../request';

import {} from 'mocha';

describe('Unit Tests for Request module', () => {
it('NewFederationRequest function should return json object', () => {
    expect(NewFederationRequest("GET", "matrix.org", "/_matrix/federation/v1/send/123")).to.be.a('object');
  });

it("SetContent should check if Content and Signatures are null or not and if null return result", () => {
    
    expect(SetContent({Content: null, Signatures:null})).to.be.a('object');
    assert.throws(SetContent, Error);
});
});