function fn(args) { return 1 }

// Statements after return statements never executed



function diff(num1, num2) {
    if (num1 < num2) {
        return num2 - num1;
    } else {
        return num1 - num2;
    }
}

// more than one return function is allowed to the code

function sayHi(name, message) {
    return;  // return undefined
    console.log(message); //never called
}

// Function arguments are represented by argument[] array

function sayHi() {
    console.log(arguments[0] + arguments[1]);
}


function howManyArgs() {
    console.log(arguments.length);
}
howManyArgs("string", 45); //2
howManyArgs(); //0
howManyArgs(12); //1


function doAdd() {
    if (arguments.length == 1) {
        console.log(arguments[0] + 10);
    } else if (arguments.length == 2) {
        console.log(arguments[0] + arguments[1]);
    }
}
doAdd(10); //20
doAdd(30, 20); //50


function addSomeNumber(num){
    return num + 100;
    }
    function addSomeNumber(num) {
    return num + 200;
    }
    var result = addSomeNumber(100); //300 function will be overritten and called 