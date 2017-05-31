var obj = {"b":"two","a":1}; //this is a json string used by matrix-org for test purposes

// obj.sort(function(a, b) {
//     return a.b.localeCompare(b.a);
// });
// //console.log(a.b.localeCompare(b.a));

JSON.stringify(obj, Object.keys(obj).sort());  // has to be a function called sort SOrtJson

//the basic idea is to reencode json and then arrange them into lexicographical order.
//gophers has a very copmplex way to do it,but JS is somewhat simple :)
// i guess there is nno need to use interfaces in js,as gophers use it to handle loosely handled or non-strictly typed json.