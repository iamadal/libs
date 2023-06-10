/* EventTarget is a DOM interface implemented by objects that can receive
events and may have listeners for them.

Element, Document, and Window are the most common event targets, but other
objects can be event targets, too. For example XMLHttpRequest, AudioNode,
AudioContext, and others.

Many event targets (including elements, documents, and windows) also support
setting event handlers via onevent properties and attributes. */

// This is a Base Class. Constructor: EventTarget()



//Methods
EventTarget.addEventListener() //Registers an event handler of a specific event type on the EventTarget.
EventTarget.removeEventListener() //Removes an event listener from the EventTarget.
EventTarget.dispatchEvent() //Dispatches an event to this EventTarget


// Example: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget

var EventTarget = function() {
  this.listeners = {};
};

EventTarget.prototype.listeners = null;
EventTarget.prototype.addEventListener = function(type, callback) {
  if (!(type in this.listeners)) {
    this.listeners[type] = [];
  }
  this.listeners[type].push(callback);
};

EventTarget.prototype.removeEventListener = function(type, callback) {
  if (!(type in this.listeners)) {
    return;
  }
  var stack = this.listeners[type];
  for (var i = 0, l = stack.length; i < l; i++) {
    if (stack[i] === callback){
      stack.splice(i, 1);
      return;
    }
  }
};

EventTarget.prototype.dispatchEvent = function(event) {
  if (!(event.type in this.listeners)) {
    return true;
  }
  var stack = this.listeners[event.type].slice();

  for (var i = 0, l = stack.length; i < l; i++) {
    stack[i].call(this, event);
  }
  return !event.defaultPrevented;
};