/* TextDecoder The TextDecoder interface represents a decoder for a specific
text encoding, such as UTF-8, ISO-8859-2, KOI8-R, GBK, etc. A decoder takes a
stream of bytes as input and emits a stream of code points.

Note: This feature is available in Web Workers */



// Examples Representing text with typed arrays This example shows how to decode
// a Chinese/Japanese character, as represented by five different typed arrays:
// Uint8Array, Int8Array, Uint16Array, Int16Array, and Int32Array.

// https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder


// Constructor: TextDecoder();

let utf8decoder = new TextDecoder(); // default 'utf-8' or 'utf8'

let u8arr = new Uint8Array([240, 160, 174, 183]);
let i8arr = new Int8Array([-16, -96, -82, -73]);
let u16arr = new Uint16Array([41200, 47022]);
let i16arr = new Int16Array([-24336, -18514]);
let i32arr = new Int32Array([-1213292304]);

console.log(utf8decoder.decode(u8arr));
console.log(utf8decoder.decode(i8arr));
console.log(utf8decoder.decode(u16arr));
console.log(utf8decoder.decode(i16arr));
console.log(utf8decoder.decode(i32arr));


/* Handling non-UTF8 text In this example, we decode the Russian text "Привет,
мир!", which means "Hello, world." In our TextDecoder() constructor, we
specify the Windows-1251 character encoding, which is appropriate for Cyrillic
script.
 */


let win1251decoder = new TextDecoder('windows-1251');
let bytes = new Uint8Array([207, 240, 232, 226, 229, 242, 44, 32, 236, 232, 240, 33]);
console.log(win1251decoder.decode(bytes)); // Привет, мир!



// Properties

TextDecoder.prototype.encoding //Read  only Is a DOMString containing the name of the decoder, that is a string describing the method the TextDecoder will use.
TextDecoder.prototype.fatal // Read only Is a Boolean indicating whether the error mode is fatal.
TextDecoder.prototype.ignoreBOM // Read only Is a Boolean indicating whether the byte order marker is ignored.


// Method  - The TextDecoder interface doesn't inherit any method.

TextDecoder.prototype.decode() //Returns a DOMString containing the text decoded with the method of the specific TextDecoder object.

