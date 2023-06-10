/**
 * 01. Beaware of using this operator. in normal function and arrow function this pointer
 *     work differently
 * 02. The arrow functions cannot be used as object constructors that is, the new operator
       cannot be applied on them.
   03. {} is used as empty object literal 
 */

let circleArea = (pi, r) => {
    let area = pi * r * r;
    return area;
}

// for one statement
let circleArea = (pi, r) => pi * r * r;


var object = {
    f1: function () {
        console.log(this);
        var f2 = function () { console.log(this); }
        f2();
        setTimeout(f2, 1000);
    }
}
object.f1();


/** output
Object
Window
Window
 */


var object = {
    f1: () => {
        console.log(this);
        var f2 = () => { console.log(this); }
        f2();
        setTimeout(f2, 1000);
    }
}
object.f1();

/**
 * The output is as follows:
Window
Window
Window
Here, this inside the f1 function copies the this value of global scope, as f1 lies in
global scope. this inside f2 copies the this value of f1, as f2 lies in the f1 scope.
 */


