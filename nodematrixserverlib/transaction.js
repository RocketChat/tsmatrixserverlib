//A transaction is basically used to push data
//As an instance lets say (in rocket.chat terms) we push data from one hosted rocket.chat
//instance to another hosted rocket.chat instance.Then transactions are handy.
//(As used by matrix.org) used to push data from one matrix server to another.

 // array is created to store list of PDU

function TransactionID(transactionID){
  this.transactionID = transactionID;
  } 
function Origin(origin){
	this.origin = origin;

}

function Destination(destination){
	this.destination = destination;

}

var previousID = []; // array is created to store the list of previousID's
var PDUs = [];

// A TransactionID identifies a transaction sent by a matrix server to another
// matrix server. The ID must be unique amoungst the transactions sent from the
// origin server to the destination, but doesn't have to be globally unique.
// The ID must be safe to insert into a URL path segment. The ID should have a
// format matching '^[0-9A-Za-z\-_]*$'
