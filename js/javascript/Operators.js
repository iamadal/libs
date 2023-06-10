const print = (msg) => console.log(msg);
/*--------------------------------------*/
/*
 * When used on Object, Valueof and toString()
 * Methods are called to handle the situation
 */

 /* Unary Operator = Operand = 1 */

 var a = 1;
 var b = 3;
 var c = 4;

 print(a++); // Print 1 then incease the value by 1 
 print(++a); // a = 2 now add 1 with it and print 3

 print(b--); // Print then Decrease
 print(--b); // Decrease then print


var age = 29;
var anotherAge = --age + 2; // Unary minus has higher precidance. thus --age executed first
print(age); //outputs 28
print(anotherAge); //outputs 30

var num1 = 2;
var num2 = 20;
var num3 = --num1 + num2; //equals 21
var num4 = num1 + num2; //equals 21

var num11 = 2;
var num21 = 20;
var num31 = num1-- + num2; //equals 22
var num41 = num1 + num2; //equals 21

/*
 * They can also be applied to Object , Boolean value
 */

var s1 = "2";
var s2 = "z";
var b = false;
var f = 1.1;
var o = {
valueOf: function() {
return -1;
}
};
s1++; //value becomes numeric 3
s2++; //value becomes NaN
b++; //value becomes numeric 1
f--; //value becomes 0.10000000000000009 (due to floating-point inaccuracies)
o--; //value becomes numeric -2


var s1 = "01";
var s2 = "1.1";
var s3 = "z";
var b = false;
var f = 1.1;
var o = {
valueOf: function() {
return -1;
}
};
s1 = +s1; //value becomes numeric 1
s2 = +s2; //value becomes numeric 1.1
s3 = +s3; //value becomes NaN
b = +b; //value becomes numeric 0
f = +f; //no change, still 1.1
o = +o; //value becomes numeric -1
 

var s1 = "01";
var s2 = "1.1";
var s3 = "z";
var b = false;
var f = 1.1;
var o = {
valueOf: function() {
return -1;
}
};
s1 = -s1; //value becomes numeric -1
s2 = -s2; //value becomes numeric -1.1
s3 = -s3; //value becomes NaN
b = -b; //value becomes numeric 0
f = -f; //change to -1.1
o = -o; //value becomes numeric 1





/* Bitwise Operator - All numbers are IEEE 754-64 
 * Calculation will be done as 32-bit then converted again 64-bit
 * Singned Numbers use 31 Bit to store number
 * Calculation will use 2's Complement for negative numbers
 * Where register size is 32-bit
 * bitwise Operation is very fast
 */

var nums = -18;
print(nums.toString(2)); //”-10010”

var num1 = 25; //binary 00000000000000000000000000011001
var num2 = ~num1; //binary 11111111111111111111111111100110
print(num2); //-26

var result1 = 25 & 3;
print(result1); //1   Compare bit by bit

var result2 = 25 | 3;
print(result2); //27

var result3 = 25 ^ 3;
print(result3); //26 XOR

var oldValue = 2; //equal to binary 10(Alternate of Multiplication)
var newValue = oldValue << 5; //Signed left shift equal to binary 10 00000 which is decimal 64(2^5)

var oldValue1 = 64; //equal to binary 1000000(Alternate of Division)
var newValue1 = oldValue1 >> 5; //equal to binary 10 which is decimal 2

var oldValue2 = 64; //Unsigned Right Shift-equal to binary 1000000
var newValue2 = oldValue2 >>> 5; //equal to binary 10 which is decimal 2

var oldValue3 = -64; //equal to binary 11111111111111111111111111000000
var newValue3 = oldValue3 >>> 5; //equal to decimal 134217726(Because Number is Considered +)

/*  Boolean Operator */

/* Logical NOT(!)
 * Object - false
 * Empty String - true
 * Nonempty String - false
 * 0 - true
 * infinity - false
 * null - true
 * NaN - true
 * undefined - true
 * We can convert a value to boolean equivalent
 */

print(!false); //true
print(!"blue"); //false
print(!0); //true
print(!NaN); //true
print(!""); //true
print(!12345); //false

print(!!"blue"); //true
print(!!0); //false
print(!!NaN); //false
print(!!""); //false
print(!!12345); //true


/* Logical AND(!)
 * Object - Obj1 && res -> return res
 * Object - res && Obj2 -> if Obj2 is returned only if res is true
 * Object - Obj1 && Obj2 -> return Obj2
 * null && any -> reutrn null Same rules for NaN and undefined
 * any && null -> return null
 * AND is called a short Circuit Operator
 * if first Operand determine the result
 * then the seconde operand is never executed
 * if Both are true return true else false
 */

var found1 = true;
var result1 = (found1 && someUndefinedVariable1); //error occurs here
alert(result1); //this line never executes

var found2 = false;
var result2 = (found2 && someUndefinedVariable); //no error
alert(result2); //works


/* Logical OR(!)
 * Object - Obj1 || res -> return Obj1
 * Object - res || Obj2 -> if Obj2 is returned only if res is false
 * Object - Obj1 || Obj2 -> return Obj1
 * null || any -> reutrn null Same rules for NaN and undefined
 * any || null -> return null
 * AND is called a short Circuit Operator
 * if first Operand determine the result
 * then the seconde operand is never executed
 * if anyone is true return true else false
 */

var found3 = true;
var result3 = (found3 || someUndefinedVariable3); //no error
print(result3); //works

var found4 = false;
var result4 = (found4 || someUndefinedVariable4); //error occurs here
alert(result4); //this line never executes

/* Multiplicative operator */
/*
 * NaN*any = NaN
 * infinity*0 = NaN
 * infinity/infinity = NaN
 * Both Operand are not number then they are converted to Number and apply rules
 */


/* Division operator / */
/*
 * NaN/any = NaN
 * Infinity/Infinity = NaN
 * zero/zero = NaN
 * either operabd is not number then conversion occur and rules apply 
 */

/* Moduluas operator % */

/* + Operator  */
/*
 * NaN+0 = NaN
 * +0+0+ = +0
 * -0+0 = +0
 * -0+-0=-0
 * Both are string: 2nd String is concatenated to  the first
 * if one operand is string then other will be converted to string and
 * concatenation occurs
 */

var result1 = 5 + 5; //two numbers
alert(result1); //10
var result2 = 5 + "5"; //a number and a string
alert(result2); //”55”



var num13 = 5;
var num23 = 10;
var message = "The sum of 5 and 10 is"  + num13 + num23;
print(message); //”The sum of 5 and 10 is 510”


var num13 = 5;
var num23 = 10;
var message = "The sum of 5 and 10 is"  + (num13 + num23);
print(message); //”The sum of 5 and 10 is 15”



/* - Operator  */
/*
 * if either operand is string , Boolean null or undefined is conveted
 * to a number using Number() and apply previous rules
 * if either operand is object then valueof() method is called to get
 * numeric value if the value is NaN then NaN returned
 * if the Object Does not have a value of defined then toString() Method is called
 * 
 * 
 */

var result1 = 5 - true; //4 because true is converted to 1
var result2 = NaN - 1; //NaN
var result3 = 5 - 3; //2
var result4 = 5 - ""; //5 because “” is converted to 0
var result5 = 5 - "2"; //3 because “2” is converted to 2
var result6 = 5 - null; //5 because null is converted to 0



var result15 = 5 > 3; //true
var result25 = 5 < 3; //false

/* Relational Operator Rules */
/*
 * Both are number - perform Numeric Operation
 * Both are String - Compare with Character Codec
 * if one operand is number then convert to number and perform Logical Operation
 * if an operand is Object then valueOf() method is callled and 
 * use the result to compare
 * if the either operator is bollean then convert to number and compare them
 * Uppercase and Lowercase differently Treated
 * 
 */


var result = "Brick" < "alphabet"; //true
var result = "Brick".toLowerCase() << "alphabet".toLowerCase(); //false 

var result = "23" < "3"; //true - both are String ASCII -2 -50 and ASCII-3 51
var result = "23" < 3; //False - both are not String

var result = "a" < 3; 

var result1 = NaN < 3; //false
var result2 = NaN >= 3; //false

/* 
 * Equal Operator
 *
 * if an opeand is boolean value then convert it into numeric value and compare
 * String == Number   Try to convert String into number and compare it
 * if either operator is Object then valueOf method is called and retrieve a primitive
 * value to compare according to the rules
 * null == undefined
 * null and undefined cannot be converted to other type
 * NaN == any return false
 * Obj1==Obj2 Compare that they are same or not 
 * 
 * null == undefined // Ture
 * "NaN" == NaN //false
 * NaN !=NaN //True
 * false == 0 //true
 * true == 1 // true
 * undefined ==0 false
 * null == 0 false
 * "5" == 5 true
 * === means equal without conversion - identical value and tyes are same
 */

var result17 = ("55" == 55); //true - equal because of conversion
var result28 = ("55" === 55); //false - not equal because different data types

var result18 = ("55" != 55); //false - equal because of conversion
var result28 = ("55" !== 55); //true - not equal because different data types

var variable = boolean_expression ? true_value : false_value;

var num23 = (5, 1, 4, 8, 0); //num becomes 0


/*
 * Short Hands = sign always in the right side
 * a =+a
 * a=*a
 * a=/a
 * a>>=a so on
 * 
 */












