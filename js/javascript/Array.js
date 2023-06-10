/*
01. Array Object

Arrays can contain a maximum of 4,294,967,295 items, which should be plenty
for almost all programming needs. If you try to add more than that number, an
exception occurs. Trying to create an array with an initial size approaching this
maximum may cause a long - running script error.

If an item in the array is null or undefined , it is represented by an empty string in
the result of join() , toLocaleString() , toString() , and valueOf() .

If either the start or end position of slice() is a negative number, then the
number is subtracted from the length of the array to determine the appropriate
locations. For example, calling slice( - 2, - 1) on an array with five items is the
same as calling slice(3, 4) . If the end position is smaller than the start, then an
empty array is returned.
*/

var color = Array() //Type-1
var calor = Array(10) //Type-2
var calar = Array("RED", "GREEN", "BLUE");

var colors = ["red", "blue", "green"]; //creates an array with three strings
var names = []; //creates an empty array
var values = [1, 2,]; //AVOID! Creates an array with 2 or 3 items
var options = [, , , , ,]; //AVOID! creates an array with 5 or 6 it

var colors = ["red", "blue", "green"]; //define an array of strings
console.log(colors[0]); //display the first item
colors[2] = "black"; //change the third item
colors[3] = "brown"; //add a fourth item

var colors = ["red", "blue", "green"]; //define an array of strings
console.log(colors[0]); //display the first item
colors[2] = "black"; //change the third item
colors[3] = "brown"; //add a fourth item

var colors = ["red", "blue", "green"]; //creates an array with three strings
colors.length = 2;
console.log(colors[2]); //undefined


var colors = ["red", "blue", "green"]; //creates an array with three strings
colors.length = 4;
console.log(colors[3]); //undefined


var colors = ["red", "blue", "green"]; //creates an array with three strings
colors[colors.length] = "black"; //add a color (position 3)
colors[colors.length] = "brown"; //add another color (position 4)


var colors = ["red", "blue", "green"]; //creates an array with three strings
colors[99] = "black"; //add a color (position 99)
console.log(colors.length); //100

var colors = ["red", "blue", "green"]; //creates an array with three strings
console.log(colors.toString()); //red,blue,green - conversion
console.log(colors.valueOf()); //red,blue,green
console.log(colors); //red,blue,green



var person1 = {
    toLocaleString: function () {
        return "Nikolaos";
    },
    toString: function () {
        return "Nicholas";
    }
};
var person2 = {
    toLocaleString: function () {
        return "Grigorios";
    },
    toString: function () {
        return "Greg";
    }
};
var people = [person1, person2];
console.log(people); //Nicholas,Greg
console.log(people.toString()); //Nicholas,Greg
console.log(people.toLocaleString()); //Nikolaos,Grigorios\

var colors = ["red", "green", "blue"];
console.log(colors.join(", ")); //red,green,blue
console.log(colors.join("||")); //red||green||blue


var colors = new Array(); //create an array - Stack
var count = colors.push("red", "green"); //push two items
console.log(count); //2
count = colors.push("black"); //push another item on
console.log(count); //3
var item = colors.pop(); //get the last item
console.log(item); //"black"
console.log(colors.length); //2

var colors = ["red", "blue"];
colors.push("brown"); //add another item
colors[3] = "black"; //add an item
console.log(colors.length); //4
var item = colors.pop(); //get the last item 
console.log(item); //"black"



var colors = new Array(); //create an array - Queue
var count = colors.push("red", "green"); //push two items
console.log(count); //2
count = colors.push("black"); //push another item on
console.log(count); //3
var item = colors.shift(); //get the first item
console.log(item); //"red"
console.log(colors.length); //2



var colors = new Array(); //create an array
var count = colors.unshift("red", "green"); //push two items
console.log(count); //2
count = colors.unshift("black"); //push another item on
console.log(count); //3
var item = colors.pop(); //get the first item
console.log(item); //"green"
console.log(colors.length); //2


var values = [1, 2, 3, 4, 5];
values.reverse();
console.log(values); //5,4,3,2,1


var values = [0, 1, 5, 10, 15];
values.sort();
console.log(values); //0,1,10,15,5

function compare(value1, value2) {
    if (value1 < value2) {
    return -1;
    } else if (value1 > value2) {
    return 1;
    } else {
    return 0;
    }
    }

    var values = [0, 1, 5, 10, 15];
values.sort(compare);
console.log(values); //0,1,5,10,15

//Both reverse() and sort() return a reference to the array on which they were applied.

var colors = ["red", "green", "blue"];
var colors2 = colors.concat("yellow", ["black", "brown"]);
console.log(colors); //red,green,blue
console.log(colors2); //red,green,blue,yellow,black,brown



var colors = ["red", "green", "blue", "yellow", "purple"];
var colors2 = colors.slice(1);
var colors3 = colors.slice(1,4);
console.log(colors2); //green,blue,yellow,purple
console.log(colors3); //green,blue,yellow


var colors = ["red", "green", "blue"];
var removed = colors.splice(0,1); //remove the first item
console.log(colors); //green,blue
console.log(removed); //red - one item array
removed = colors.splice(1, 0, "yellow", "orange"); //insert two items at position 1
console.log(colors); //green,yellow,orange,blue
console.log(removed); //empty array
removed = colors.splice(1, 1, "red", "purple"); //insert two values, remove one
console.log(colors); //green,red,purple,orange,blue
console.log(removed); //yellow - one item array

/**
 * 1 = REPLACEMENT
 * 0 = DELETE/INSERTION
 * Splice(Position_of_item_to_Delete,Number_of_Item_to_Be_Deleted) Commands
 * DELETE: a.splice(0,2) DELETE first two Item
 * INSERT: a.splice(Position_of_item_to_Delete,)
 * REPLACE: 
 * We Get get return value from the node console. to get result type array name again and press enter
 */

