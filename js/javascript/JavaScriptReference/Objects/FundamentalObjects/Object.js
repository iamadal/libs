/*
 * 01. Object is the heart of JavaScript Programming language
 * 02. Every Object inherit all methods and properties from 
 * 03. We can create Object in different ways
 *     a. using new operator
 *     b. Object.create() method
 *     c. const Obj = {}
 */


const object1 = { a: 'foo', b: 42, c: {} };

console.log(object1.a);
// expected output: "foo"

const a = 'foo';
const b = 42;
const c = {};
const object2 = { a: a, b: b, c: c };

console.log(object2.b);
// expected output: 42

const object3 = { a, b, c };

console.log(object3.a);
// expected output: "foo"


// The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.



// shadowed (a.k.a. overridden).   using prototype

// Description
// Nearly all objects in JavaScript are instances of Object; a typical object inherits properties (including methods) from Object.prototype, although these properties may be shadowed (a.k.a. overridden). However, an Object may be deliberately created for which this is not true (e.g. by Object.create(null)), or it may be altered so that this is no longer true (e.g. with Object.setPrototypeOf).

// Changes to the Object prototype object are seen by all objects through prototype chaining, unless the properties and methods subject to those changes are overridden further along the prototype chain. This provides a very powerful although potentially dangerous mechanism to override or extend object behavior.

// The Object constructor creates an object wrapper for the given value.

// If the value is null or undefined, it will create and return an empty object.
// Otherwise, it will return an object of a Type that corresponds to the given value.
// If the value is an object already, it will return the value.
// When called in a non-constructor context, Object behaves identically to new Object().

// See also the object initializer / literal syntax.




// Deleting a property from an object

// There isn't any method in an Object itself to delete its own properties (such as Map.prototype.delete()). To do so, one must use the delete operator.


const Employee = {
  firstname: 'John',
  lastname: 'Doe'
};

console.log(Employee.firstname);
// expected output: "John"

delete Employee.firstname;

console.log(Employee.firstname);
// expected output: undefined


//Constructor
Object() //Creates a new Object object. It is a wrapper for the given value

// Static methods

Object.assign() //Copies the values of all enumerable own properties from one or more source objects to a target object.
Object.create() //Creates a new object with the specified prototype object and properties.
Object.defineProperty() //Adds the named property described by a given descriptor to an object.
Object.defineProperties() //Adds the named properties described by the given descriptors to an object.
Object.entries() //Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.
Object.freeze() //Freezes an object. Other code cannot delete or change its properties.
Object.fromEntries() //Returns a new object from an iterable of [key, value] pairs. (This is the reverse of Object.entries).
Object.getOwnPropertyDescriptor() //Returns a property descriptor for a named property on an object.
Object.getOwnPropertyDescriptors() //Returns an object containing all own property descriptors for an object.
Object.getOwnPropertyNames() //Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.
Object.getOwnPropertySymbols() //Returns an array of all symbol properties found directly upon a given object.
Object.getPrototypeOf() //Returns the prototype (internal [[Prototype]] property) of the specified object.
Object.is() //Compares if two values are the same value. Equates all NaN values (which differs from both Abstract Equality Comparison and Strict Equality Comparison).
Object.isExtensible() //Determines if extending of an object is allowed.
Object.isFrozen() //Determines if an object was frozen.
Object.isSealed() //Determines if an object is sealed.
Object.keys() //Returns an array containing the names of all of the given object's own enumerable string properties.
Object.preventExtensions() //Prevents any extensions of an object.
Object.seal() //Prevents other code from deleting properties of an object.
Object.setPrototypeOf() //Sets the object's prototype (its internal [[Prototype]] property).
Object.values() //Returns an array containing the values that correspond to all of a given object's own enumerable string properties.



// Instance properties -- these will be available after creating a instance of the object

Object.prototype.constructor //Specifies the function that creates an object's prototype.
Object.prototype.__proto__ //Points to the object which was used as prototype when the object was instantiated.



// Instance methods

Object.prototype.__defineGetter__() //Associates a function with a property that, when accessed, executes that function and returns its return value.
Object.prototype.__defineSetter__() //Associates a function with a property that, when set, executes that function which modifies the property.
Object.prototype.__lookupGetter__() //Returns the function associated with the specified property by the __defineGetter__() method.
Object.prototype.__lookupSetter__() //Returns the function associated with the specified property by the __defineSetter__() method.
Object.prototype.hasOwnProperty() //Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.
Object.prototype.isPrototypeOf() //Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.
Object.prototype.propertyIsEnumerable() //Returns a boolean indicating if the internal ECMAScript [[Enumerable]] attribute is set.
Object.prototype.toLocaleString() //Calls toString().
Object.prototype.toString() //Returns a string representation of the object.
Object.prototype.valueOf() //Returns the primitive value of the specified object.

// Important - What is the getter and setter of a class 

// Examples
// Using Object given undefined and null types
// The following examples store an empty Object object in o:

let o = new Object()
let o = new Object(undefined)
let o = new Object(null)

// Using Object to create Boolean objects
// The following examples store Boolean objects in o:
// equivalent to o = new Boolean(true)

let o = new Object(true)
// equivalent to o = new Boolean(false)
let o = new Object(Boolean())


// Object prototypes



// When altering the behavior of existing Object.prototype methods, consider
// injecting code by wrapping your extension before or after the existing
// logic. For example, this (untested) code will pre-conditionally execute
// custom logic before the built-in logic or someone else's extension is
// executed.

// When a function is called, the arguments to the call are held in the
// array-like "variable" arguments. For example, in the call myFn(a, b, c),
// the arguments within myFn's body will contain 3 array-like elements
// corresponding to (a, b, c).

// When modifying prototypes with hooks, pass this and the arguments (the call
// state) to the current behavior by calling apply() on the function. This
// pattern can be used for any prototype, such as Node.prototype,
// Function.prototype, etc.

var current = Object.prototype.valueOf;

// Since my property "-prop-value" is cross-cutting and isn't always
// on the same prototype chain, I want to modify Object.prototype:
Object.prototype.valueOf = function() {
  if (this.hasOwnProperty('-prop-value')) {
    return this['-prop-value'];
  } else {
    // It doesn't look like one of my objects, so let's fall back on
    // the default behavior by reproducing the current behavior as best we can.
    // The apply behaves like "super" in some other languages.
    // Even though valueOf() doesn't take arguments, some other hook may.
    return current.apply(this, arguments);
  }
}



//Since JavaScript doesn't exactly have sub-class objects, prototype is a
//useful workaround to make a “base class” object of certain functions that
//act as objects. For example:






var Person = function(name) {
  this.name = name;
  this.canTalk = true;
};

Person.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name);
  }
};

var Employee = function(name, title) {
  Person.call(this, name);
  this.title = title;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; //If you don't set Object.prototype.constructor to Employee,
                                           //it will take prototype.constructor of Person (parent).
                                           //To avoid that, we set the prototype.constructor to Employee (child).

Employee.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name + ', the ' + this.title);
  }
};

var Customer = function(name) {
  Person.call(this, name);
};

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer; //If you don't set Object.prototype.constructor to Customer,
                                           //it will take prototype.constructor of Person (parent).
                                           //To avoid that, we set the prototype.constructor to Customer (child).

var Mime = function(name) {
  Person.call(this, name);
  this.canTalk = false;
};

Mime.prototype = Object.create(Person.prototype);
Mime.prototype.constructor = Mime; //If you don't set Object.prototype.constructor to Mime,
                                   //it will take prototype.constructor of Person (parent).
                                   //To avoid that, we set the prototype.constructor to Mime (child).

var bob = new Employee('Bob', 'Builder');
var joe = new Customer('Joe');
var rg = new Employee('Red Green', 'Handyman');
var mike = new Customer('Mike');
var mime = new Mime('Mime');

bob.greet();
// Hi, I am Bob, the Builder

joe.greet();
// Hi, I am Joe

rg.greet();
// Hi, I am Red Green, the Handyman

mike.greet();
// Hi, I am Mike

mime.greet();









// Object() constructor
// The Object constructor creates an object wrapper for the given value.

// If the value is null or undefined, it will create and return an empty object.
// Otherwise, it will return an object of a Type that corresponds to the given value.
// If the value is an object already, it will return the value.
// When called in a non-constructor context, Object behaves identically to new Object().



//Syntax
new Object()
new Object(value)


//Parameters
// value
// Any value.



// Examples
// Creating a new Object

let o = new Object()
o.foo = 42

console.log(o)
// Object { foo: 42 }

// Using Object given undefined and null types
// The following examples store an empty Object object in o:

let o = new Object()
let o = new Object(undefined)
let o = new Object(null)


