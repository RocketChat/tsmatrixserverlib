import { Transaction as NewTransaction } from './transaction';
import {NewFederationRequest} from './request';
let https = require('https');
let request = require('request');

export namespace NewTransact {
export const Transaction = NewTransaction;
}

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
let bodyString = JSON.stringify ({
'message': 'hello'
});
let options = {
    host: 'localhost',
    port: 8448,
    uri: '/_matrix/federation/v1/send_join/room/!rlukPqHNcfqfWVHndH',
    method: 'GET',
    headers: {
'Authorization': 'X-Matrix madguy02:my.domain.name',
'sig': 'ABCDEF...',
'key': 'ed25519:key1',
'Content-Type': 'application/json',
'Content-Length': bodyString.length
    }
};

console.log('Start');
let x = https.request(options, function(res){
    console.log('Connected');
    res.on('data', function(data){
        console.log(data);
        console.log(String.fromCharCode.apply(null, new Uint16Array(data)));
    });
}).write(bodyString);

function SendTransaction(Transaction) {
let path = '/_matrix/federation/v1/send/' + (Transaction.TransactionID) + '/';
let req = NewFederationRequest('PUT', 'destination', path);
return;
}

function MakeJoin(ServerName, roomID: string, userID: string) {
let path = '/_matrix/federation/v1/make_join/' + encodeURIComponent(roomID) + '/' + encodeURIComponent(userID);
let req = NewFederationRequest('GET', ServerName, path);
return;
}

function SendJoin(ServerName, Event) {
let path = '/_matrix/federation/v1/send_join/' + encodeURIComponent(Event.RoomID()) + '/' + encodeURIComponent(Event.EventID());
let req = NewFederationRequest('PUT', ServerName, path);
return;
}

function LookupState(ServerName, roomID, eventID: string) {
let path = '/_matrix/federation/v1/state_ids/' + encodeURIComponent(roomID) + '/?event_id=' + encodeURI(eventID);
let req = NewFederationRequest('GET', ServerName, path);
return;
}

function LookupStateIDs(ServerName, roomID, eventID: string) {
let path = '/_matrix/federation/v1/state_ids/' + encodeURIComponent(roomID) + '/?event_id=' + encodeURI(eventID);
let req = NewFederationRequest('GET', ServerName, path);
return;
}
