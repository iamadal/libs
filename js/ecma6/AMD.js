/**
 * AMD is a specification for implementing modules in browser. AMD is designed by
keeping the browser limitations in mind, that is, it imports modules asynchronously
to prevent blocking the loading of a webpage. As AMD is not a native browser
specification, we need to use an AMD library. RequireJS is the most popular
AMD library.
Let's see an example on how to create and import modules using RequireJS.
According to the AMD specification, every module needs to be represented by
a separate file. So first, create a file named math.js that represents a module.
Here is the sample code that will be inside the module:
*/



define(function(){
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
    return math;
    });


/**
 *     Here, the module exports the math variable to expose its functionality.
Now, let's create a file named index.js , which acts like the main program that
imports the module and the exported variables. Here is the code that will be inside
the index.js file:
 */

require(["math"], function(math){
console.log(math.findSum(1, 2)); //Output "3"
console.log(math.findSub(1, 2)); //Output "-1"
})

/**
 * Here, math variable in the first parameter is the name of the file that is treated
as the AMD module. The .js extension to the file name is added automatically
by RequireJS.
 */