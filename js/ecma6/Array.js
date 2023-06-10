/**
 * 01. 
 */

 // Creating array from an itratble object
let str = "0123";
let obj = {number: 1};
let arr = Array.from(str, function(value){
return parseInt(value) + this.number;
}, obj);
console.log(arr);

// Array.of() is alternative to Array() constructor
let arr1 = new Array(2);
let arr2 = new Array.of(2);
console.log(arr1[0], arr1.length);
console.log(arr2[0], arr2.length);

// Array Fill

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];
let arr3 = [1, 2, 3, 4];
let arr4 = [1, 2, 3, 4];
let arr5 = [1, 2, 3, 4];

arr1.fill(5);
arr2.fill(5, 1, 2);
arr3.fill(5, 1, 3);
arr4.fill(5, -3, 2);
arr5.fill(5, 0, -2);

// Knowing Your Library[ 46 ]

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);

/**
 * Output is:
5,5,5,5
1,5,3,4
1,5,5,4
1,5,3,4
5,5,3,4
 */

var x = 12;
var arr = [11, 12, 13];
var result = arr.find(function(value, index, array){
if(value == this)
{
return true;
}
}, x);
console.log(result); //Output "12"

// 

let x = 12;
let arr = [11, 12, 13];
let result = arr.findIndex(function(value, index, array){
if(value == this)
{
return true;
}
}, x);
console.log(result); Output "1"


// copyWithin

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];
let arr3 = [1, 2, 3, 4, 5];
let arr4 = [1, 2, 3, 4, 5];

arr1.copyWithin(1, 2, 4);
arr2.copyWithin(0, 1);


arr3.copyWithin(1, -2);
arr4.copyWithin(1, -2, -1);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

/**
Output is:
1,3,4,4,5
2,3,4,5,5
1,4,5,4,5
1,4,3,4,5
 */

let arr = ['a', 'b', 'c'];
let entries = arr.entries();
let keys = arr.keys();
let values = arr.values();
console.log(...entries);
console.log(...keys);
console.log(...values);

/**
 * 0,a 1,b 2,c
0 1 2
a b c
 */


 