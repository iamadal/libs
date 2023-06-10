/**
 * 01. Many OO languages
       support two types of inheritance: interface inheritance, where only the method signatures are inherited,
       and implementation inheritance, where actual methods are inherited.
    02. Implementation inheritance is supported in JavaScript
    03. each constructor has a prototype
        object that points back to the constructor, and instances have an internal pointer to the prototype.
    04. apply() and call() methods can be used to execute a constructor on the newly created object,
 */
function Supers(name){
    this.name = name;
}
function Subs(){
    Supers.call(this,"Nicolas") // Call will use to call the constructor of Supers
    this.age = "22"
}

var instance = new Subs();

console.log(instance.name);
console.log(instance.age);



// BEST METHOD

function SuperType(name){
    this.name = name;
    this.colors = ["red","blue","green"];
}

SuperType.prototype.sayName = function(){
    console.log(this.name);
}

function Subtype(name,age){
    // Inherit Properties
    SuperType.call(this,name);

    this.age = age;
}

// inherit Method

Subtype.prototype = new SuperType();

Subtype.prototype.sayAge = function(){
    console.log(this.age);
}



var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
console.log(instance1.colors); //"red,blue,green,black"
instance1.sayName(); //"Nicholas";
instance1.sayAge(); //29 
var instance2 = new SubType("Greg", 27);
console.log(instance2.colors); //"red,blue,green"
instance2.sayName(); //"Greg";
instance2.sayAge(); //2


function object(o){
    function F(){}
    F.prototype = o;
    return new F();
    }


    var person = {
        name: "Nicholas",
        friends: ["Shelby", "Court", "Van"]
        };
        var anotherPerson = object(person);
        anotherPerson.name = "Greg";
        anotherPerson.friends.push("Rob");
        var yetAnotherPerson = object(person);
        yetAnotherPerson.name = "Linda";
        yetAnotherPerson.friends.push("Barbie");
        console.log(person.friends); //"Shelby,Court,Van,Rob,Barbie"



        function createAnother(original){
            var clone = object(original); //create a new object by calling a function
            clone.sayHi = function(){ //augment the object in some way
            console.log("hi");
            };
            return clone; //return the object
            }

            

