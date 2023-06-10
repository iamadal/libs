/**
 * 01. ... is called spread Operator we will learn about the application of spread operation and the use of it.
 * 02. An iterable Object holds iterable values - Like array
 * 03. Main application is to spread the value of an iterable object
 * 04. a = [1,2,3]
 *     b = [1,2,3,4,5]
 *     b = [...a,4,5]
 */

 // Passing entire array to a fuction

 function mod(a,b){
     return a+b;
 }

 let data = [1,3];
 let res  = mod.apply(null,data)  // Passing Object to a function using apply()
 // Note all functions are the instance of Function Object
 console.log(res); // 4

 let res2 = mod(...data); // do the same thing - Spread operator does not call apply() function

 console.log(res2) // result = same
 
let array1 = [2,3,4];
let array2 = [1, ...array1, 5, 6, 7];
console.log(array2); //Output "1, 2, 3, 4, 5, 6, 7"


// pushing the value of two array
// Old method
var array1 = [2,3,4];
var array2 = [1];
Array.prototype.push.apply(array2, array1);
console.log(array2); //Output "1, 2, 3, 4"

// New method
let array1 = [2,3,4];
let array2 = [1];
array2.push(...array1);
console.log(array2); //Output "1, 2, 3, 4"
//push method add the value of the variable at the end  of array
