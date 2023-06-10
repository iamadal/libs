/**
 * 01. Promise/Future Pattern is used to read and write asynchronous code
 * 02. Javascript is single threaded. two pieces of script cannot run
 *     at same time. Each Website open in a tab start a single thread
 *     for downloading,parsing that is the main thread
 * 03. The main thread maintain a queue which has asynchronous task queue
 *     that can be executed one by one.
 *       * event handler
 *       * callbacks etc are task type
 * 04. WEB Worker run parallel to the main thread and When it finish executing
 *     then it simple add new event item to the queue.
 * 
 * 05. We can write async code in two ways. event patterns and callback pattern
 * 06. ajax is designed using event pattern and jQuery ajax is callback pattern
 *       
 */


 // Event drivent asynchronous code
 

// CallBack Patterns - error and success argument passing

// Promise Pattern - Code will be wrap with asynchronous code

// Based on Success and Failure

var promise = new Promise(function(resolve, reject){
    var request = new XMLHttpRequest();
    var url = "data.json";
    request.open("GET", url);
    request.addEventListener("load", function(){
    if(request.status === 200)
    {
    resolve(request.responseText);
    }
    else
    {
    reject("Server Error: " + request.status);
    }
    }, false);
    request.addEventListener("error", function(){
    reject("Cannot Make AJAX Request");
    }, false);
    request.send();
    });

 
/**
 * The executor is executed synchronously. But the executor is executing an
asynchronous operation and therefore, the executor can return before the
asynchronous operation is finished.
A Promise is always in one of these states:
• Fulfilled: If the resolve callback is invoked with a non-Promise object as
argument or no argument, then we say that the Promise is fulfilled
• Rejected: If the reject callback is invoked or an exception occurs in the
executor scope, then we say that the Promise is rejected
• Pending: If the resolve or reject callback is yet to be invoked, then we
say that the Promise is pending
• Settled: A Promise is said to be settled if it's either fulfilled or rejected,
but not pending
Once a Promise is fulfilled or rejected, it cannot be transitioned back. An attempt to
transition it will have no effect.


If the resolve callback is invoked with a Promise object as an argument,
then the Promise object is either fulfilled or rejected, depending on
whether the passed Promise object is fulfilled or rejected.


 */


 // passing promise object in a function

 var a = new Promise(function(resolve, reject){
    var b = new Promise(function(res, rej){
    rej("Reason");
    });
    resolve(b);
    });
    var c = new Promise(function(resolve, reject){
    var d = new Promise(function(res, rej){
    res("Result");
    });
    resolve(d);
    });


    /**
     * 
     * The then() method of a Promise object lets us do some task after a Promise has been
fulfilled or rejected. The task can also be another event-driven or callback-based
asynchronous operation.
The then() method of a Promise object takes two arguments, that is, the onFulfilled
and onRejected callbacks. The onFulfilled callback is executed if the Promise object
was fulfilled, and the onRejected callback is executed if the Promise was rejected.
The onRejected callback is also executed if an exception is thrown in the scope
of the executor. Therefore, it behaves like an exception handler, that is, it catches
the exceptions.
The onFulfilled callback takes a parameter, that is, the fulfillment value of the
Promise. Similarly, the onRejected callback takes a parameter, that is, the reason
of rejection.
Asynchronous Programming
[ 86 ]
The callbacks passed to the then() method are executed asynchronously.
Here is the code example to demonstrate the then() method:
var promise = new Promise(function(resolve, reject){
var request = new XMLHttpRequest();
var url = "data.json";
request.open("GET", url);
request.addEventListener("load", function(){
if(request.status === 200)
{
resolve(request.responseText);
}
else
{
reject("Server Error: " + request.status);
}
}, false);
request.addEventListener("error", function(){
reject("Cannot Make AJAX Request");
}, false);
request.send();
});
promise.then(function(value){
value = JSON.parse(value);
return value;
}, function(reason){
console.log(reason);
});
Here, if the AJAX request was successful (that is, the Promise was fulfilled),
then the onFulfilled callback is executed by passing the response text as the
argument. The onFulfilled callback converts the JSON string into the JavaScript
object. The onFulfilled callback returns the JavaScript object.
Many programmers remove the Promise object variable, and write the preceding
code in this way:
function ajax()
{
return new Promise(function(resolve, reject){
var request = new XMLHttpRequest();
var url = "data.json";
Chapter 4
[ 87 ]
request.open("GET", url);
request.addEventListener("load", function(){
if(request.status === 200)
{
resolve(request.responseText);
}
else
{
reject("Server Error: " + request.status);
}
}, false);
request.addEventListener("error", function(){
reject("Cannot Make AJAX Request");
}, false);
request.send();
});
}
ajax().then(function(value){
value = JSON.parse(value);
return value;
}, function(reason){
console.log(reason);
});
This style makes the code even easier to read. All the new JavaScript APIs that are
implemented using Promises come in this pattern.
The then() method always returns a new promise object, which resolves the return
value of the calling callback. Here is how a new promise object is returned by the
then() method:
• If the onFulfilled callback is called and there is no return statement in it,
then a new fulfilled Promise is created internally and returned.
• If the onFulfilled callback is called and we return a custom Promise, then it
internally creates and returns a new promise object. The new Promise object
resolves the custom Promise object.
• If the onFulfilled callback is called and we return something else other
than a custom Promise, then also a new Promise object is created internally
and returned. The new Promise object resolves the return value.
Asynchronous Programming
[ 88 ]
• If we pass null instead of the onFulfilled callback, then a callback is
created internally and replaced with the null . The internally created
onFulfilled returns a new fulfilled promise object. The fulfillment
value of the new promise object is same as the fulfillment value of the
parent Promise.
• If the onRejected callback is called and there is no return statement in it,
then a new rejected Promise is created internally and returned.
• If onRejected callback is called and we return a custom Promise, then it
internally creates and returns a new promise object. The new promise
object resolves the custom promise object.
• If the onRejected callback is called and we return something else other than
a custom Promise, then also a new promise object is created internally and
returned. The new promise object resolves the returned value.
• If we pass null instead of the onRejected callback, or omit it, then a callback
is created internally and is used instead. The internally created onRejected
callback returns a new rejected promise object. The reason of rejection of the
new promise object is same as the reason of rejection of the parent Promise.
In the previous code example, we haven't yet logged the retrieved data to console.
We can chain Promises to do this. And also in the previous code, we do not handle
the exceptions that might occur in the onFulfilled callback. Here is how we can
expand the code to log data and also handle exceptions of all the onFulfilled
callbacks chained:
function ajax()
{
return new Promise(function(resolve, reject){
var request = new XMLHttpRequest();
var url = "data.json";
request.open("GET", url);
request.addEventListener("load", function(){
if(request.status === 200)
{
resolve(request.responseText);
}
else
{
reject("Server Error: " + request.status);
}
}, false);
request.addEventListener("error", function(){
reject("Cannot Make AJAX Request");
Chapter 4
[ 89 ]
}, false);
request.send();
});
}
ajax().then(function(value){
value = JSON.parse(value);
return value;
}).then(function(value){
console.log(value.Name);
return value;
}).then(function(value){
console.log(value.Profession);
return value;
}).then(function(value){
console.log(value.Age);
return value;
}).then(null, function(reason){
console.log(reason);
});
In this code example, we chained multiple Promises using the then() method to
parse and log the response received by the executor of the first Promise of the chain.
Here, the last then() method is used as an exception or error handler for all the
onFulfilled methods and executors.
Here is an image that shows how the execution of multiple chained Promises work:


     */