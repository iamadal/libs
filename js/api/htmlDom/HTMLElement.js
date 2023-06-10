// HTMLElement
// EventTarget << Node << Element << HTMLElement

// Properties

//Inherits properties from its parent, Element, and implements those from DocumentAndElementEventHandlers, GlobalEventHandlers, and TouchEventHandlers.

HTMLElement.accessKey //Is a DOMString representing the access key assigned to the element.
HTMLElement.accessKeyLabel // Read only Returns a DOMString containing the element's assigned access key.
HTMLElement.attributeStyleMap //Read only Is a StylePropertyMap representing the declarations of the element's style attribute.
HTMLElement.contentEditable //Is a DOMString, where a value of true means the element is editable and a value of false means it isn't.
HTMLElement.isContentEditable //Read only Returns a Boolean that indicates whether or not the content of the element can be edited.
HTMLElement.contextMenu //Is a HTMLMenuElement representing the contextual menu associated with the element. It may be null.
HTMLElement.dataset Read only //Returns a DOMStringMap with which script can read and write the element's custom data attributes (data-*) .
HTMLElement.dir //Is a DOMString, reflecting the dir global attribute, representing the directionality of the element. Possible values are "ltr", "rtl", and "auto".
HTMLElement.draggable //Is a Boolean indicating if the element can be dragged.
HTMLElement.enterkeyhint //Is a DOMString defining what action label (or icon) to present for the enter key on virtual keyboards.
HTMLElement.hidden //Is a Boolean indicating if the element is hidden or not.
HTMLElement.inert //Is a Boolean indicating whether the user agent must act as though the given node is absent for the purposes of user interaction events, in-page text searches ("find in page"), and text selection.
HTMLElement.innerText //Represents the "rendered" text content of a node and its descendants. As a getter, it approximates the text the user would get if they highlighted the contents of the element with the cursor and then copied it to the clipboard.
HTMLElement.itemScope  //Is a Boolean representing the item scope.
HTMLElement.itemType //Read only Returns a DOMSettableTokenList…
HTMLElement.itemId //Is a DOMString representing the item ID.
HTMLElement.itemRef //Read only Returns a DOMSettableTokenList…
HTMLElement.itemProp //Read only Returns a DOMSettableTokenList…
HTMLElement.itemValue //Returns a Object representing the item value.
HTMLElement.lang //Is a DOMString representing the language of an element's attributes, text, and element contents.
HTMLElement.noModule //Is a Boolean indicating whether an import script can be executed in user agents that support module scripts.
HTMLOrForeignElement.nonce //Returns the cryptographic number used once that is used by Content Security Policy to determine whether a given fetch will be allowed to proceed.
HTMLElement.offsetHeight //Read only Returns a double containing the height of an element, relative to the layout.
HTMLElement.offsetLeft //Read only Returns a double, the distance from this element's left border to its offsetParent's left border.
HTMLElement.offsetParent //Read only Returns a Element that is the element from which all offset calculations are currently computed.
HTMLElement.offsetTop //Read only Returns a double, the distance from this element's top border to its offsetParent's top border.
HTMLElement.offsetWidth //Read only Returns a double containing the width of an element, relative to the layout.
HTMLElement.properties //Read only Returns a HTMLPropertiesCollection…
HTMLElement.spellcheck //Is a Boolean that controls spell-checking. It is present on all HTML elements, though it doesn't have an effect on all of them.
HTMLElement.style //Is a CSSStyleDeclaration representing the declarations of the element's style attribute.
HTMLOrForeignElement.tabIndex //Is a long representing the position of the element in the tabbing order.
HTMLElement.title //Is a DOMString containing the text that appears in a popup box when mouse is over the element.
HTMLElement.translate  //Is a Boolean representing the translation.



//Event handlers

//Most event handler properties, of the form onXYZ, are defined on the
//DocumentAndElementEventHandlers, GlobalEventHandlers or TouchEventHandlers
//interfaces and implemented by HTMLElement. In addition, the following
//handlers are specific to HTMLElement.

HTMLElement.oncopy //Returns the event handling code for the copy event (bug 280959).
HTMLElement.oncut //Returns the event handling code for the cut event (bug 280959).
HTMLElement.onpaste //Returns the event handling code for the paste event (bug 280959).
TouchEventHandlers.ontouchstart //Returns the event handling code for the touchstart event.
TouchEventHandlers.ontouchend //Returns the event handling code for the touchend event.
TouchEventHandlers.ontouchmove //Returns the event handling code for the touchmove event.
TouchEventHandlers.ontouchenter //Returns the event handling code for the touchenter event.
TouchEventHandlers.ontouchleave //Returns the event handling code for the touchleave event.
TouchEventHandlers.ontouchcancel //Returns the event handling code for the touchcancel event.






//Methods
//Inherits methods from its parent, Element, and implements those from DocumentAndElementEventHandlers, GlobalEventHandlers, HTMLOrForeignElement and TouchEventHandlers.

HTMLElement.attachInternals() //Attaches an ElementInternals instance to the custom element.
HTMLOrForeignElement.blur() //Removes keyboard focus from the currently focused element.
HTMLElement.click() //Sends a mouse click event to the element.
HTMLOrForeignElement.focus() //Makes the element the current keyboard focus.

// Events

// Listen to these events using addEventListener() or by assigning an event
// listener to the oneventname property of this interface.


// invalid
// Fired when an element does not satisfy its constraints during constraint validation.
// Also available via the oninvalid property.




// Animation events

// animationcancel
// Fired when an animation unexpectedly aborts.
// Also available via the onanimationcancel property.
// animationend
// Fired when an animation has completed normally.
// Also available via the onanimationend property.
// animationiteration
// Fired when an animation iteration has completed.
// Also available via the onanimationiteration property.
// animationstart
// Fired when an animation starts.
// Also available via the onanimationstart property.

// Input events

// beforeinput
// Fired when the value of an <input>, <select>, or <textarea> element is about to be modified.
// input
// Fired when the value of an <input>, <select>, or <textarea> element has been changed.
// Also available via the oninput property.
// change
// Fired when the value of an <input>, <select>, or <textarea> element has been changed and committed by the user. Unlike the input event, the change event is not necessarily fired for each alteration to an element's value.


// Pointer events


// gotpointercapture
// Fired when an element captures a pointer using setPointerCapture().
// Also available via the ongotpointercapture property.
// lostpointercapture
// Fired when a captured pointer is released.
// Also available via the onlostpointercapture property.
// pointercancel
// Fired when a pointer event is canceled.
// Also available via the onpointercancel property.
// pointerdown
// Fired when a pointer becomes active.
// Also available via the onpointerdown property.
// pointerenter
// Fired when a pointer is moved into the hit test boundaries of an element or one of its descendants.
// Also available via the onpointerenter property.
// pointerleave
// Fired when a pointer is moved out of the hit test boundaries of an element.
// Also available via the onpointerleave property.
// pointermove
// Fired when a pointer changes coordinates.
// Also available via the onpointermove property.
// pointerout
// Fired when a pointer is moved out of the hit test boundaries of an element (among other reasons).
// Also available via the onpointerout property.
// pointerover
// Fired when a pointer is moved into an element's hit test boundaries.
// Also available via the onpointerover property.
// pointerup
// Fired when a pointer is no longer active.
// Also available via the onpointerup property.

// Transition events


// transitioncancel
// Fired when a CSS transition is canceled.
// Also available via the ontransitioncancel property.
// transitionend
// Fired when a CSS transition has completed.
// Also available via the ontransitionend property.
// transitionrun
// Fired when a CSS transition is first created.
// Also available via the ontransitionrun property.
// transitionstart
// Fired when a CSS transition has actually started.
// Also available via the ontransitionstart property.