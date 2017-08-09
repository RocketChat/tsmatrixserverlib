import dns = require('dns');
interface HostResult {
  CName: string;
  Addrs: string;

}

interface DNSResult {
  SRVCName: string;
  SRVRecords: string;
  Host: HostResult;
  Addrs: string;
}
let serverName: string;

export function LookupServer(serverName: DNSResult) {
  let result;
  let str1;
  let val = str1.indexOf(serverName);

  let hosts = serverName.SRVRecords;

  if (val === -1) {
result.SRVCName  = dns.lookup('matrix','tcp', serverName);
result.SRVRecords = dns.lookup('matrix', 'tcp', serverName);
  }
  let err;
  if (err != null) {

  }

}
