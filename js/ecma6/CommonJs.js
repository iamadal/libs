/**
 * CommonJS is a specification for implementing modules in Node.js. According to the
CommonJS specification, every module needs to be represented by a separate file.
The CommonJS modules are imported synchronously.
Let's see an example on how to create and import modules using CommonJS. First,
we will create a file named math.js that represents a module. Here is a sample code
that will be inside the module:
 */

var sum = function(x, y){
    return x + y;
    }

    var sub = function(x, y){
    return x - y;
    }


// avode codes are private

    var math = {

    findSum: function(a, b){
    return sum(a,b);
    },
    findSub: function(a, b){
    return sub(a, b);
    }

    }
    exports.math = math;

    /**
     Here, the module exports the math variable to expose its functionality.
Now, let's create a file named index.js , which acts like the main program that
imports the module. Here is the code that will be inside the index.js file:
     */


    var math = require("./math").math;
    console.log(math.findSum(1, 2)); //Output "3"
    console.log(math.findSub(1, 2)); //Output "-1"

    /**
     * Here, the math variable is the name of the file that is treated as module. The .js
extension to the file name is added automatically by CommonJS.
     */

     