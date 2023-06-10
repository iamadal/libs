/**
 Here are the differences between the Map and the WeakMap objects:
• Keys of a Map object can be of primitive types or object references but keys in
WeakMap object can only be object references
• One of the important features of the WeakMap object is that if there is
no other reference to an object that is referenced by a key then the key is
garbage collected.
• Lastly the WeakMap object is not enumerable, that is, you cannot find its size
and it doesn't implement iterable protocol.
Everything else, apart from these three differences is similar between the Map and
the WeakMap object.
A WeakMap is created using WeakMap constructor. Here is an example that
demonstrates its usage:
 */

let weakmap = new WeakMap();
(function(){
let o = {n: 1};
weakmap.set(o, "A");
})()
//here 'o' key is garbage collected
let s = {m: 1};
weakmap.set(s, "B");
console.log(weakmap.get(s));
console.log(...weakmap); //exception thrown
weakmap.delete(s);
weakmap.clear(); //Exception, no such function
let weakmap_1 = new WeakMap([[{}, 2], [{}, 5]]); //this works
console.log(weakmap_1.size); //undefined

