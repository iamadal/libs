/**
 * Implementing Factory Method
 */

 function Person(name,age,salary){  // This Function return an Obj - used by jQuery and Other Libs 
     var Obj = new Object();
     Obj.name = name;
     Obj.age = age;
     Obj.salary = salary;
     Obj.Factory = function(){
         console.log("Called from Factory");
     }
     return Obj;
 }

 var m1 = new Person("Salam",23,1200); // Create Object using Faatory



