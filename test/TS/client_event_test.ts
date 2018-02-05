import {ToClientEvent} from '../../clientevent';
import { expect } from 'chai';

import {} from 'mocha';

describe('Testing Client Events', () => {
  it('must test Client Events', () => {
  let ev = {
'type': 'm.room.name',
'state_key': '',
'event_id': '$test:localhost',
'room_id': '!test:localhost',
'sender': '@test:localhost',
'content': {
'name': 'Hello World'
},
'origin_server_ts': 123456,
'unsigned': {
'prev_content': {
'name': 'Goodbye World'
}
}
};
  let ce = ToClientEvent(ev, FormatAll);
  if (ce.EventID !== ev.EventID()) {
return 'ClientEvent.EventID: wanted %s, got %s';
}
    });
  });
