
import { asTimeStamp } from './timestamp';
import {baseEncoding} from './base64';
import {baseDecoding} from './base64';
import {signJson} from './signing';
import {ToClientEvent} from './clientevent';
let myValidator = asTimeStamp('2009 02 13 23:31:30');
let myValidator1 = baseEncoding('this\xffis\xffa\xfftest');
let myValidator2 = baseDecoding('dGhpc8O/aXPDv2HDv3Rlc3Q=');
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
