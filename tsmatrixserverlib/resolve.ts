import dns = require("dns");
interface HostResult {
  CName: string;
  //ftAddrs:

}

interface DNSResult{
  SRVCName: string;
  SRVRecords: string;
  Host: HostResult;
  //Addrs: []string;
}
let serverName:string;

function LookupServer(serverName:DNSResult){
  let result;
  let str1:any;
  let val:any = str1.indexOf(serverName);
  //result.Hosts = HostResult{};

  let hosts = serverName.SRVRecords;

  if(val === -1)
  {
    result.SRVCName  = dns.lookup("rocket.chat","tcp",serverName);
    result.SRVRecords = dns.lookup("rocket.chat","tcp",serverName);
  }
  let err;
  if (err!=null){
    dns.TIMEOUT();
  }

}
