/**
 * 01. A collection is any object that stores multiple elements as a single unit. ES6 introduced
       various new collection objects to provide better ways of storing and organizing data.
   02. An array buffer is a collection of 8-bit blocks in memory. comsume less memory while accessing big data
 */

let buffer = new ArrayBuffer(80); //80 bytes size

let buffer = new ArrayBuffer(80);
let view = new DataView(buffer);
view.setInt32(8,22,false);
var number = view.getInt32(8,false);
console.log(number); //Output "22"

/**
 Here are other functions for storing numbers provided by a DataView object:
• setInt8: Uses 8 bits to store a number. It takes a signed integer (-ve or +ve).
• setUint8: Uses 8 bits to store a number. It takes an unsigned integer (+ve).
• setInt16: Uses 16 bits to store a number. It takes a signed integer.
• setUint16: Uses 16 bits to store a number. It takes an unsigned integer.
• setInt32: Uses 32 bits to store a number. It takes a signed integer.
• setUint32: Uses 32 bits to store a number. It takes an unsigned integer.
• setFloat32: Uses 32 bits to store a number. It takes a signed decimal number.
• setFloat64: Uses 64 bits to store a number. It takes a signed decimal number.
Here are other functions for retrieving stored numbers by a DataView object:
• getInt8: Reads 8 bits. Returns signed integer number.
• getUint8: Reads 8 bits. Returns unsigned integer number.
• getInt16: Reads 16 bits. Returns signed integer number.
• getUint16: Reads 16 bits. Returns unsigned integer number.
• getInt32: Reads 32 bits. Returns signed integer number.
• getUint32: Reads 32 bits. Returns unsigned integer number.
• getFloat32: Reads 32 bits. Returns signed decimal number.
• getFloat64: Reads 64 bits. Returns signed decimal number.
 */

// Typed Array - Static Typing

var buffer = new ArrayBuffer(80);
vartyped_array = new Float64Array(buffer);
typed_array[4] = 11;
console.log(typed_array.length); // 10
console.log(typed_array[4]); // 11

/** more on type array
 Int8Array: Treats as 8-bit signed integers
• Uint8Array: Treats as 8-bit unsigned integers
• Int16Array: Treats as 16-bit signed integers
• Uint16Array: Treats as 16-bit unsigned integers
• Int32Array: Treats as 32-bit signed integers
• Uint32Array: Treats as 32-bit unsigned integers
• Float32Array: Treats as 32-bit signed decimal number
• Float64Array: Treats as 64-bit signed decimal number
 */



