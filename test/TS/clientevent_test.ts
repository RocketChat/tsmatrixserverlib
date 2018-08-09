import {NewEventFromTrustedJSON} from '../../event';
import {ToClientEvent} from '../../clientevent';
import {FormatAll} from '../../clientevent';
import {ClientEvent} from '../../clientevent';
import {EventID} from '../../event';
import {FormatSync} from '../../clientevent';
import {Redacted} from '../../event';
import {JSON} from '../../event';
import {Event} from '../../event';
// mport {verifyEventSignature} from '../../eventcrypto';
import { expect } from 'chai';
import {} from 'mocha';

describe('Testing ClientEvent', () => {
it ('must test the ClientEvent function with trustedJSON', () => {
// let ev = NewEventFromTrustedJSON ({
// 'type': 'm.room.name',
// 'state_key': '',
// 'event_id': '$test:localhost',
// 'room_id': '$test:localhost',
// 'sender': '@test:localhost',
// 'content': {
// 'name': 'Hello World'
// },
// 'origin_server_ts': '123456',
// 'unsigned': {
// 'prev_content': {
// 'name': 'Goodbye world'
// }
// }
// }, false);
// let ce  = ToClientEvent(ev, FormatAll);
// if (ce.EventID !== ev.EventID()) {

// }
// function TesttoClientFormatSync() {
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
let ce = ToClientEvent(ev, FormatSync);
if (ce.RoomID !== '') {
return ce.RoomID;
}
// }
});
});
