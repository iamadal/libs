/**
 * mdadalkhan@gmail.com    see developer.mozilla.org
 * 
 * The Document interface represents any web page loaded in the browser
 *  and serves as an entry point into the web page's content, which is
 *  the DOM tree. The DOM tree includes elements such as <body> and <table>,
 *  among many others. It provides functionality globally to the document, 
 * like how to obtain the page's URL and create new elements in the document.
   The Document interface describes the common properties and methods for
    any kind of document. Depending on the document's type 
    (e.g. HTML, XML, SVG, …), a larger API is available: HTML documents,
    served with the "text/html" content type, also implement the
    HTMLDocument interface, whereas XML and SVG documents implement
    the XMLDocument interface.

    E = Experimental
    R = Read Only
    D = Deprecated
 */



// EventTarget << Node << Document
// constructor   Document()


// This interface also inherit properties from node and EventTarget interface


// Properties

Document.activeElement; // R -  Returns the Element that currently has focus.
Document.body // Returns the <body> or <frameset> node of the current document.
Document.characterSet // R - Returns the character set being used by the document.
Document.childElementCount // R  Returns the number of child elements of the current document.
Document.children // R  Returns the child elements of the current document.

Document.compatMode // E  R   Indicates whether the document is rendered in quirks or strict mode.
Document.contentType // E R   Returns the Content-Type from the MIME Header of the current document.
Document.doctype // R Returns the Document Type Definition (DTD) of the current document.
Document.documentElement // R  Returns the Element that is a direct child of the document. For HTML documents, this is normally the HTMLHtmlElement object representing the document's <html> element.
Document.documentURI // R  Returns the document location as a string.
Document.embeds // R  Returns a list of the embedded <embed> elements within the current document.
Document.firstElementChild  // R  Returns the first child element of the current document.
Document.fonts // Returns the FontFaceSet interface of the current document.
Document.forms // The element that's currently in full screen mode for this document.
Document.fullscreenElement // R  The element that's currently in full screen mode for this document.
Document.head // R Returns the <head> element of the current document.
Document.hidden // R Retruns a Boolean value indicating if the page is considered hidden or not
Document.images // R Return a list of the images in the current Document
Document.implementation // R  Returns the DOM implementation associated with the current document.
Document.lastElementChild // R  Returns the last child element of the current document.
Document.links // R Returns a list of all the hyperlinks in the document.
Document.pictureInPictureElement // R  Returns the Element currently being presented in picture-in-picture mode in this document.
Document.plugins // R Display list of plugin in the current documents
Document.pointerLockElement; // R Returns the element set as the target for mouse events while the pointer is locked. null if lock is pending, pointer is unlocked, or if the target is in another document.
Document.featurePolicy // E R  Returns the FeaturePolicy interface which provides a simple API for introspecting the feature policies applied to a specific document.
Document.scripts // Returns all the <script> elements on the document.
Document.styleSheets //R Returns a StyleSheetList of CSSStyleSheet objects for stylesheets explicitly linked into, or embedded in a document.
Document.timeline //  R Returns timeline as a special instance of DocumentTimeline that is automatically created on page load.
Document.visibilityState // R  Returns a string denoting the visibility state of the document. Possible values are visible, hidden, prerender, and unloaded.


// The Document Interface for HTMLDocuments inherits from HTMLDocuments interface
Document.cookie // Returns a semicolon-separated list of the cookies for that document or sets a single cookie.
Document.defaultView // R  Returns a reference to the window object.
Document.designMode // Gets/sets the ability to edit the whole document.
Document.dir // R Gets/sets directionality (rtl/ltr) of the document.

Document.domain // E R Gets/sets the domain of the current document.
Document.lastModified // R  Returns the date on which the document was last modified.
Document.location // Returns the URI of the current document.
Document.readyState //  Returns loading status of the document.
Document.referrer // Returns the URI of the page that linked to this page.
Document.title // Sets or gets the title of the current document.
Document.URL // Returns the document location as a string.






 
// Event Handler
Document.onafterscriptexecute
Document.onbeforescriptexecute
Document.oncopy
Document.oncut
Document.onfullscreenchange
Document.onfullscreenerror
Document.onpaste 
Document.onreadystatechange
Document.onvisibilitychange


// The Document interface is extended with the GlobalEventHandlers interface:

GlobalEventHandlers.onselectionchange
GlobalEventHandlers.onanimationcancel
GlobalEventHandlers.onanimationend
GlobalEventHandlers.onanimationiteration
GlobalEventHandlers.onanimationiteration
GlobalEventHandlers.onauxclick
GlobalEventHandlers.onblur
GlobalEventHandlers.onerror
GlobalEventHandlers.onfocus
GlobalEventHandlers.oncancel
GlobalEventHandlers.oncanplay
GlobalEventHandlers.oncanplaythrough
GlobalEventHandlers.onchange
GlobalEventHandlers.onclick
GlobalEventHandlers.onclose
GlobalEventHandlers.oncontextmenu
GlobalEventHandlers.oncuechange
GlobalEventHandlers.ondblclick
GlobalEventHandlers.ondrag
GlobalEventHandlers.ondragend
GlobalEventHandlers.ondragenter

GlobalEventHandlers.ondragexit // E
GlobalEventHandlers.ondragleave
GlobalEventHandlers.ondragover
GlobalEventHandlers.ondragstart
GlobalEventHandlers.ondrop
GlobalEventHandlers.ondurationchange
GlobalEventHandlers.onemptied
GlobalEventHandlers.onended  // Is an event handler representing the code to be called when the ended event is raised.
GlobalEventHandlers.onformdata
GlobalEventHandlers.ongotpointercapture
GlobalEventHandlers.oninput
GlobalEventHandlers.oninvalid // Is an event handler representing the code to be called when the invalid event is raised.
GlobalEventHandlers.onkeydown
GlobalEventHandlers.onkeypress 
GlobalEventHandlers.onkeyup
GlobalEventHandlers.onload
GlobalEventHandlers.onloadeddata
GlobalEventHandlers.onloadedmetadata
GlobalEventHandlers.onloadend
GlobalEventHandlers.onloadstart
GlobalEventHandlers.onlostpointercapture
GlobalEventHandlers.onmousedown
GlobalEventHandlers.onmouseenter
GlobalEventHandlers.onmouseleave
GlobalEventHandlers.onmousemove
GlobalEventHandlers.onmouseout
GlobalEventHandlers.onmouseover
GlobalEventHandlers.onmouseup

GlobalEventHandlers.onmousewheel   // D

GlobalEventHandlers.onwheel
GlobalEventHandlers.onpause
GlobalEventHandlers.onplay
GlobalEventHandlers.onplaying
GlobalEventHandlers.onpointerdown
GlobalEventHandlers.onpointermove
GlobalEventHandlers.onpointerup
GlobalEventHandlers.onpointercancel
GlobalEventHandlers.onpointerover
GlobalEventHandlers.onpointerout
GlobalEventHandlers.onpointerenter
GlobalEventHandlers.onpointerleave

GlobalEventHandlers.onpointerlockchange  // E
GlobalEventHandlers.onpointerlockerror // E

GlobalEventHandlers.onprogress
GlobalEventHandlers.onreset
GlobalEventHandlers.onresize
GlobalEventHandlers.onscroll
GlobalEventHandlers.onseeked
GlobalEventHandlers.onseeking
GlobalEventHandlers.onselect
GlobalEventHandlers.onselectstart
GlobalEventHandlers.onselectionchange

GlobalEventHandlers.onshow  // D
GlobalEventHandlers.onstalled

GlobalEventHandlers.onsubmit
GlobalEventHandlers.onsuspend
GlobalEventHandlers.ontimeupdate
GlobalEventHandlers.onvolumechange

GlobalEventHandlers.ontouchcancel   // E
GlobalEventHandlers.ontouchend   // E
GlobalEventHandlers.ontouchmove  // E
GlobalEventHandlers.ontouchstart  // E

GlobalEventHandlers.ontransitioncancel
GlobalEventHandlers.ontransitionend
GlobalEventHandlers.ontransitionrun
GlobalEventHandlers.ontransitionstart
GlobalEventHandlers.onwaiting


// Deprecated Properties

Document.alinkColor 
Document.all  
Document.anchors // R
Document.applets // R
Document.bgColor  // R
Document.charset // R
Document.domConfig // R
Document.fgColor // R D
Document.fullscreen // R D
Document.height // R D
Document.inputEncoding // R D
Document.lastStyleSheetSet // R D
Document.linkColor // R D
Document.preferredStyleSheetSet // R D
Document.preferredStyleSheetSet // R D
Document.styleSheetSets // R D
Document.vlinkColor  // R D
Document.width // R D
Document.xmlEncoding // R D
Document.xmlStandalone // R D
Document.xmlVersion // R D


// Methods are inherited from Node and EventTarget

Document.adoptNode() // Adopt node from an external document.
Document.append() // Inserts a set of Node objects or DOMString objects after the last child of the document.
Document.captureEvents()  //D  See Window.captureEvents.
Document.caretPositionFromPoint() // Returns a CaretPosition object containing the DOM node containing the caret, and caret's character offset within that node.
Document.caretRangeFromPoint()  // Gets a Range object for the document fragment under the specified coordinates.
Document.createAttribute() // Creates a new Attr object and returns it.
Document.createAttributeNS() // Creates a new attribute node in a given namespace and returns it.
Document.createCDATASection() // Creates a new CDATA node and returns it.
Document.createComment() // Creates a new comment node and returns it.
Document.createDocumentFragment() // Creates a new document fragment.
Document.createElement() //Creates a new element with the given tag name.
Document.createElementNS() //Creates a new element with the given tag name and namespace URI.
Document.createEntityReference()  //D Creates a new entity reference object and returns it.
Document.createEvent() //Creates an event object.
Document.createNodeIterator() //Creates a NodeIterator object.
Document.createProcessingInstruction() //Creates a new ProcessingInstruction object.
Document.createRange() //Creates a Range object.
Document.createTextNode() //Creates a text node.
Document.createTouch() //D Creates a Touch object.
Document.createTouchList() //D Creates a TouchList object.
Document.createTreeWalker() //Creates a TreeWalker object.
Document.elementFromPoint() //Returns the topmost element at the specified coordinates.
Document.elementsFromPoint() //Returns an array of all elements at the specified coordinates.
Document.enableStyleSheetsForSet() //D - Enables the style sheets for the specified style sheet set.
Document.exitPictureInPicture() //Remove the video from the floating picture-in-picture window back to its original container.
Document.exitPointerLock()  // E - Release the pointer lock.
Document.getAnimations() //Returns an array of all Animation objects currently in effect, whose target elements are descendants of the document.
Document.getBoxQuads() //E - Returns a list of DOMQuad objects representing the CSS fragments of the node.

Document.getElementById() //Returns an object reference to the identified element.
Document.getElementsByClassName() // Returns a list of elements with the given class name.
Document.getElementsByTagName() // Returns a list of elements with the given tag name.
Document.getElementsByTagNameNS() //Returns a list of elements with the given tag name and namespace.
Document.getSelection() //Returns a Selection object representing the range of text selected by the user, or the current position of the caret.
Document.hasStorageAccess() //E - Returns a Promise that resolves with a boolean value indicating whether the document has access to its first-party storage.

Document.importNode() //Returns a clone of a node from an external document.
Document.normalizeDocument()  //D Replaces entities, normalizes text nodes, etc.
Document.prepend() //Inserts a set of Node objects or DOMString objects before the first child of the document.
Document.querySelector() //Returns the first Element node within the document, in document order, that matches the specified selectors.
Document.querySelectorAll() //Returns a list of all the Element nodes within the document that match the specified selectors.
Document.releaseCapture()  //Releases the current mouse capture if it's on an element in this document.
Document.releaseEvents()  //D See Window.releaseEvents().
Document.replaceChildren() //Replaces the existing children of a document with a specified new set of children.
Document.requestStorageAccess() //Returns a Promise that resolves if the access to first-party storage was granted, and rejects if access was denied.
Document.routeEvent()  //D See Window.routeEvent().
Document.mozSetImageElement()  //Allows you to change the element being used as the background image for a specified element ID. The Document interface is extended with the XPathEvaluator interface:

Document.createExpression() //Compiles an XPathExpression which can then be used for (repeated) evaluations.
Document.createNSResolver() //Creates an XPathNSResolver object.
Document.evaluate() //Evaluates an XPath expression. Extension for HTML documents

// The Document interface for HTML documents inherit from the HTMLDocument interface or, since HTML5, is extended for such documents:

Document.clear()  // In majority of modern browsers, including recent versions of Firefox and Internet Explorer, this method does nothing.
Document.close() // D Closes a document stream for writing.
Document.execCommand()  //D On an editable document, executes a formatting command.
Document.getElementsByName() //Returns a list of elements with the given name.
Document.hasFocus() // Returns true if the focus is currently located anywhere inside the specified document.
Document.open() //Opens a document stream for writing.

Document.queryCommandEnabled()  // D Returns true if the formatting command can be executed on the current range.
Document.queryCommandIndeterm() // D Returns true if the formatting command is in an indeterminate state on the current range.
Document.queryCommandState()  // D Returns true if the formatting command has been executed on the current range.
Document.queryCommandSupported() // D  Returns true if the formatting command is supported on the current range.
Document.queryCommandValue() // D Returns the current value of the current range for a formatting command.

Document.write() //Writes text in a document.
Document.writeln() //Writes a line of text in a document.





// Revised Event lists

// Event - Listen to these events using addEventListener() or by assigning an event listener to the oneventname property of this interface.

scroll
visibilitychange
wheel


// Animation events

animationcancel // Fired when an animation unexpectedly aborts. Also available via the onanimationcancel property.
animationend //Fired when an animation has completed normally. Also available via the onanimationend property.
animationiteration // Fired when an animation iteration has completed. Also available via the onanimationiteration property.
animationstart // Fired when an animation starts. Also available via the onanimationstart property.




// Check HTMLDocument Interface. HTML5 introduces new HTMLDOM Api vvi


























































