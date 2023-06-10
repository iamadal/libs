/**
 * 01. empty object
 *     var m = {}
 */

var x = 1, y = 2;
var object = {
x: x,
y: y
};
console.log(object.x); //output "1"

// ES6 - New Way
let x = 1, y = 2;
let object = { x, y };
console.log(object.x); //output "1"

// New method for function - note: this form can use super method
let object = {
    myFunction(){
    console.log("Hello World!!!"); //Output "Hello World!!!"
    }
    }
    object.myFunction();

// Computed property
var object = {};
object["first"+"Name"] = "Eden";//"firstName" is the property name
//extract
console.log(object["first"+"Name"]); //Output "Eden"

// more examples

let object = {
    ["first" + "Name"]: "Eden",
    };
    //extract
    console.log(object["first" + "Name"]); //Output "Eden"

// __proto__ property

//In ES5
var x = {x: 12};
var y = Object.create(x, {y: {value: 13}});
console.log(y.x); //Output "12"
console.log(y.y); //Output "13"
//In ES6
let a = {a: 12, __proto__: {b: 13}};
console.log(a.a); //Output "12"
console.log(a.b); //Output "13"

// isValue()
console.log(Object.is(0, -0));
console.log(0 === -0);
console.log(Object.is(NaN, 0/0));
console.log(NaN === 0/0);
console.log(Object.is(NaN, NaN));
console.log(NaN ===NaN);

/**
  false
true
true
false
true
false
 */

let x = {x: 12};
let y = {y: 13};
Object.setPrototypeOf(y, x)
console.log(y.x); //Output "12"
console.log(y.y); //Output "13"


// Copy enumeratble object

let x = {x: 12};
let y = {y: 13, __proto__: x};
let z = {z: 14, get b() {return 2;}, q: {}};

Object.defineProperty(z, "z", {enumerable: false});

let m = {};


Object.assign(m, y, z);
console.log(m.y);
console.log(m.z);
console.log(m.b);
console.log(m.x);
console.log(m.q == z.q);

/**
 Output is:
13
undefined
2
undefined
true




Here is a list of important things to keep in mind while using the Object.assign()
method:
• It invokes getters on the sources and setters on the target.
• It just assigns values of the properties of source to the new or existing
properties of target.
• It doesn't copy the [[prototype]] property of sources.
• JavaScript property names can be strings or symbols. Object.assign()
copies both.
• Property definitions are not copied from sources therefore you need to use
Object.getOwnPropertyDescriptor()Object.defineProperty() instead.
• It ignores copying keys with null and undefined values.
 */

 