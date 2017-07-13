import {sortJSON} from "../../json";
//import {readhexdigits} from "../../json";
import { expect } from 'chai';

import {} from 'mocha';

describe('function to sort json', () => {
  it("must sort json strings", () => {
    expect({"b":"two","a":1}).to.deep.equal({"a":1,"b":"two"});
    expect([true,false,null]).to.deep.equal([true,false,null]);
    expect([9007199254740991]).to.deep.equal([9007199254740991]);

  });

});
