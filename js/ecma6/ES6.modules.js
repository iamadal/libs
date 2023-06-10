/**
 * Every ES6 module needs to be represented by a separate .js file. An ES6 module can
contain any JavaScript code, and it can export any number of variables.
A module can export a variable, function, class, or any other entity.
We need to use the export statement in a module to export variables. The export
statement comes in many different formats. Here are the formats:
 */

export {variableName};
export {variableName1, variableName2, variableName3};
export {variableName as myVariableName};
export {variableName1 as myVariableName1, variableName2 as
myVariableName2};
export {variableName as default};
export {variableName as default, variableName1 as myVariableName1,
variableName2};
export default function(){};
export {variableName1, variableName2} from "myAnotherModule";
export * from "myAnotherModule";

/**
 
Here are the differences in these formats:
• The first format exports a variable.
• The second format is used to export multiple variables.
• The third format is used to export a variable with another name, that is,
an alias.
• The fourth format is used to export multiple variables with different names.
• The fifth format uses default as the alias. We will find out the use of this
later in this chapter.
Modular Programming
[ 162 ]
• The sixth format is similar to fourth format, but it also has the default alias.
• The seventh format works similar to fifth format, but here you can place an
expression instead of a variable name.
• The eighth format is used to export the exported variables of a submodule.
• The ninth format is used to export all the exported variables of a submodule.
Here are some important things that you need to know about the export statement:
• An export statement can be used anywhere in a module. It's not compulsory
to use it at the end of the module.
• There can be any number of export statements in a module.
• You cannot export variables on demand. For example, placing the export
statement in the if…else condition throws an error. Therefore, we can
say that the module structure needs to be static, that is, exports can be
determined on compile time.
• You cannot export the same variable name or alias multiple times. But you
can export a variable multiple times with a different alias.
• All the code inside a module is executed in the strict mode by default.
• The values of the exported variables can be changed inside the module that
exported them.

 */



 /**
  * Importing the ES6 modules
To import a module, we need to use the import statement. The import statement
comes in many different formats. Here are the formats:
  */


 import x from "module-relative-path";
 import {x} from "module-relative-path";
 import {x1 as x2} from "module-relative-path";
 import {x1, x2} from "module-relative-path";
 import {x1, x2 as x3} from "module-relative-path";
 import x, {x1, x2} from "module-relative-path";
 import "module-relative-path";
 import * as x from "module-relative-path";
 import x1, * as x2 from "module-relative-path";

 /**
  * An import statement consists of two parts: the variable names we want to import
and the relative path of the module.
  */

  /**
   * Here are the differences in these formats:
• In the first format, the default alias is imported. The x is alias of the
default alias.
• In the second format, the x variable is imported.
• The third format is the same as the second format. It's just that x2 is an
alias of x1 .
• In the fourth format, we import the x1 and x2 variables.
• In the fifth format, we import the x1 and x2 variables. The x3 is an alias
of the x2 variable.
• In the sixth format, we import the x1 and x2 variable, and the default alias.
The x is an alias of the default alias.
• In the seventh format, we just import the module. We do not import any of
the variables exported by the module.
• In the eighth format, we import all the variables, and wrap them in an object
called x . Even the default alias is imported.
• The ninth format is the same as the eighth format. Here, we give another
alias to the default alias.
Here are some important things that you need to know about the import statement:
• While importing a variable, if we import it with an alias, then to refer to that
variable, we have to use the alias and not the actual variable name, that is,
the actual variable name will not be visible, only the alias will be visible.
• The import statement doesn't import a copy of the exported variables; rather,
it makes the variables available in the scope of the program that imports it.
Therefore, if you make a change to an exported variable inside the module,
then the change is visible to the program that imports it.
• The imported variables are read-only, that is, you cannot reassign them to
something else outside of the scope of the module that exports them.
• A module can only be imported once in a single instance of a JavaScript
engine. If we try to import it again, then the already imported instance of
the module will be used.
• We cannot import modules on demand. For example, placing the import
statement in the if…else condition throws an error. Therefore, we can say
that the imports should be able to be determined on compile time.
Modular Programming
[ 164 ]
• The ES6 imports are faster than the AMD and CommonJS imports, because
the ES6 imports are supported natively and also as importing modules
and exporting variables are not decided on demand. Therefore, it makes
JavaScript engine easier to optimize performance.
   */




   // The module loader

   /**
    * 
    * A module loader is a component of a JavaScript engine that is responsible for
importing modules.
The import statement uses the build-in module loader to import modules.
The built-in module loaders of the different JavaScript environments use different
module loading mechanisms. For example, when we import a module in JavaScript
running in the browsers, then the module is loaded from the server. On the other hand,
when we import a module in Node.js, then the module is loaded from filesystem.
The module loader loads modules in a different manner, in different environments, to
optimize the performance. For example, in the browsers, the module loader loads and
executes modules asynchronously in order to prevent the importing of the modules
that block the loading of a webpage.
You can programmatically interact with the built-in module loader using the module
loader API to customize its behavior, intercept module loading, and fetch the
modules on demand.
We can also use this API to create our own custom module loaders.
The specifications of the module loader are not specified in ES6. It is a separate
standard, controlled by the WHATWG browser standard group. You can find the
specifications of the module loader at http://whatwg.github.io/loader/ .
The ES6 specifications only specify the import and export statements.
Using modules in browsers
The code inside the <script> tag doesn't support the import statement, because the
tag's synchronous nature is incompatible with the asynchronicity of the modules in
browsers. Instead, you need to use the new <module> tag to import modules.
Using the new <module> tag, we can define a script as a module. Now, this module
can import other modules using the import statement.
Chapter 8
[ 165 ]
If you want to import a module using the <script> tag, then you have to use the
Module Loader API.
The specifications of the <module> tag are not specified in ES6.
Using modules in the eval() function
You cannot use the import and export statements in the eval() function. To import
modules in the eval() function, you need to use the Module Loader API.
The default exports vs. the named exports
When we export a variable with the default alias, then it's called as a default
export. Obviously, there can only be one default export in a module, as an alias
can be used only once.
All the other exports except the default export are called as named exports.
It's recommended that a module should either use default export or named exports.
It's not a good practice to use both together.
The default export is used when we want to export only one variable. On the other
hand, the named exports are used when we want to export the multiple variables.
Diving into an example
Let's create a basic JavaScript library using the ES6 modules. This will help us
understand how to use the import and export statements. We will also learn
how a module can import other modules.
The library that we will create is going to be a math library, which provides basic
logarithmic and trigonometric functions. Let's get started with creating our library:
• Create a file named math.js , and a directory named math_modules . Inside
the math_modules directory, create two files named logarithm.js and
trigonometry.js, respectively.
Here, the math.js file is the root module, whereas the logarithm.js and
the trigonometry.js files are its submodules.
• Place this code inside the logarithm.js file:
var LN2 = Math.LN2;
var N10 = Math.LN10;
Modular Programming
[ 166 ]
function getLN2()
{
return LN2;
}
function getLN10()
{
return LN10;
}
export {getLN2, getLN10};
Here, the module is exporting the functions named as exports.
It's preferred that the low-level modules in a module hierarchy should export all
the variables separately, because it may be possible that a program may need just
one exported variable of a library. In this case, a program can import this module
and a particular function directly. Loading all the modules when you need just one
module is a bad idea in terms of performance.
Similarly, place this code in the trigonometry.js file:
var cos = Math.cos;
var sin = Math.sin;
function getSin(value)
{
return sin(value);
}
function getCos(value)
{
return cos(value);
}
export {getCos, getSin};
Here we do something similar. Place this code inside the math.js file, which acts as
the root module:
import * as logarithm from "math_modules/logarithm";
import * as trigonometry from "math_modules/trigonometry";
export default {
logarithm: logarithm,
trigonometry: trigonometry
}
Chapter 8
[ 167 ]
It doesn't contain any library functions. Instead, it makes easy for a program to
import the complete library. It imports its submodules, and then exports their
exported variables to the main program.
Here, in case the logarithm.js and trigonometry.js scripts depends on other
submodules, then the math.js module shouldn't import those submodules,
because logarithm.js and trigonometry.js are already importing them.
Here is the code using which a program can import the complete library:
import math from "math";
console.log(math.trigonometry.getSin(3));
console.log(math.logarithm.getLN2(3));
    */

    