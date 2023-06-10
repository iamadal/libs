/**
 * Protoypes
 * 01. Each function is created with a prototype property, which is an object containing properties and
       methods that should be available to instances of a particular reference type.
   02. prototype is a common shared location sharing memory with others 
   03. prototypes automatically get a property called "constructor" that point back to the function

   04. Each constructor is a function that has a property named "prototype" - Main
       Objective is prototypal inheritance and shared property 
    05. constructor is called with new operator
    06. Calling Constructor without new operatior can create Just Output rather than
        Creating Object
        
    07. When defining a custom constructor, the prototype gets the constructor property only by default; all
        other methods are inherited from Object . Each time the constructor is called to create a new instance,
        that instance has an internal pointer to the constructor ’ s prototype. In many implementations, this
        property is called __proto__ and can be accessed via script (Firefox, Safari, Chrome, and Flash ’ s
        ActionScript all allow access to __proto__ ); in other implementations, this property is completely
        hidden from script. The important thing to understand is that a link exists between the instance and the
        constructor ’ s prototype but not between the instance and the constructor.
        Consider the previous example using the Person constructor and Person.prototype . The relationship
        between the objects in the example is shown in Figure 6 - 1 .

        08. __proto__ is not accessible. Only its a pointer
        09. The constructor property mentioned earlier exists only on the prototype and so is accessible from
object instances.
 */


function Person() { }; // Person.prototype.constructor point to Person

Person.prototype.name = "Nicolas"
Person.prototype.age = 20;
Person.prototype.push = function () {
    console.log("Name: " + this.name + " " + this.age + " ");
}




function Person() {
}
Person.prototype.name = “Nicholas”;
Person.prototype.age = 29;
Person.prototype.job = “Software Engineer”;
Person.prototype.sayName = function () {
    alert(this.name);
};
var person1 = new Person();
var person2 = new Person();
person1.name = “Greg”;
alert(person1.name); //”Greg” - from instance
alert(person2.name); //”Nicholas” - from prototype





function Person(){
}
Person.prototype.name = “Nicholas”;
Person.prototype.age = 29;
Person.prototype.job = “Software Engineer”;
Person.prototype.sayName = function(){
alert(this.name);
};
var person1 = new Person();
var person2 = new Person();
person1.name = “Greg”;
alert(person1.name); //”Greg” - from instance
alert(person2.name); //”Nicholas” - from prototype
delete person1.name;
alert(person1.name); //”Nicholas” - from the prototype



//The hasOwnProperty() method can determine if a property exists on the instance or on the prototype.

/**
 * There are two ways to use the in operator: on its own or as a for - in loop. When used on its own, the in
operator returns true when a property of the given name is accessible by the object, which is to say that
the property may exist on the instance or on the prototype. Consider the following example:
 */

function Person(){
}
Person.prototype.name = “Nicholas”;
Person.prototype.age = 29;
Person.prototype.job = “Software Engineer”;
Person.prototype.sayName = function(){
alert(this.name);
};
var person1 = new Person();
var person2 = new Person();
alert(person1.hasOwnProperty(“name”)); //false
alert(“name” in person1); //true
person1.name = “Greg”;
alert(person1.name); //”Greg” - from instance
alert(person1.hasOwnProperty(“name”)); //true
alert(“name” in person1); //true
alert(person2.name); //”Nicholas” - from prototype
alert(person2.hasOwnProperty(“name”)); //false
alert(“name” in person2); //true
delete person1.name;
alert(person1.name); //”Nicholas” - from the prototype
alert(person1.hasOwnProperty(“name”)); //false
alert(“name” in person1); //true






// Alterantive 

unction Person(){
}
Person.prototype = {
name : “Nicholas”,
age : 29,
job : “Software Engineer”,
sayName : function () {
alert(this.name);
}
};




var person = new Person();
alert(person instanceof Object); //true
alert(person instanceof Person); //true
alert(person.constructor == Person); //false
alert(person.constructor == Object); //true



// Prototypes are dynamic in nature. We can add methods after creating a object
//__proto__ pointer is assigned when the constructor is called

function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = [“Shelby”, “Court”];
    }
    Person.prototype = {
    constructor: Person,
    sayName : function () {
    alert(this.name);
    }
    };
    var person1 = new Person(“Nicholas”, 29, “Software Engineer”);
    var person2 = new Person(“Greg”, 27, “Doctor”);
    person1.friends.push(“Van”);
    alert(person1.friends); //”Shelby,Court,Van”
    alert(person2.friends); //”Shelby,Court”
    alert(person1.friends === person2.friends); //false
    alert(person1.sayName === person2.sayName); //true



    function Person(name, age, job){
        //properties
        this.name = name;
        this.age = age;
        this.job = job;
        //methods
        if (typeof this.sayName != “function”){
        Person.prototype.sayName = function(){
        alert(this.name);
        };
        }
        }
        var person = new Person(“Nicholas”, 29, “Software Engineer”);
        person.sayName();


        