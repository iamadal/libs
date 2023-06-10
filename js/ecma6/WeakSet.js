/**
 Here are the differences between Set and WeakSet objects:
• A Set can store primitive types and object references whereas a WeakSet
object can only store object references
• One of the important features of the WeakSet object is that if there is
no other reference to an object stored in a WeakSet object then they are
garbage collected
• Lastly a WeakSet object is not enumerable, that is, you cannot find its size;
it also doesn't implement iterable protocol
Apart from these three differences it behaves exactly the same way as a Set .
Everything else apart from these three differences is same between a Set and
WeakSet object.
A WeakSet object is created using WeakSet constructor. You cannot pass an iterable
object as an argument to WeakSet object.
Here is an example to demonstrate WeakSet:
 */

let weakset = new WeakSet();
(function(){
let a = {};
weakset.add(a);
})()
//here 'a' is garbage collected from weakset
console.log(weakset.size); //output "undefined"
console.log(...weakset); //Exception is thrown
weakset.clear(); //Exception, no such function

