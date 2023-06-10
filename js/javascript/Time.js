var start = new Date()

let sum = 0;
for(let i=0;i<=10000000;i++) sum=sum+i*i*i;

console.log((new Date()-start)/1000 +"s Executed "+sum);

/**
 * 01. Finding Execution Time
 * 02. First Start variable store the execution star time
 * 03. When execution is finish we create new time object which hold the current time
 *     We must Declare is such a way that has been given
 *     now Subtract and get execution time in milli seconds. /1000 to get values in second
 * 04. Calling a function inside a loop with cost more time. to save time use static calculation.
 *     
 */