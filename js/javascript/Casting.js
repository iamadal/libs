/*
 * Type casting Operations 
 * Datatype: Number,String,Boolean,null,undefined and Object
 */

 /* empty string */
 var a = "";
 /* string holding space - non empty */
var b = " ";
/* String with some value */
var c = "I am also non empty"
/* Numbers */
var d = 12;
var e = 12.3;
var f = NaN;

/* Any Object Object */
var g = new Object()

/* no reference */
var h = null;
/* N/A with undefined */


/* Casting Operation with Boolean()  */
 console.log("Empty String :"    +Boolean(a)); /* Return false */
 console.log("Number: "+Boolean(b));  /* Return true */
 console.log("Number:  "+Boolean(d));  /* Return true */
 console.log("Number:  "+Boolean(e));  /* Return true */
 console.log("NaN:  "+Boolean(f));  /* Return False */
 console.log("Any Object:  "+Boolean(g));  /* Return True */
 console.log("Empty Object:  "+Boolean(h));  /* Return False */

 /* The casting Opreation is important because if conditinal statements executes if the conditon is true */

 if(d) { console.log(d)} // Prints result because codition is true

 /* Casting Numbers */
 /* Using Number() Method we can convert the value to numbers 
  * if boolena value is found then true = 1 and false = 0 are considered
  * When applid to null only zero is returen
  *  
  */

var i = true;
var j = false;
var k = NaN;
var l = null;
var m = undefined;

console.log(Number(i)) // 12
console.log(Number(j)) // 1
console.log(Number(k)) // NaN
console.log(Number(l)) // 0
console.log(Number(m)) // NaN

 /* Casting Numbers - from Strings */

  var n = "String"; //NaN
  var o = ""; // 0
  var p = " "; //NaN
  var q = "01"; // 1 Leading zero is ignoored
  var r = "12.2" // 12.2

/* Casting Numbers from Object 
 * valueOf Method is called and then according to previous method
 * value is converted. if conversion return NaN then toString Metheod is called
 * Converting String to numbers use parseInt() or parseFloat()
 */

var num1 = Number('Hello world!'); //NaN
var num2 = Number(""); //0
var num3 = Number("000011"); //11
var num4 = Number(true); //1

/* casting using  parseInt and ParseFloat */

var num10 = parseInt("1234blue"); //1234
var num20 = parseInt(""); //NaN
var num30 = parseInt("0xA"); //10 - hexadecimal
var num40 = parseInt(22.5); //22
var num50 = parseInt("070"); //56 - octal
var num60 = parseInt("70"); //70 - decimal
var num70 = parseInt("0xf"); //15 - hexadecimal

/* Explicitly base definition */

var num11 = parseInt("0xAF", 16); //175 - Parsing as Hexadecimal Number
var num12 = parseInt("AF", 16); //175
var num21 = parseInt("AF"); //NaN

var num13 = parseInt("10", 2); //Parse as Binary
var num23 = parseInt("10", 8); //8 - parsed as octal
var num33 = parseInt("10", 10); //10 - parsed as decimal
var num43 = parseInt("10", 16); //16 - parsed as hexadecimal

var num14 = parseInt("010"); //8 - parsed as octal
var num24 = parseInt("010", 8); //8 - parsed as octal
var num34 = parseInt("010", 10); //10 - parsed as decimal

var num15 = parseFloat("1234blue"); //1234 - integer
var num25 = parseFloat("0xA"); //0
var num35 = parseFloat("22.5"); //22.5
var num45 = parseFloat("22.34.5"); //22.34
var num55 = parseFloat("0908.5"); //908.5
var num65 = parseFloat("3.125e7"); // Scienctific form

/* Operation on String - using toString We can convert any value to string */

var str ='Adal' // Valid
var ssr = "Adal" // Valid and Both are equal

var num = 10;
console.log(num.toString()); //”10”
console.log(num.toString(2)); //”1010”
console.log(num.toString(8)); //”12”
console.log(num.toString(10)); //”10”
console.log(num.toString(16)); //”a”


var value1 = 10;
var value2 = true;
var value3 = null;
var value4;

console.log(String(value1)); //”10”
console.log(String(value2)); //”true”
console.log(String(value3)); //”null”
console.log(String(value4)); //”undefined”

/* Object Type */

var obj2  = new Object; // Valid but not recommmended
var Obj1  = new Object(); // Recommended

/*
 * Object() is Base object in ECMAScript
 * All Objects are inherited from this Object.
 * Browser has Global Object window
 * nodejs has global object exports
 * all Object have following property(variable) and method;
 * constructor() - the function that is used to create the Object ****
 * obj1.hasOwnProperty("propertyName") : Checking given property exist in thge Object
 * isPrototpeOf() discussed later
 * propertyIsEnumerable() - Check if the for-in loop applies
 * toString() - Return a String Representing the Object
 * valueOf() Return Number , Boolean equivalent of that number
 * 
 */

 















  