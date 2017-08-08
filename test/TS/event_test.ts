import {SplitID} from '../../event';
import { expect } from 'chai';

import {} from 'mocha';

describe('Splitting IDs to local and domain', () => {
  it('must split IDs', () => {
    let address = 'alice:localhost:8080';
    let result = 'alice';
    expect(SplitID(address)).to.deep.equal(result);
  });
  });
