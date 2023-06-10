--- javascript execution context ---
01. interpretation is slow
02. JIT = Just in time Compilation
03. Interpreter < Compiler Fast Process. Compiled program is hard to debug
04. JIT (Interpreter + Compiler) 
05. JIT(Interpreter) > Compiler. When a function is called just that in time it will be compiled it into machine language


--- Execution Context ---
-----------------------------------------
01. We can divide task in multiple part for faster execution.
02. Javascript also divide code into smaller parts. that is called execution context
03. Global execution context -> Phase: Loading/Creation
04. window: global object.
    this: windows (object)
    variable Object (Object)
    scope chain (object)

-----------------------------------------
var topic ="Javascript execution contex";  // topic became undefined - allocate memory 
function getTopic()
{
   retunr topic;
}
 
getTopic();

window: global Object
this: window
topic: undefined
getTopic: fn()
scope chain

at the time of execution topic become "javascript Execution context";

console.log gives undefined.

  Loading State(Variable's value = undefined) and Execution State


browser = window
nodejs = global
this is a pointer which point to the current object

---- Function execution context (at the time of calling the function) ---
so global context is created at first and then function execution context created while calling the function

01. Loading Phase: Globale Object(window or Global) > this object Pointer > memory allocated for variable but they are initialized to undefined value. in the execution phase actual value are placed and thus variable's value become accessible

02. in function execution context no more global object created rather an object with parameters passed to the function is created. and other things reamin same as previous step

03. execution stack - global executin stack > function stack

---- visual representation ---
in function call getTopic() following objects are created. in each call new execution context is created

this: window 
arguments: {}

04. when function reach to the return statement execution context is destroyed and execution trasfered to global context. if return statement is not defined then undefined is retured.

05. Using breakpoint to see this context . debugging 

06. in closure for annonymous function a closure execution context is created and thus closure took more memory

   