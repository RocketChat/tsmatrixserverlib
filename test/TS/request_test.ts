import { expect } from 'chai';
import request = require('request');
import {NewFederationRequest} from '../../request';
import {Sign} from '../../request';
import {HTTPRequest} from '../../request';

import {} from 'mocha';
describe('Unit Tests for Request module', () => {
it('NeFederationRequest function should return json object', () => {
    expect(NewFederationRequest("GET", "matrix.org", "/_matrix/federation/v1/send/123")).to.be.a('object');
  });

});