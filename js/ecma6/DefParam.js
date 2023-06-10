/**
 * Dafault Parameters.
 * 01. if undefined is passed then default value will be passed as arguments
 * 02. We can also pass expression as default parameters like z = 2+3
 */

 function myFunction(x=1,y=2,z=3){
     console.log(x,y,z);
 }

 myFunction();   // Print 1 2 3
 myFunction(7,6) // Print 7 6 z=3
 myFunction(undefined,7,8) // Print x=1, 7 8 

