var obj = {
    "b": "two",
    "a": 1
}; //this is a json string used by matrix-org for test purposes

// obj.sort(function(a, b) {
//     return a.b.localeCompare(b.a);
// });
// //console.log(a.b.localeCompare(b.a));
function CanonicalJSON(input, err) {
    for (var i = 0; i < input.length; i++) {
        var sorted = SortJSON(input);
    }
    if (err != null) {
        return null;
    }
    for (var j = 0; j < sorted.length; i++) {
        return CompactJSON(sorted);
    }
}

JSON.stringify(obj, Object.keys(obj).sort()); // has to be a function called sort SortJson

//the basic idea is to reencode json and then arrange them into lexicographical order.
//gophers has a very copmplex way to do it,but JS is somewhat simple :)
// i guess there is nno need to use interfaces in js,as gophers use it to handle loosely handled or non-strictly typed json.