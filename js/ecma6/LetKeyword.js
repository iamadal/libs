/**
 * 01. Let,var,const are used to declare varible. but they have very different scope limit
 * 02. Variables declared with let keyword is limited inside a fix scope. not accessible
 *     inner scope.
 *     {
 *       let m = 0; // accessible
 *        {
 *            // Not accessible here
 *         }
 *     }
 * 03. Do not declare more than one variable by same name in same scope. that will cause typeerror
 * 04. It is recommended to use let keyword to avoid memory leaks
 * 05. let and const maintain same scoping rules.
 * 06. When we assign an object to a variable, the reference of the object is what the
       variable holds and not the object itself. So, when assigning an object to a constant
       variable, the reference of the object becomes constant to that variable and not to the
       object itself. Therefore, the object is mutable(Changable Object - means we can still change the state of Object).
    07. if an Object is immutable then it is preferred to to reference the Object rather than copy 
 */

var kmem = 12; // Global
let jmem = 10; // Global 
const imem = 11; // Global and Constant 


function letTest() {
    console.log("Let inside a function: " + jmem); // mem is  accessible here
    console.log("Constant inside a function: " + imem); // imem is  accessible here
    console.log("var inside a function: " + kmem); // imem is  accessible here
}


letTest() // Global Access

console.log('-------------------------------------------')
console.log("var global variable: " + kmem);       // Accessible
console.log("Constant global variable: " + imem); // Accessible
console.log("Let is Global Scope: " + jmem)      // Accessible


var a = 1;
let b = 2;
function myFunction() {
    var a = 3; //different variable
    let b = 4; //different variable
    if (true) {
        var a = 5; //overwritten
        let b = 6; //different variable
        console.log(a);
        console.log(b);
    }
    console.log(a);
    console.log(b);
}

myFunction();
console.log(a);
console.log(b);

/** -------------------------------- */
