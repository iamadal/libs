/**
 * 01. New Operation on String
 */

var \u0061 = "\u0061\u0062\u0063";
console.log(a); //Output is "abc"

console.log("\uD83D\uDE91"); //Escapinng in ES5

console.log("\u{1F691}"); // Escaping in ES6


// CodePoint - getting code point at given index 
console.log("\uD83D\uDE91".codePointAt(1));
console.log("\u{1F691}".codePointAt(1));
console.log("hello".codePointAt(2));

/* output
56977
56977
1080
*/

// String from code point
console.log(String.fromCodePoint(0x61, 0x62, 0x63));  // abc
console.log("\u0061\u0062 " == String.fromCodePoint(0x61, 0x62)); //true

// Repeat
console.log("a".repeat(6)); //Output "aaaaaa"

// include
var str = "Hi, I am a JS Developer";
console.log(str.includes("JS")); //Output "true"

// Include checking with postion
var str = "Hi, I am a JS Developer";
console.log(str.includes("JS", 13)); // Output "false"

// startWith
var str = "Hi, I am a JS Developer";
console.log(str.startsWith('Hi, I am')); //Output "true"
// startWith position
var str = "Hi, I am a JS Developer";
console.log(str.startsWith('JS Developer', 11)); //Output "true"
// Normalization
var str = "Hi, I am a JS Developer";
console.log(str.endsWith("JS Developer")); //Output "true"
console.log(str.endsWith("JS", 13)); //Output "true"
// Unicode character is stored in 16-bit
console.log("\u00E9"); //output 'é'
console.log("e\u0301"); //output 'é'

/**
  Normalization is simply the process of searching and standardizing code points
without changing the meaning of the string.
There are also different forms of normalization: NFC, NFD, NFKC and NFKD.
Let's understand Unicode string normalization by an example use case:
 */

var a = "\u00E9".normalize();  // convert serrogate pair to 32-bit representation
var b = "e\u0301".normalize(); // See unicode string normalization

// Template String - string is generated dynamically 

let a = 20;
let b = 10;
let c = "JavaScript";
letstr = `My age is ${a+b} and I love ${c}`;   
console.log(str);

// Multiline
console.log("1\n2\n3");

// multiline with Template

console.log(`1
2
3`);

// Raw String -- Escape characters are not interpreted

let s = String.raw `xy\n${ 1 + 1 }z`;
console.log(s);

