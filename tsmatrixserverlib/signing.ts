let KeyID:string;

export function signJson(jsonObject, signatureName, signingKey) {
    let signatures = delete jsonObject["signatures"];
    let unsigned = delete jsonObject["unsigned"];

    let messageBytes = JSON.stringify(jsonObject);
    let signed = signingKey.sign(messageBytes);
    let signatureBase64 = btoa(signed.signature);

    let keyId =  (signingKey.alg, signingKey.version);

    //signatures.setdefault(signatureName, {})[keyId] = signatureBase64;
    jsonObject["signatures"] = signatures;
    if (unsigned != null) {
        jsonObject["unsigned"] = unsigned;
    }

    return jsonObject;

}

export function ListKeyIDs(signingname:string,message:any[]){
  //let keyID:string[];
  //let Signatures= Map<string, keyID> = new Map<string, keyID>();
}


export function VerifyJson(jsonObject, signatureName, verifyKey) {
    try {
        var signatures = jsonObject["signatures"];
    } catch (Error) {
        throw new Error("No signatures on this object");
    }

    let keyId = (verifyKey.alg, verifyKey.version);

    try {
        //var signatureB64 = signatures[signatureName][keyId];
    } catch (Error) {
        throw new Error("Missing signature");

    }

    try {
         //var signature = btoa(signatureB64);
    } catch (Error) {
        throw new Error("Invalid signature base64");
    }
    var dict;
    var jsonObjectCopy = dict(jsonObject);
    delete jsonObjectCopy["signatures"];
    delete jsonObjectCopy["unsigned"];
    var message = JSON.stringify(JSON.parse(jsonObjectCopy));


}
