function Person(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.sayHello = function(){
        console.log("Name: "+name+" Age: "+age+" Salary: "+salary);
    }
}

/**
 * No Object are created Explicitly
 * No return statements
 * Where this is an Object. All Properties and method are assigned to "this" Object
 * We Return "this" Object
 * Convernsion is to start the constructor name as Uppercase letter
 * 
 * Create more function to Test the nature of this object.
 * "this" is a global pointer Object
 *
 *  Constructors defined in this manner are defined on the Global object (the window
 * object in web browsers).
 */

 const m = new Person('Sam',29,'Software');
 console.log(m.sayHello());








 //use as a constructor
var person = new Person("Nicholas", 29, "Software Engineer");
person.sayHello(); //"Nicholas"
//call as a function
Person("Greg", 27, "Doctor"); //adds to window
window.sayName(); //"Greg"
//call in the scope of another object
var o = new Object();
Person.call(o, "Kristen", 25, "Nurse");
o.sayName(); //"Kristen"




/**
 * The first part of this example shows the typical use of a constructor, to create a new object via the
new operator. The second part shows what happens when the Person() function is called without
the new operator: the properties and methods get added to the window object. Remember that the this
object always points to the Global object ( window in web browsers) when a function is called in the
global scope. So after the function is called, the sayName() method can be called on the window object
and it will return " Greg ” . The Person() function can also be called within the scope of a particular
object using call() (or apply() ). In this case, it ’ s called in the scope of the object o , which then gets
assigned all of the properties and the sayName() method.
 */



function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = new Function("console.log(this.name)"); //logical equivalent
}

alert(person1.sayName == person2.sayName); //false - Thus cosume more memory

/**
 * It doesn ’ t make sense to have two instances of Function that do the same thing, especially when the
this object makes it possible to avoid binding functions to particular objects until runtime. It ’ s possible
to work around this limitation by moving the function definition outside of the constructor as follows:
 */

function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
    }
    function sayName(){
    alert(this.name);
    }
    
    /**
     * In this example, the sayName() function is defined outside the constructor. Inside the constructor, the
sayName property is set equal to the global sayName() function. Since the sayName property now
contains just a pointer to a function, both person1 and person2 end up sharing the sayName() function
that is defined in the global scope. This solves the problem of having duplicate functions that do the
same thing, but also creates some clutter in the global scope by introducing a function that can
realistically be used only in relation to an object. If the object needed multiple methods, that would mean
multiple global functions, and all of a sudden the custom reference type definition is no longer nicely
grouped in the code. These problems are addressed by using the prototype pattern.
     */


     