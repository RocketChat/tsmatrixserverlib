interface createContent{
  senderDomain:string;
  RoomID:string;
  eventID:string;
  Federate:"m.federate";
  Creator:"creator";
  }

  function newCreateContentFromAuthEvents(authEvents){
  var createEvent;
  if (createEvent == authEvents.Create()){
      return;
  }
  if (createEvent == null){
    throw new TypeError("missing create event");
    return;
  }
  //one more if
roomID = createEvent.RoomID();
eventID = createEvent.EventID();
//domainFromID call

}
