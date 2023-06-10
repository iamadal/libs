/*
01. Primitive vales are stored in the stack
02. When a value is assinged to a variable then
    The value is a Reference type or Primitive
03. Primitive Types Boolean, Null, Undefined, String and Number.
    They take fixed amount of space so they can be stored in a Stack
04. Many Language Consider String as Object and so is called a reference type
05. If reference variable is assigned to a variable then the variable must be stored in 
    The Heap
06. Objects are stored in Heap.
07. Primitive values can not have properties
08. Copying vales....
    a. Primitive types: Value of Stack is Copied to the New Loaction 
    b. Reference Types: Just Copy the Reference or Location of the Object.
       Both Point to the Same Object
09. Argument Passing:(All Function are passed by value)
    a. Primitive: Pass by Value: Outside varibles are copied and passed to the function
    b. Reference: Referecne Locaion are copied from the outside varibles - Change Reflect Outside Object
    c. windows is a Global Object. Everything can be acceedded by it 
*/

function addTen(num) {
    num += 10;
    return num;
    }
    var count = 20;
    var result = addTen(count);
    console.log(count); //20 - no change
    console.log(result); //30
    
    var s = "Nicholas";
    var b = true;
    var i = 22;
    var u;
    var n = null;
    var o = new Object();
    console.log(typeof s); //string
    console.log(typeof i); //number
    console.log(typeof b); //boolean
    console.log(typeof u); //undefined
    console.log(typeof n); //object
    console.log(typeof o); //object

    console.log(person instanceof Object); //is the variable person an Object?
    console.log(colors instanceof Array); //is the variable colors an Array?
    console.log(pattern instanceof RegExp); //is the variable pattern a RegExp?


var color = "blue";

function changeColor(){
var anotherColor = "red";
function swapColors(){
var tempColor = anotherColor;
anotherColor = color;
color = tempColor;
//color, anotherColor, and tempColor are all accessible here
}
//color and anotherColor are accessible here, but not tempColor
swapColors();
}
//only color is accessible here
changeColor();



if (true) {
    var color = "blue";
    }
    console.log(color); //”blue”


/*
 Here, the variable color is defined inside an if statement. In languages such as C, C++, and Java, that
variable would be destroyed after the if statement is executed. In JavaScript, however, the variable
declaration adds a variable into the current execution context (the global context, in this case). This is
important to keep in mind when dealing with the for statement, which is typically written like this:
*/

for (var i=0; i < 10; i++){
    doSomething(i);
    }
    console.log(i); //10


// If a variable is initialized without first being declared, it gets
//  added to the global context automatically, as in this example:

function add(num1, num2) {
var sum = num1 + num2;
return sum;
}
var result = add(10, 20); //30
console.log(sum); //causes an error since sum is not a valid variable

// First Declare then initialize




//Given this search process, referencing local variables automatically stops the search from going into
//another variable object. This means that identifiers in a parent context cannot be referenced if an
//identifier in the local context has the same name, as in this example:

var color = "blue";
function getColor(){
var color = "red";
return color;
}
console.log(getColor()); //”red”
//In this modified code, a local variable named color is declared inside the getColor() function. When
//the function is called, the variable is declared. When the second line of the function is executed, it
//knows that a variable named color must be used. The search begins in the local context, where it finds
//a variable named color with a value of ” red ” . Because the variable was found, the search stops and
//the local variable is used, meaning that the function returns ” red ” . Any lines of code appearing after the
//declaration of color as a local variable cannot access the global color variable.
window
color
getColor
return color


//Variable lookup doesn ’ t come without a price. It ’ s faster to access local variables
//than global variables because there ’ s no search up the scope chain.
// JavaScript is a garbage - collected language, 


// window.collect() call the garbase collector
// Obj = null will deference a Object and freeup space - Applied to Global Object
// or Wrap everything in module like commonJS



/*
Summary
Two types of values can be stored in JavaScript variables: primitive values and reference values.
Primitive values have one of the five primitive data types: Undefined, Null, Boolean, Number, and
String. Primitive and reference values have the following characteristics:
Primitive values are of a fixed size and so are stored in memory on the stack.
Copying primitive values from one variable to another creates a second copy of the value.
Reference values are objects and are stored in memory on the heap.
A variable containing a reference value actually contains just a pointer to the object, not the
object itself.
Copying a reference value to another variable copies just the pointer, so both variables end up
referencing the same object.
The typeof operator determines a value ’ s primitive type, whereas the instanceof operator is
used to determine the reference type of a value.
❑
❑
❑
❑
❑
❑
Chapter 4: Variables, Scope, and Memory
95
All variables, primitive and reference, exist within an execution context (also called a scope), that
determines the lifetime of the variable and which parts of the code can access it. Execution context can be
summarized as follows:
Execution contexts exist globally (called the global context) as well as within functions.
Each time a new execution context is entered, it creates a scope chain to search for variables and
functions.
Contexts that are local to a function have access not only to variables in that scope, but also to
variables in any containing contexts as well as the global context.
The global context has access only to variables and functions in the global context and cannot
directly access any data inside local contexts.
The execution context of variables helps to determine when memory will be freed.
JavaScript is a garbage - collected programming environment where the developer need not be concerned
with memory allocation or reclamation. JavaScript ’ s garbage - collection routine can be summarized as
follows:
Values that go out of scope will automatically be marked for reclamation and will be deleted
during the garbage - collection process.
The predominant garbage - collection algorithm is called mark - and - sweep, which marks values
that aren ’ t currently being used and then goes back to reclaim that memory.
Another algorithm is reference counting, which keeps track of how many references there are to
a particular value. JavaScript engines no longer use this algorithm, but it still affects IE due to
non - native JavaScript objects (such as DOM elements) being accessed in JavaScript.
Reference counting causes problems when circular references exist in code.
Dereferencing variables helps not only with circular references but also with garbage collection
in general. To aid in memory reclamation, global objects, properties on global objects, and
circular references should all be dereferenced when no longer needed

*/