// decodeURI() The decodeURI() function decodes a Uniform Resource Identifier
// (URI) previously created by encodeURI() or by a similar routine.

const uri = 'https://mozilla.org/?x=шеллы';
const encoded = encodeURI(uri);
console.log(encoded);
// expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

try {
  console.log(decodeURI(encoded));
  // expected output: "https://mozilla.org/?x=шеллы"
} catch (e) { // catches a malformed URI
  console.error(e);
}




// Syntax decodeURI(encodedURI)


// Parameters encodedURI A complete, encoded Uniform Resource Identifier.
// Return value A new string representing the unencoded version of the given
// encoded Uniform Resource Identifier (URI).

// Exceptions Throws an URIError ("malformed URI sequence") exception when
// encodedURI contains invalid character sequences.

// Description Replaces each escape sequence in the encoded URI with the
// character that it represents, but does not decode escape sequences that
// could not have been introduced by encodeURI. The character “#” is not
// decoded from escape sequences.




// Examples
// Decoding a Cyrillic URL

decodeURI('https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B');
// "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"


// Catching errors

try {
  var a = decodeURI('%E0%A4%A');
} catch(e) {
  console.error(e);
}

// URIError: malformed URI sequence

