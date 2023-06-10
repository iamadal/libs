/**
 * 01. 
 */

 // Binary numbers
let a = 0b00001111;
let b = 15;
console.log(a === b);
console.log(a);

// Octal Notation
var a = 017;
var b = 15;
console.log(a === b);
console.log(a);

// New- ES6 Syntax to remove confusion on octal numbers
let a = 0o17;
let b = 15;
console.log(a === b); // true
console.log(a);  // out: 15

// New Method
let a = 17.0;
let b = 1.2;
console.log(Number.isInteger(a)); // true  - 17.0 can be casted into 17
console.log(Number.isInteger(b)); // false

// New NaN function

let a = "NaN";
let b = NaN;
let c = "hello";
let d = 12;
console.log(Number.isNaN(a));
console.log(Number.isNaN(b));
console.log(Number.isNaN(c));
console.log(Number.isNaN(d));
console.log(isNaN(a));
console.log(isNaN(b));
console.log(isNaN(c));
console.log(isNaN(d));

/**
false
true
false
false
true
true
true
false
 */


console.log(isFinite(10));
console.log(isFinite(NaN));
console.log(isFinite(null));
console.log(isFinite([]));
console.log(Number.isFinite(10));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(null));
console.log(Number.isFinite([]));

/**
 * true
false
true
true
true
false
false
false
 */

console.log(Number.isSafeInteger(156));
console.log(Number.isSafeInteger('1212'));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1));

/**
 
true
false
true
false
true
false

 */

console.log(0.1 + 0.2 == 0.3);
console.log(0.9 - 0.8 == 0.1);
console.log(0.1 + 0.2);
console.log(0.9 - 0.8);

/**
 * false
false
0.30000000000000004
0.09999999999999998
 */

 // New ES6 Syntax to control this situation
 functionepsilonEqual(a, b)
{
return Math.abs(a - b) <Number.EPSILON;
}
console.log(epsilonEqual(0.1 + 0.2, 0.3)); // true
console.log(epsilonEqual(0.9 - 0.8, 0.1)); // true 

// New Math Function added in ES6 Tryit

console.log(Math.log2(16)); //log base 2
console.log(Math.log10(1000)); //log base 10
console.log(Math.log1p(0)); //same as log(1 + value)
console.log(Math.expm1(0)); //inverse of Math.log1p()
console.log(Math.cbrt(8)); //cube root of a value

// Multiplication

console.log(Math.imul(590, 5000000)); //32-bit integer
multiplication
console.log(590 * 5000000); //64-bit floating-point multiplication

// Leading Zeros bit finding - based on 32-bit count
// Manul method: convert the number into binary then checkout
console.log(Math.clz32(7)); // 22 - Binary of 7 = 111 so 0000000000000000000 111 
console.log(Math.clz32(1000)); // 29 
console.log(Math.clz32(295000000)); // 3

// Sign
console.log(Math.sign(11));
console.log(Math.sign(-11));
console.log(Math.sign(0));
// truncate digit after decimal part
console.log(Math.trunc(11.17));
console.log(Math.trunc(-1.112));

// Rounding to a 32- bit floating point number
console.log(Math.fround(0));
console.log(Math.fround(1));
console.log(Math.fround(1.137));
console.log(Math.fround(1.5));

// 