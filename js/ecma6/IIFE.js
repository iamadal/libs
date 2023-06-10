/**
 * 01. Module is a collection of libraries and functions
 * 02. module exports some variables to the outside program to let it access
 * 03. Module inside a module is called sub module
 * 04. 
 */

 
/** Old ways of creating modules -ES5
 * 01. IIFE - Immidiately 
 * 02. Asynchronous Module Defination - AMD
 * 03. Universal Module Defination - UMD 
 */

 //IIFE


 //Module Starts
(function(window){
    var sum = function(x, y){
    return x + y;
    }
    var sub = function(x, y){
    return x - y;
    }
    var math = {
    findSum: function(a, b){
    return sum(a,b);
    },
    findSub: function(a, b){
    return sub(a, b);
    }
    }
    window.math = math;
    })(window)
    //Module Ends
    console.log(math.findSum(1, 2)); //Output "3"
    console.log(math.findSub(1, 2)); //Output "-1"

    /**
     * Here, we created a module using IIFE. The sum and sub variables are global to the
module, but not visible outside of the module. The math variable is exported by the
module to the main program to expose the functionalities that it provides.
This module works completely independent of the program, and can be imported
by any other program by simply copying it into the source code, or importing it as
a separate file


A library using IIFE, such as jQuery, wraps its all of its APIs in
a single IIFE module. When a program uses a jQuery library,
it automatically imports the module

     */