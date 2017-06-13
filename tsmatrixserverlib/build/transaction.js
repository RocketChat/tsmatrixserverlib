"use strict";
exports.__esModule = true;
// A Transaction is used to push data from one matrix server to another matrix
// server.
var Transaction = (function () {
    // The IDs of the most recent transactions sent by the origin server to
    // the destination server. Multiple transactions can be sent by the origin
    // server to the destination server in parallel so there may be more than
    // one previous transaction.
    function Transaction(TransactionID, ServerName, Timestamp, PreviousIds, PDUs) {
        this.TransactionID = TransactionID;
        this.ServerName = ServerName;
        this.Timestamp = Timestamp;
    }
    return Transaction;
}());
exports.Transaction = Transaction;
// A TransactionID identifies a transaction sent by a matrix server to another
// matrix server. The ID must be unique amongst the transactions sent from the
// origin server to the destination, but doesn't have to be globally unique.
// The ID must be safe to insert into a URL path segment. The ID should have a
// format matching '^[0-9A-Za-z\-_]*$'
var transactions = new Transaction("transaction_id", "origin", "destination", "previous_ids", "pdus");
