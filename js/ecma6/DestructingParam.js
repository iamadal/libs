/**
 * 01. 
 */

 // Old fashion
var myArray = [1, 2, 3];
var a = myArray[0];
var b = myArray[1];
var c = myArray[2];
// Using destructing method

let myArray = [1, 2, 3];
let a, b, c;
[a, b, c] = myArray; //array destructuring assignment syntax



let [a, b, c] = [1, 2, 3];

let [a, , b] = [1, 2, 3]; // ignore values

let [a, ...b] = [1, 2, 3, 4, 5, 6]; // rest and Destructing

let [a, , ,...b] = [1, 2, 3, 4, 5, 6]; // Both

let [a, b, c = 3] = [1, 2]; // Assign default values
let [a, b, c = 3] = [1, 2]; // out > 3


let [a, b, [c, d]] = [1, 2, [3, 4]]; // nesting


// Destructing as param

function myFunction([a, b, c = 3])
{
console.log(a, b, c); //Output "1 2 3"
}
myFunction([1, 2]); 


// More
function myFunction([a, b, c = 3] = [1, 2, 3])
{
console.log(a, b, c); //Output "1 2 3"
}
myFunction(undefined);

// Object Destructing
// Old Ways
var object = {"name" : "John", "age" : 23};
var name = object.name;
var age = object.age;
// New Ways
let object = {"name" : "John", "age" : 23};
let name, age;
({name, age} = object); //object destructuring assignment syntax
// more
let object = {"name" : "John", "age" : 23};
let x, y;
({name: x, age: y} = object);
// more
let {name: x, age: y} = {"name" : "John", "age" : 23};

// default values for variables
let {a, b, c = 3} = {a: "1", b: "2"};
console.log(c); //Output "3"
// destrcuting computed property
let {["first"+"Name"]: x} = { firstName: "Eden" };
console.log(x); //Output "Eden"
// more - nesting
var {name, otherInfo: {age}} = {name: "Eden", otherInfo: {age:23}};
    console.log(name, age); //Eden 23
// Object destructor as parameter 
function myFunction({name = 'Eden', age = 23, profession ="Designer"} = {})
{
console.log(name, age, profession); //Output "John 23 Designer"
}
myFunction({name: "John", age: 23});
//