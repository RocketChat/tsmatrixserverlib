import { Transaction} from './transaction';
// import {Fields} from './request';
let https = require('https');
let request = require('request');
import nacl = require('tweetnacl');
import querystring = require('querystring');
import ctx = require('node-context');
import { FederationRequest } from './request';
import {Sign} from './request';
import {HTTPRequest} from './request';
import {NewFederationRequest} from './request';
import {EventBuilder} from './event';
import {SetContent} from './event';

export interface FederationClient {
Client;
serverName;
serverKeyID;
serverPrivateKey;
}
export function doRequest(ctx, r: FederationRequest, resBody) {
let ac: FederationClient;
Sign (ac.serverName, ac.serverKeyID, ac.serverPrivateKey);
let req = HTTPRequest;
return ac.Client.DoRequestAndParseResponse(ctx, req, resBody);
}

let federationPathPrefix = '/_matrix/federation/v1';

export function SendTransaction(Transaction) {
let path = '/_matrix/federation/v1/send/' + (Transaction.TransactionID) + '/';
let req = this.field.NewFederationRequest('PUT', 'destination', path);

return;
}

export function MakeJoin(ServerName, roomID: string, userID: string) {
let path = '/_matrix/federation/v1/make_join/' + encodeURIComponent(roomID) + '/' + encodeURIComponent(userID);
let req = this.field.NewFederationRequest('GET', ServerName, path);
return;
}

export function SendJoin(ServerName, Event) {
let path = '/_matrix/federation/v1/send_join/' + encodeURIComponent(Event.RoomID()) + '/' + encodeURIComponent(Event.EventID());
let req = this.field.NewFederationRequest('PUT', ServerName, path);
return;
}

export function SendInvite(ctx, ServerName, Event, res) {
let ac: FederationClient;
let path = federationPathPrefix + '/invite/' + encodeURIComponent(Event.RoomID()) + '/' + encodeURIComponent(Event.EventID());
let req = NewFederationRequest('PUT', ServerName, path);
SetContent(Event);
doRequest(ctx, req, res);
return;
}

export function ExchangeThirdPartyInvite(ctx, ServerName, builder: EventBuilder) {
let path = federationPathPrefix + '/exchange_third_party_invite/' + encodeURIComponent(builder.RoomID);
let req = NewFederationRequest('PUT', 'ServerName', path);
SetContent(builder);
doRequest(ctx, req, null);
return;
}

export function LookupState(ServerName, roomID, eventID: string) {
let path = '/_matrix/federation/v1/state_ids/' + encodeURIComponent(roomID) + '/?event_id=' + encodeURI(eventID);
let req = this.field.NewFederationRequest('GET', ServerName, path);
return;
}

export function LookupStateIDs(ServerName, roomID, eventID: string) {
let path = '/_matrix/federation/v1/state_ids/' + encodeURIComponent(roomID) + '/?event_id=' + encodeURI(eventID);
let req = this.field.NewFederationRequest('GET', ServerName, path);
return;
}

export function LookupRoomAlias(ServerName, roomAlias: string) {
let path = '/_matrix/federation/v1/query/directory?room_alias=' + encodeURI(roomAlias);
let req = this.field.NewFederationRequest('GET', ServerName, path);
return;
}
