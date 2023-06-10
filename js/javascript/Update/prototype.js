/*
 * 01. Prototyp in javascript
 * 02. Javascript prototype is responsible for creating static method and memory shared o object
 *
 *
 *
 *
 *
 *
 *
 */
 
 
 // object creation Type-1
 
 let person = {};
 
 // adding property
 
 person.name = "Monir";
 person.age  = 30;
 person.eat = function(){
	 // code
 }
 
 // If we need to create many person object more memory is require
 // so if all object share some property than memory consumption reduced
 // Creating Object uisng creational patter
 
 function Person(name,age){
	  let person = {};
 
 // adding property
 
 person.name = name;
 person.age  = age;
 person.eat = function(){
	 // code
 }
 
 
 return person;
 }
 
 
 console.dir(person);

 const m = Person('dam',12); // Calling person to create object
  
 // if we refer function new object s not createDocumentFragment
 
 let personMethod = {
	 sleep() {},
	 eat(){}
 }
 
 
  function Person(name,age){
	  let person = {};
 
 // adding property
 
 person.name = personMethod.eat;
 person.age  = age;
 person.eat = function(){
	 // code
 }
 
 
 return person;
 }
 
 
 // Object.create() 
 
   const captain = {
	   name: "gogo",
	   age: 30
   }
   
   const p = Object.create(captain); // player = {} no no element but 
   
   console.log(player.age) // try to fetch data from captain
   
   // -----------------------------------------------
   // in this approach Child can access all element from parent
   // we can use new operator to allocate memory from Object
   
   // Function is also an Object
   function test() {
	   console.dir(test.prototype); // 
   }
   
   
   // Each Object Contain an Object named prototype
   
   
   // Update 
   
   /*
   Every Object is inheited from Object()
   : sing denote object member
    01. Let explore Array Object.
	     console.dir(Array()) // Exploring the Array Constructor
		 console.dir(Array) // Exploring the Array Object - We found following methods and property
		     
			 01. Array(); Array Constructor
			 02. arguments : Object that holds array arguments
			 03. from() Each Function have its own scope and its create argument(), calller(), length, name property
			 04. isArray() same as form
			 05. length
			 06. name = Array
			 07. of()    Can be called as Array.of() Some of Property is not directly Accessible
			 08. prototype: []  // Object
	              We can think about a situation. When we need to create two array.
				  but creating two array will create different array object. thus 
				  lots of memory is wasted. if we want to share code we can access or
				  add new property on this Object. Propotype is simple an object. if we assign something to italics
				  it will be accessible to all.
				  
				Array.prototype.name = 12;
                  let m = Array(1,2,3);
                  let n = Array(2,4);

                 console.dir(m);  // Conatin name = 12 in __proto__ 
                 console.dir(n);  // Contain name = 12 in __proto__
	
	             thus all array should contain name property.
				 we can also assign function there.
				 
				 Final Spech: Prototype is a way to extend an Object
				 and create Static method
	
	
	
	
	
	*/
	
	
	
	/*
	   01. new Operator
	
	 */