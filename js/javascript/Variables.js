const print = (msg)=> console.log(msg);

/* First Way of Variable Declations  */
 
var a = 1;
var b = 2;
var c = 4;

/* 2nd Way of Variable Declations  */

var a = 1,
    b = 3,
    c = 4;

/* Data Types  */

/* inititalized but not used. not recommended to assign undefined values*/
var d = undefined;  
/* means holding no reference value. note: undefined == null but they have very different use 
   use null when Object is expected but not availabe yet
*/
var e = null;      
/* String */
var f = "Adal";
/* Numbers intger and Floating point numbers */
var g = 123;        
var h = 12.34; 
var n = .1 ; // Not recommended
var o = 10. ;// Converted to int
var p = 12.25 // Recommeded form
var k = 056;  // Octal Constant - Converted to Int
var l = 078;  // Outof range(0-7) so interpreted as 78
var q = 2.3E-94; // Scientific form

var m = 0x12; // Hex Constant Numbers 0x Converted to Int

/* Boolean values */
var i = true;
var j = false;  

/* NaN
 * When calculation does not produce a number NaN is retured
 * NaN is not Equals to any Value NaN == NaN   returns false
 * isNaN() function try to convert any value to number. if fails then Print True otherwise print False
 * isNaN(NaN)  is True
 * isNaN() Function can also be Applied to Object. First valueof() try to convert return value to numbers if fails then toString() executed
 * to Numbers
 */



/* Output Operations */



print(q); 
print(k); 
print(typeof i) 
