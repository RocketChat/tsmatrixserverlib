import {GenerateSigningKey, EncodeSigningKeyBase64, DecodeSigningKeyBase64, GetVerifyKey, IsSigningSupportedAlgorithm, EncodeVerifyKeyBase64, DecodeVerifyKeyBytes, ReadSigningKeys} from '../../keys';
import { expect } from 'chai';
import {} from 'mocha';
import { version } from 'punycode';

describe('Test for generation of keys', () => {
  it('must check the keys', () => {
    let my_version = 'my_version';
    let my_key = GenerateSigningKey(my_version);
    expect(my_key.alg).to.deep.equal("ed25519");
    expect(my_key.version).to.equal(my_version);
    });
  });

  describe('Decode Test Case', () => {
    it('must encode verify key', () => {
      let my_version = "my_version";
      let key = GenerateSigningKey(my_version);
      let keyBase64 = EncodeSigningKeyBase64(key);
      // let verifyKey  = GetVerifyKey(key);
      // let verifyKeyBase64 = EncodeVerifyKeyBase64(verifyKey);
      let decodedKey = DecodeSigningKeyBase64("ed25519", version, keyBase64);
      expect(decodedKey.alg).to.deep.equal("ed25519");
      expect(decodedKey.version).to.deep.equal("2.0.0");
    });
  });


// describe('Encode and verify signing keys', () => {
//     it('encode to base 64 and verify it', () => {
//       let my_version = 'my_version';
//       let key = GenerateSigningKey(my_version);
//       let key_base64 = EncodeSigningKeyBase64(key);
//       let decode_key = DecodeSigningKeyBase64(key_base64);
//       let get_verify_key = GetVerifyKey(key);
//       expect(decode_key).to.have.property('publicKey');
//       expect(decode_key).to.have.property('secretKey');
//       });
//     });

describe('Return true or false based on the function', () => {
  it ('must return true here', () => {
  expect(IsSigningSupportedAlgorithm('ed25519:an_id')).to.be.true;
  });
});
