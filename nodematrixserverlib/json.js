var input = {
    "b": "two",
    "a": 1
}; //this is a json string used by matrix-org for test purposes

// obj.sort(function(a, b) {
//     return a.b.localeCompare(b.a);
// });
// //console.log(a.b.localeCompare(b.a));
function sortJSON() {
    JSON.stringify(input, Object.keys(input).sort());

} // has to be a function called sort SortJson

function CanonicalJSON(input, err) {
    for (var i = 0; i < input.length; i++) { // i guess i have to use slices innstes creating forloops 
        var sorted = sortJSON(input);


        if (err != null) {
            return null;
        }
    }
    for (var j = 0; j < sorted.length; i++) {
        return CompactJSON(sorted);
    }
}



//the basic idea is to reencode json and then arrange them into lexicographical order.
//gophers has a very copmplex way to do it,but JS is somewhat simple :)
// i guess there is nno need to use interfaces in js,as gophers use it to handle loosely handled or non-strictly typed json.