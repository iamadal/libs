/**
 01. A generator function is like a normal function, but instead of returning a single
     value, it returns multiple values one by one.
 */

 /**
  A generator function is like a normal function, but instead of returning a single
value, it returns multiple values one by one. Calling a generator function doesn't
execute its body immediately, but rather returns a new instance of the generator
object (that is, an object that implements both, iterable and iterator protocols).
Every generator object holds a new execution context of the generator function.
When we execute the next() method of the generator object, it executes the
generator function's body until the yield keyword is encountered. It returns the
yielded value, and pauses the function. When the next() method is called again,
it resumes the execution, and then returns the next yielded value. The done property
is true when the generator function doesn't yield any more value.
A generator function is written using the function* expression. Here is an example
to demonstrate this:
  */

 function* generator_function()
 {
 yield 1;
 yield 2;
 yield 3;
 yield 4;
 yield 5;
 }
 let generator = generator_function();


 console.log(generator.next().value);
 console.log(generator.next().value);
 console.log(generator.next().value);
 console.log(generator.next().value);
 console.log(generator.next().value);
 console.log(generator.next().done);
 generator = generator_function();
 
 let iterable = generator[Symbol.iterator]();
 
 console.log(iterable.next().value);
 console.log(iterable.next().value);
 console.log(iterable.next().value);
 console.log(iterable.next().value);
 console.log(iterable.next().value);
 console.log(iterable.next().done);
 
 /**
  The output is as follows:
 1
 2
 3
 4
 5
 true
 1
 2
 3
 4
 5
 true
  */





  /**
   There is an expression following the yield keyword. The value of the expression
is what returned by the generator function via the iterable protocol. If we omit the
expression, then undefined is returned. The value of the expression is what we call
as the yielded value.
We can also pass an optional argument to the next() method. This argument
becomes the value returned by the yield statement, where the generator function
is currently paused. Here is an example to demonstrate this:
   */

  function* generator_function()
  {
  var a = yield 12;
  Using Iterators
  [ 68 ]
  var b = yield a + 1;
  var c = yield b + 2;
  yield c + 3;
  }
  var generator = generator_function();
  console.log(generator.next().value);
  console.log(generator.next(5).value);
  console.log(generator.next(11).value);
  console.log(generator.next(78).value);
  console.log(generator.next().done);
  
  /**
   The output is as follows:
  12
  6
  13
  81
  true
   */


    function* generator_function()
{
yield 1;
yield 2;
yield 3;
}
var generator = generator_function();
console.log(generator.next().value);
console.log(generator.return(22).value);
console.log(generator.next().done);


The output is as follows:
1
22
true
    

function* generator_function()
{
try
{
yield 1;
}
catch(e)
{
console.log("1st Exception");
}
try
{
yield 2;
}
catch(e)
{
console.log("2nd Exception");
}
}
var generator = generator_function();
console.log(generator.next().value);
console.log(generator.throw("exception string").value);
console.log(generator.throw("exception string").done);
Using Iterators
[ 70 ]
The output is as follows:
1
1st Exception
2
2nd Exception
true
true




// The yield* keyword inside a generator function takes an iterable object as the
// expression and iterates it to yield its values. Here is an example to demonstrate this:

function* generator_function_1()
{
yield 2;
yield 3;
}
function* generator_function_2()
{
yield 1;
yield* generator_function_1();
yield* [4, 5];
}
var generator = generator_function_2();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().done);

/**
 The output is as follows:
1
2
3
 */




The "for…of" loop
Until now, we were iterating over an iterable object using the next() method, which
is a cumbersome task. ES6 introduced the for…of loop to make this task easier.
The for…of loop was introduced to iterate over the values of an iterable object.
Here is an example to demonstrate this:
function* generator_function()
{
yield 1;
yield 2;
yield 3;
yield 4;
yield 5;
}
let arr = [1, 2, 3];
for(let value of generator_function())
{
console.log(value);
}
for(let value of arr)
{
console.log(value);
}

/**
 The output is as follows:
1
2
3
4
5
1
2
3
 */



 // tail calling

 "use strict";
function _add(x, y)
{
return x + y;
}
function add1(x, y)
{
x = parseInt(x);
y = parseInt(y);
//tail call
return _add(x, y);
}


function add2(x, y)
{
x = parseInt(x);
y = parseInt(y);
//not tail call like inline function optimied
return 0 + _add(x, y);
}
console.log(add1(1, '1')); //2
console.log(add2(1, '2')); //3



// tail call ar Optimized

"use strict";
function _add(x, y)
{
return x + y;
}
function add(x, y)
{
x = parseInt(x);
y = parseInt(y);
var result = _add(x, y);
return result;
}
console.log(add(1, '1'));

// In the previous code, the _add() call was not a tail call and therefore, two execution
// stacks were created. We can convert it into a tail call in this way:

function add(x, y)
{
x = parseInt(x);
y = parseInt(y);
return _add(x, y);
}
// Here, we omitted the use of the result variable and instead, we lined up the function
// call with the return statement. Similarly, there are many other strategies to convert
// the non-tail calls into the tail calls.