parseFloat()
// The parseFloat() function parses an argument (converting it to a string first if needed) and returns a floating point number.

function circumference(r) {
  return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference(4.567));
// expected output: 28.695307297889173

console.log(circumference('4.567abcdefgh'));
// expected output: 28.695307297889173

console.log(circumference('abcdefgh'));
// expected output: NaN



//Syntax
// parseFloat(string)


// Parameters
// string
// The value to parse. If this argument is not a string, then it is converted to one using the ToString abstract operation. Leading whitespace in this argument is ignored.
// Return value
// A floating point number parsed from the given string.

// Or NaN when the first non-whitespace character cannot be converted to a number.

// Description
// parseFloat is a function property of the global object.

// If parseFloat encounters a character other than a plus sign (+), minus sign (- U+002D HYPHEN-MINUS), numeral (0–9), decimal point (.), or exponent (e or E), it returns the value up to that character, ignoring the invalid character and characters following it.
// A second decimal point also stops parsing (characters up to that point will still be parsed).
// Leading and trailing spaces in the argument are ignored.
// If the argument’s first character can’t be converted to a number (it’s not any of the above characters), parseFloat returns NaN.
// parseFloat can also parse and return Infinity.
// parseFloat converts BigInt syntax to Numbers, losing precision. This happens because the trailing n character is discarded.
// Consider Number(value) for stricter parsing, which converts to NaN for arguments with invalid characters anywhere.

// parseFloat will parse non-string objects if they have a toString or valueOf method. The returned value is the same as if parseFloat had been called on the result of those methods.


// Examples
// parseFloat returning a number
// The following examples all return 3.14:
parseFloat(3.14);
parseFloat('3.14');
parseFloat('  3.14  ');
parseFloat('314e-2');
parseFloat('0.0314E+2');
parseFloat('3.14some non-digit characters');
parseFloat({ toString: function() { return "3.14" } });


// parseFloat returning NaN

// parseFloat and BigInt
// The following examples both return 900719925474099300, losing precision as the integer is too large to be represented as a float:


parseFloat(900719925474099267n);
parseFloat('900719925474099267n');








// high-low pair ok
console.log(encodeURI('\uD800\uDFFF'));

// lone high surrogate throws "URIError: malformed URI sequence"
console.log(encodeURI('\uD800'));

// lone low surrogate throws "URIError: malformed URI sequence"
console.log(encodeURI('\uDFFF'));