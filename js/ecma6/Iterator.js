/**
 * 01. ES6 introduces new object interfaces and loops for iteration. 
 * 02. new Operator cannot be applied to Symbol()
 * 03. The primary reason for introducing symbols in ES6 was so that it
       can be used as a key for object property, and prevent the accidental
       collision of the property keys.
 */

 // The Symbol Object - its also a primitive data type in ES6 - it does not have a literal form

 var s = Symbol(); // return unique symbol everytime it called
 
 let s1 = window.Symbol("My Symbol");
 let s2 = window.Symbol("My Symbol");
 console.log(s1 === s2); //Output is "false" since both are unique by nature

 // 
let obj = null;
let s1 = null;
 (function(){
 let s2 = Symbol();
 s1 = s2;
 obj = {[s2]: "mySymbol"}
 console.log(obj[s2]);
 console.log(obj[s2] == obj[s1]);
 })();
  console.log(obj[s1]);
/**
The output is:
mySymbol
true
mySymbol
 */
 

 // The Object.getOwnPropertyNames() method cannot retrieve the symbol properties. need new api

 let obj = {a: 12};
let s1 = Symbol("mySymbol");
let s2 = Symbol("mySymbol");
Object.defineProperty(obj, s1, {
enumerable: false
});
obj[s2] = "";
console.log(Object.getOwnPropertySymbols(obj));

// getOwnProperty
let obj = {a: 12};
let s1 = Symbol("mySymbol");
let s2 = Symbol("mySymbol");
Object.defineProperty(obj, s1, {
enumerable: false
});
obj[s2] = "";
console.log(Object.getOwnPropertySymbols(obj));

// The output is as follows:
// Symbol(mySymbol),Symbol(mySymbol)

/**
 The in operator can find the symbol properties in an object, whereas the
for…in loop and Object.getOwnPropertyNames() cannot find the
symbol properties in an object for the sake of backward compatibility.
 */

let obj = {};
(function(){
let s1 = Symbol("name");
obj[s1] = "Eden";
})();
//obj[s1] cannot be accessed here
(function(){
let s2 = Symbol.for("age");
obj[s2] = 27;
})();
console.log(obj[Symbol.for("age")]); //Output "27"

// Well knows symbol
/**
 Symbol.iterator
• Symbol.match
• Symbol.search
• Symbol.replace
• Symbol.split
• Symbol.hasInstance
• Symbol.species
• Symbol.unscopables
• Symbol.isContcatSpreadable
• Symbol.toPrimitive
• Symbol.toStringTag
 */


let obj = {
    array: [1, 2, 3, 4, 5],
    nextIndex: 0,
    next: function(){
    return this.nextIndex < this.array.length ?
    {value: this.array[this.nextIndex++], done: false} :
    {done: true};
    }
    };
    console.log(obj.next().value);
    console.log(obj.next().value);
    console.log(obj.next().value);
    console.log(obj.next().value);
    console.log(obj.next().value);
    console.log(obj.next().done);
    
    /**
     The output is as follows:
    1
    2
    3
    4
    5
    true
    Every time the next() method is called, it returns an object with two properties:
    value and done . Let's see what these two properties represent:
    • The done property: This returns true if the iterator has finished iterating
    over the collection of values. Otherwise, this returns as false .
    • The value property: This holds the value of the current item in the collection.
    It is omitted when the done property is true 

     */


    let obj = {
        array: [1, 2, 3, 4, 5],
        nextIndex: 0,
        [Symbol.iterator]: function(){
        return {
        array: this.array,
        nextIndex: this.nextIndex,
        next: function(){
        return this.nextIndex < this.array.length ?
        {value: this.array[this.nextIndex++], done: false} :
        {done: true};
        }
        }
        }
        };
        let iterable = obj[Symbol.iterator]()
    
        console.log(iterable.next().value);
        console.log(iterable.next().value);
        console.log(iterable.next().value);
        console.log(iterable.next().value);
        console.log(iterable.next().value);
        console.log(iterable.next().done);
    
        /**
         * The output is as follows:
        1
        2
        3
        4
        5
        true
         */


         