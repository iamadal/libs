/**
 * We saw three different specifications of implementing modules. These three
specifications have their own respective ways of creating and importing modules.
Wouldn't it have been great if we can create modules that can be imported as an IIFE,
AMD, or CommonJS module?
UMD is a set of techniques that is used to create modules that can be imported as an
IIFE, CommonJS, or AMD module. Therefore now, a program can import third-party
modules, irrespective of what module specification it is using.
The most popular UMD technique is returnExports . According to the
returnExports technique, every module needs to be represented by a separate file.
So, let's create a file named math.js that represents a module. Here is the sample
code that will be inside the module:
 */

(function (root, factory) {
    //Environment Detection
    if (typeof define === 'function' && define.amd) {
    define([], factory);
    } else if (typeof exports === 'object') {
    module.exports = factory();
    } else {
    root.returnExports = factory();
    }
    }(this, function () {
    //Module Definition
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
    }));

    /**
     * Now, you can successfully import the math.js module any way that you wish,
for instance, by using CommonJS, RequireJS, or IIFE.
     */

     