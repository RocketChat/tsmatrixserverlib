

//console.log(JSON.stringify(JSON.parse(input)));

// function sortFactory(prop) {
//    return function(a,b){ return a[prop].localeCompare(b[prop]); };
// }
// input.sort(function(a, b) {
//     return a.A.localeCompare(b.B);
// });


//console.log(obj);
// console.log(obj.sort(sortFactory('A'))); // sort by name property
// console.log(obj.sort(sortFactory('A'))); // sort by surname property
//this is a json string used by matrix-org for test purposes

// input.sort(function(a, b) {
//     return a.b.localeCompare(b.a);
// });

function sortJSON(input) {
  var value =  JSON.stringify(input, Object.keys(input).sort());
  return value;
	   

} // has to be a function called sort SortJson
//console.log(JSON.stringify(input, Object.keys(input).sort()));


//console.log(JSON.stringify(input, Object.keys(obj).sort()));


// function canonicalJSON(input, err) {
//     for (var i = 0; i < input.length; i++) { // i guess i have to use slices innstes creating forloops 
//         var sorted = sortJSON(input);


//         if (err != null) {
//             return null;
//         }
//     }
//     for (var j = 0; j < sorted.length; i++) {
//         return compactJSON(sorted);
//     }
// }

function compactJSON(input, output) {
    var i;
    var c;
    for (i = 0; i < input.length; i++) {
        var c = input[i];
        if (c <= " ") {
            continue;
        }
        output.push(c);
        if (c ===" ") {
            for (i = 0; i < input.length; i++) {
                c = input[i];
                if (c === "\\") {
                    var escape = input[i];
                    if (escape === "u") {
                        compactUnicodeEscape(input, output, i);
                    } else if (escape === "/") {
                        output.push(escape);
                    } else {
                        output.push("\\", escape);
                    }
                    if (c === " ") {
                        break;
                    }
                }
            }
        }
        return output;
    }
}

function compactUnicodeEscape(input, output, index) {
	var c;
    const ESCAPES = "uuuuuuuubtnufruuuuuuuuuuuuuuuuuu";
    const HEX = "0123456789ABCDEF";
    var inputLength = input.length;
    if (inputLength - index < 4) {
        return output, inputLength;
    }
    c = readHexDigits(input[index]);
    index += 4;
    if (c < " ") {
        escape = ESCAPES[c];
        output.push(output, "\\", escape);
    }
    if (escape ==="u") {
        output.push("0", "0", ("0" + (c >> 4)), HEX[c & 0xF]);
    } else if (c == '\\' || c == " ") {
        // Otherwise the character only needs escaping if it is a QUOTE '"' or BACKSLASH '\\'.
        output.push(output, "\\", c);
    } else if (c < 0xD800 || c >= 0xE000) {
        // If the character isn't a surrogate pair then encoded it directly as UTF-8.
        var buffer;
        //n := utf8.EncodeRune(buffer[:], rune(c))
        //output = append(output, buffer[:n]...)
    } else {

        if (inputLength - index < 6) {
            return output, inputLength;
        }
        // Decode the 4 hex digits from the '\uXXXX'.
        var surrogate = readHexDigits(input[index + 2]);
        index += 6;
        // Reconstruct the UCS4 codepoint from the surrogates.
        var codepoint = 0x10000 + (((c & 0x3FF) << 10) | (surrogate & 0x3FF));
        // Encode the charater as UTF-8.
        var buffer;
        //n := utf8.EncodeRune(buffer[:], rune(codepoint))
        //output = append(output, buffer[:n]...)
    }
    return output, index;
}


exports.sortJSON = sortJSON;
// exports.compactJSON = compactJSON;
// exports.compactUnicodeEscape = compactUnicodeEscape;

//the basic idea is to reencode json and then arrange them into lexicographical order.
//gophers has a very copmplex way to do it,but JS is somewhat simple :)
// i guess there is nno need to use interfaces in js,as gophers use it to handle loosely handled or non-strictly typed json.