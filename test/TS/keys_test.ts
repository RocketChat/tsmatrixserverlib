import {GenerateSigningKey, EncodeSigningKeyBase64, DecodeSigningKeyBase64, GetVerifyKey} from '../../keys';
import { expect } from 'chai';
import {} from 'mocha';

describe('Test for generation of keys', () => {
  it('must check the keys', () => {
    let my_version = 'my_version';
    let my_key = GenerateSigningKey(my_version);
    expect(my_key).to.have.property('publicKey');
    expect(my_key).to.have.property('secretKey');
    });
  });

describe('Encode and verify signing keys', () => {
    it('encode to base 64 and verify it', () => {
      let my_version = 'my_version';
      let key = GenerateSigningKey(my_version);
      let key_base64 = EncodeSigningKeyBase64(key);
      let decode_key = DecodeSigningKeyBase64(key_base64);
      let get_verify_key = GetVerifyKey(key);
      expect(decode_key).to.have.property('publicKey');
      expect(decode_key).to.have.property('secretKey');
      });
    });
