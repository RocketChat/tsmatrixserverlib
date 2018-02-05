export function EncodetoHex(buf: string) {
let encode = Buffer.from(buf).toString('hex');
return encode;
}

export function DecodeHex(rev: string) {
let decode = Buffer.from(rev, 'hex').toString('utf8');
return decode;
}
