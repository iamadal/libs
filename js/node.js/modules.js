// index.js

// Define the functions you want to export
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Export the functions as part of an object
module.exports = {
    add,
    subtract
};




// test.js

// Import your library
const myLibrary = require('./index');

// Use the functions
console.log(myLibrary.add(5, 3));        // Output: 8
console.log(myLibrary.subtract(5, 3));   // Output: 2






// index.js using es module
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}


// test.js
import { add, subtract } from './index.js';

console.log(add(5, 3));         // Output: 8
console.log(subtract(5, 3));    // Output: 2







