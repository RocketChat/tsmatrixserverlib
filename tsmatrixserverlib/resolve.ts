import dns = require("dns");
interface HostResult {
  CName: string;
  //Addrs: []string;

}

interface DNSResult{
  SRVCName: string;
  SRVRecords: string;
  Host: HostResult;
  //Addrs: []string;
}
let serverName;
function LookupServer(serverName:DNSResult){
  let result;
  //result.Hosts = HostResult{};
  let hosts = serverName.SRVRecords;
  //if (serverName:string == -1){
    result.SRVCName  = dns.lookup("rocket.chat","tcp",serverName);
    result.SRVRecords = dns.lookup("rocket.chat","tcp",serverName);
//  }
  let err;
  if (err!=null){
    dns.TIMEOUT();
  }
}
