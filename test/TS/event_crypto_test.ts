import {verifyEventSignature} from '../../eventcrypto';
import { expect } from 'chai';

import {} from 'mocha';

describe('Splitting IDs to local and domain', () => {
  it('must split IDs', () => {
    let testVerifyOk = function(reason: string, input: string) {
    let entityName: string;
    let keyID;
    let publickey;
    let val = verifyEventSignature(entityName, keyID, publickey, input);
   };

});
});
