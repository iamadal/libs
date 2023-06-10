/**
 * 01. Last Parameter of a function with spread operator is called rest parameter
 * 02. reat parameter is an array type
 * 03. arguments object is not an array so we need to convert it
 */

function myFunction(a, b)
{
var args = Array.prototype.slice.call(arguments,
myFunction.length);
console.log(args);
}
myFunction(1, 2, 3, 4, 5); //Output "3, 4, 5"


function myFunctions(a, b, ...args)
{
console.log(args); //Output "3, 4, 5"
}
myFunctions(1, 2, 3, 4, 5);