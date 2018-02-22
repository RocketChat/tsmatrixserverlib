import {SplitID} from '../../event';
import { expect } from 'chai';

import {} from 'mocha';
import {sortConflictedEventByDepthAndSHA1} from '../../stateresolution';

describe('State Resolution test', () => {
it('tests for state resolution', () => {
const sha1OfEventID1A = '\xe5\x89,\xa2\x1cF<&\xf3\rf}\xde\xa5\xef;\xddK\xaaS';
const sha1OfEventID2A = '\xa4\xe4\x10\x1b}\x1a\xf9`\x94\x10\xa3\x84+\xae\x06\x8d\x16A\xfc>';
const sha1OfEventID3B = '\xca\xe8\xde\xb6\xa3\xb6\xee\x01\xc4\xbc\xd0/\x1b\x1c2\x0c\xd3\xa4\xe9\xcb';

let input = [{'fields': {'Depth': 1, 'EventID': '@1:a'}}, {'fields': {'Depth': 1, 'EventID': '@2:a'}}, {'fields': {'Depth': 1, 'EventID': '@3:b'}}];
let got =  sortConflictedEventByDepthAndSHA1(input);
// let want = [{'depth': 1, 'event': input[0]}, {'depth': 2, 'event': input[2]}, {'depth': 2, 'event': input[2]}];

// expect(want.length).to.equal(got.length);

});
});
