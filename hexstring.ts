export function EncodetoHex(buf: string) {
let encode = Buffer.from(buf).toString('hex');
return encode;
}
// console.log(Buffer.from('74686973c3bf6973c3bf61c3bf74657374', 'hex').toString());
export function DecodeHex(rev: string) {
let decode = Buffer.from(rev, 'hex').toString('utf8');
return decode;
}


// console.log(Buffer.from('this\xffis\xffa\xfftest', 'utf8').toString('hex'));
