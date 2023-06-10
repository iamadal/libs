/* Worker The Worker interface of the Web Workers API represents a background
task that can be created via script, which can send messages back to its
creator. Creating a worker is done by calling the
Worker("path/to/worker/script") constructor.

Workers may themselves spawn new workers, as long as those workers are hosted
at the same origin as the parent page. (Note: nested workers are not yet
implemented in WebKit).

Not all interfaces and functions are available to scripts inside a Worker.
Workers may use XMLHttpRequest for network communication, but its responseXML
and channel attributes are always null. (fetch is also available, with no such
restrictions.) */



// Constructor: Worker()

// Inherit Properties from its parent

// Event handlers

Worker.onerror //An EventListener called whenever an ErrorEvent of type error event occurs.
Worker.onmessage //An EventListener called whenever a MessageEvent of type message occurs — i.e. when a message is sent to the parent document from the worker via DedicatedWorkerGlobalScope.postMessage. The message is stored in the event's data property.
Worker.onmessageerror //Is an event handler representing the code to be called when the messageerror event is raised.


// Methods

Worker.postMessage() //Sends a message — consisting of any JavaScript object — to the worker's inner scope.
Worker.terminate()  //Immediately terminates the worker. This does not let worker finish its operations; it is halted at once. ServiceWorker instances do not support this method.

// Events
message // Fires when the worker's parent receives a message from that worker.Also available via the onmessage property.
messageerror //Fires when a Worker object receives a message that can't be deserialized.Also available via the onmessageerror property.
rejectionhandled //Fires every time a Promise rejects, regardless of whether or not there is a handler to catch the rejection.Also available through the onrejectionhandled event handler property.
unhandledrejection //Fires when a Promise rejects with no handler to catch the rejection.Also available using the onunhandledrejection event handler property.


// Examples

// The following code snippet creates a Worker object using the Worker() constructor, then uses the worker object:

var myWorker = new Worker('/worker.js');
var first = document.querySelector('input#number1');
var second = document.querySelector('input#number2');

first.onchange = function() {
  myWorker.postMessage([first.value, second.value]);
  console.log('Message posted to worker');
}


// https://github.com/mdn/simple-web-worker/blob/gh-pages/worker.js

