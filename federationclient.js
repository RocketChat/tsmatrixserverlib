"use strict";
exports.__esModule = true;
// import {Fields} from './request';
var https = require('https');
var request = require('request');
var request_1 = require("./request");
var request_2 = require("./request");
var request_3 = require("./request");
var event_1 = require("./event");
function doRequest(ctx, r, resBody) {
    var ac;
    request_1.Sign(ac.serverName, ac.serverKeyID, ac.serverPrivateKey);
    var req = request_2.HTTPRequest;
    return ac.Client.DoRequestAndParseResponse(ctx, req, resBody);
}
exports.doRequest = doRequest;
var federationPathPrefix = '/_matrix/federation/v1';
function SendTransaction(Transaction) {
    var path = '/_matrix/federation/v1/send/' + (Transaction.TransactionID) + '/';
    var req = this.field.NewFederationRequest('PUT', 'localhost:3000', path);
    return;
}
exports.SendTransaction = SendTransaction;
function MakeJoin(ServerName, roomID, userID) {
    var path = '/_matrix/federation/v1/make_join/' + encodeURIComponent(roomID) + '/' + encodeURIComponent(userID);
    var req = this.field.NewFederationRequest('GET', ServerName, path);
    return;
}
exports.MakeJoin = MakeJoin;
function SendJoin(ServerName, Event) {
    var path = '/_matrix/federation/v1/send_join/' + encodeURIComponent(Event.RoomID()) + '/' + encodeURIComponent(Event.EventID());
    var req = this.field.NewFederationRequest('PUT', ServerName, path);
    return;
}
exports.SendJoin = SendJoin;
function SendInvite(ctx, ServerName, Event, res) {
    var ac;
    var path = federationPathPrefix + '/invite/' + encodeURIComponent(Event.RoomID()) + '/' + encodeURIComponent(Event.EventID());
    var req = request_3.NewFederationRequest('PUT', ServerName, path);
    event_1.SetContent(Event);
    doRequest(ctx, req, res);
    return;
}
exports.SendInvite = SendInvite;
function ExchangeThirdPartyInvite(ctx, ServerName, builder) {
    var path = federationPathPrefix + '/exchange_third_party_invite/' + encodeURIComponent(builder.RoomID);
    var req = request_3.NewFederationRequest('PUT', 'ServerName', path);
    event_1.SetContent(builder);
    doRequest(ctx, req, null);
    return;
}
exports.ExchangeThirdPartyInvite = ExchangeThirdPartyInvite;
function LookupState(ServerName, roomID, eventID) {
    var path = '/_matrix/federation/v1/state_ids/' + encodeURIComponent(roomID) + '/?event_id=' + encodeURI(eventID);
    var req = this.field.NewFederationRequest('GET', ServerName, path);
    return;
}
exports.LookupState = LookupState;
function LookupStateIDs(ServerName, roomID, eventID) {
    var path = '/_matrix/federation/v1/state_ids/' + encodeURIComponent(roomID) + '/?event_id=' + encodeURI(eventID);
    var req = this.field.NewFederationRequest('GET', ServerName, path);
    return;
}
exports.LookupStateIDs = LookupStateIDs;
function LookupRoomAlias(ServerName, roomAlias) {
    var path = '/_matrix/federation/v1/query/directory?room_alias=' + encodeURI(roomAlias);
    var req = this.field.NewFederationRequest('GET', ServerName, path);
    return;
}
exports.LookupRoomAlias = LookupRoomAlias;
