import {SignJson} from '../../signing';
import {VerifySignedJson} from '../../signing';
import {baseEncoding} from '../../base64';
import { expect } from 'chai';
import {assert} from 'chai';

import {} from 'mocha';

describe('testing functions in signing.ts', () => {
  it('testing signedJson and verifysignedjson', () => {

function setUp() {
this.message = {'foo': 'bar', 'unsigned': {}};
this.sigkey = MockSigningKey();
this.assert.equal(this.sigkey.alg, 'mock');
this.signed = SignJson(this.message, 'Alice', this.sigkey, 'random');
this.verkey = MockVerifyKey();

}

function test_sign_verify() {
this.assert('signatures', this.signed);
this.assert('Alice', this.signed['signatures']);
this.assert('mock:test', this.signed['signatures']['Alice']);
this.assert.equal(this.signed['signatures']['Alice']['mock:test'], baseEncoding('bx_______'));
this.assert.equal(this.sigkey.signed_bytes, 'b{foo: bar}');
VerifySignedJson(this.signed, 'Alice', this.verkey);
}


function MockSigningKey() {
let alg = 'mock';
let version = 'test';

function sign(signed_bytes) {
this.signed_bytes = signed_bytes;
return MockSignature;
}
}

function MockSignature(signature) {
this.signature =  'bx_______';
}

function MockVerifyKey() {
let alg = 'mock';
let version = 'test';

function verify(message, sig) {
if (sig !== 'bx_______') {
return 'this is error';
}
}
}
});
});
