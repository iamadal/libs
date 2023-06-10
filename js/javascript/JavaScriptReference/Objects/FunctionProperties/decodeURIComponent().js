// decodeURIComponent()
// The decodeURIComponent() function decodes a Uniform Resource Identifier (URI) component previously created by encodeURIComponent or by a similar routine.


function containsEncodedComponents(x) {
  // ie ?,=,&,/ etc
  return (decodeURI(x) !== decodeURIComponent(x));
}

console.log(containsEncodedComponents('%3Fx%3Dtest')); // ?x=test
// expected output: true

console.log(containsEncodedComponents('%D1%88%D0%B5%D0%BB%D0%BB%D1%8B')); // шеллы
// expected output: false


// Syntax
// decodeURIComponent(encodedURI)



// Parameters
// encodedURI
// An encoded component of a Uniform Resource Identifier.
// Return value
// A new string representing the decoded version of the given encoded Uniform Resource Identifier (URI) component.

// Exceptions
// Throws an URIError ("malformed URI sequence") exception when used wrongly.

// Description
// Replaces each escape sequence in the encoded URI component with the character that it represents.

// Examples
// Decoding a Cyrillic URL component


decodeURIComponent('JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B');
// "JavaScript_шеллы"


//Catching errors



try {
  var a = decodeURIComponent('%E0%A4%A');
} catch(e) {
  console.error(e);
}

// URIError: malformed URI sequence



// Decoding query parameters from a URL decodeURIComponent cannot be used
// directly to parse query parameters from a URL. It needs a bit of preparation.


function decodeQueryParam(p) {
  return decodeURIComponent(p.replace(/\+/g, ' '));
}

decodeQueryParam('search+query%20%28correct%29');
// 'search query (correct)'
