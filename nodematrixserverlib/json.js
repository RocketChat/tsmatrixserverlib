var obj = {"b":"two","a":1}; //this is a json string used by matrix-org for test purposes

// obj.sort(function(a, b) {
//     return a.b.localeCompare(b.a);
// });
// //console.log(a.b.localeCompare(b.a));

JSON.stringify(obj, Object.keys(obj).sort());  // has to be a function called sort SOrtJson

