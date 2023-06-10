/**
 * 01. Set data Structure
 * 02. A Set is a collection of unique values of any data type. 
 */

let set1 = new Set();
let set2 = new Set("Hello!!!");

let set = new Set("Hello!!!");
set.add(12); //add 12
console.log(set.has("!")); //check if value exists
console.log(set.size);
set.delete(12); //delete 12
console.log(...set);
set.clear(); //delete all values

/**
 * true
6
H e l o !
 */

