/*
 01. A Reference value(Object) is a Specific Reference Type
 02. Alternative name Object Defination
 03. Constructor() is a function whose purpose is to create Objs
 04. Create Object in Two Ways
*/

// Create a person Obj with Default properties and method - Type-1
var person = new Object(); 
var parson = {}   // Both Are Same

person.name = "Adal"
person.age = 25

// METHOD - 2-Object Literal - Preferred way while passing to function

var person = {
    name:"Adal",
    age:28,
    add:function(){}
}

function displayInfo(args) {
    var output = "";
    if (typeof args.name == "string"){
    output += "Name:"  + args.name + "\n";
    }
    if (typeof args.age == "number") {
    output += "Age:"  + args.age + "\n";
    }
    console.log(output);
    }



    displayInfo({
    name: "Nicholas",
    age: 29
    });

    displayInfo({
    name: "Greg"
    });



console.log(person["name"]); //”Nicholas”
console.log(person.name); //”Nicholas”
// if name  is a function then 
// console.log(person["name"](args)) can be called


