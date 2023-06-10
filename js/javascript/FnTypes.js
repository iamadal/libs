/**
 * Function Type 
 * 01. Functions are actually Object
 * 02. Each function is a instance of Function Type
 * 03. functiion names are simply pointer to the Function Obj
 * 04. 
 */

function sum(num1, num2) {
    return num1 + num2;
}

var sum = function (num1, num2) {
    return num1 + num2;
};

var sum = new Function("num1", "num2", "return num1 + num2"); //not recommended

function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(10, 10)); //20
var anotherSum = sum;
console.log(anotherSum(10, 10)); //20
sum = null;
console.log(anotherSum(10, 10)); //20



/**
 * Function as value
 */

function callSomeFunction(someFunction, someArgument) {
    return someFunction(someArgument);
}



// Returnig function from a Function


function createComparisonFunction(propertyName) {
    return function (object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    };
}

function sayName(name) {
    console.log(name);
}
function sum(num1, num2) {
    return num1 + num2;
}
function sayHi() {
    console.log("hi");
}
console.log(sayName.length); //1
console.log(sum.length); //2
console.log(sayHi.length); //0


