// isFinite() The global isFinite() function determines whether the passed value
// is a finite number. If  needed, the parameter is first converted to a number.


function div(x) {
  if (isFinite(1000 / x)) {
    return 'Number is NOT Infinity.';
  }
  return 'Number is Infinity!';
}

console.log(div(0));
// expected output: "Number is Infinity!""

console.log(div(1));
// expected output: "Number is NOT Infinity."



// Syntax isFinite(testValue)


// Parameters testValue The value to be tested for finiteness. Return value false
// if the argument is (or will be coerced to) positive or negative Infinity or
// NaN or undefined; otherwise, true.



/* Description isFinite is a function property of the global object.

You can use this function to determine whether a number is a finite number.
The isFinite function examines the number in its argument. If the argument is
NaN, positive infinity, or negative infinity, this method returns false;
otherwise, it returns true.
 */


// //

// Examples
// Using isFinite

// //



isFinite(Infinity);  // false
isFinite(NaN);       // false
isFinite(-Infinity); // false

isFinite(0);         // true
isFinite(2e64);      // true
isFinite(910);       // true

isFinite(null);      // true, would've been false with the
                     // more robust Number.isFinite(null)

isFinite('0');       // true, would've been false with the
                     // more robust Number.isFinite("0")
