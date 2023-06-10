/* The Window interface represents a window containing a DOM document; the
document property points to the DOM document loaded in that window. A window
for a given document can be obtained using the document.defaultView property.

A global variable, window, representing the window in which the script is
running, is exposed to JavaScript code.

The Window interface is home to a variety of functions, namespaces, objects,
and constructors which are not necessarily directly associated with the
concept of a user interface window. However, the Window interface is a
suitable place to include these items that need to be globally available. Many
of these are documented in the JavaScript Reference and the DOM Reference.

In a tabbed browser, each tab is represented by its own Window object; the
global window seen by JavaScript code running within a given tab always
represents the tab in which the code is running. That said, even in a tabbed
browser, some properties and methods still apply to the overall window that
contains the tab, such as resizeTo() and innerHeight. Generally, anything that
can't reasonably pertain to a tab pertains to the window instead.


 */


 // constructors - DOM Interface

window.DOMParser //DOMParser can parse XML or HTML source stored in a string into a DOM Document. DOMParser is specified in DOM Parsing and Serialization.
window.HTMLImageElement.Image //Used for creating an HTMLImageElement.
window.HTMLOptionElement.Option // Used for creating an 
window.HTMLOptionElement.Option
window.StaticRange  //Read only Returns a StaticRange() constructor which creates a StaticRange object.
window.Worker //Used for creating a Web worker.
window.XMLSerializer //Converts a DOM tree into XML or HTML source.


// Methods


/* This interface inherits properties from the EventTarget interface and
implements properties from the WindowOrWorkerGlobalScope and
WindowEventHandlers mixins.

Note that properties which are objects (e.g.,. for overriding the prototype of
built-in elements) are listed in a separate section below.
 */


 Window.closed //Read only This property indicates whether the current window is closed or not.
Window.console //Read only Returns a reference to the console object which provides access to the browser's debugging console.
Window.controllers // Read only  Returns the XUL controller objects for the current chrome window.
Window.customElements // Read only Returns a reference to the CustomElementRegistry object, which can be used to register new custom elements and get information about previously registered custom elements.
Window.crypto // Read only Returns the browser crypto object.
Window.devicePixelRatio // Read only Returns the ratio between physical pixels and device independent pixels in the current display.
Window.document // Read only Returns a reference to the document that the window contains.
Window.DOMMatrix // Read only  Returns a reference to a DOMMatrix object, which represents 4x4 matrices, suitable for 2D and 3D operations.
Window.DOMMatrixReadOnly // Read only  Returns a reference to a DOMMatrixReadOnly object, which represents 4x4 matrices, suitable for 2D and 3D operations.
Window.DOMPoint // Read only  Returns a reference to a DOMPoint object, which represents a 2D or 3D point in a coordinate system.
Window.DOMPoint //ReadOnly Read only  Returns a reference to a DOMPointReadOnly object, which represents a 2D or 3D point in a coordinate system.
Window.DOMQuad // Read only  Returns a reference to a DOMQuad object, which provides represents a quadrilaterial object, that is one having four corners and four sides.
Window.DOMRect // Read only  Returns a reference to a DOMRect object, which represents a rectangle.
Window.DOMRect //ReadOnly Read only  Returns a reference to a DOMRectReadOnly object, which represents a rectangle.
Window.event  //Read only Returns the current event, which is the event currently being handled by the JavaScript code's context, or undefined if no event is currently being handled. The Event object passed directly to event handlers should be used instead whenever possible.
Window.frameElement // Read only Returns the element in which the window is embedded, or null if the window is not embedded.
Window.frames // Read only Returns an array of the subframes in the current window.
Window.fullScreen //This property indicates whether the window is displayed in full screen or not.
Window.history // Read only Returns a reference to the history object.
Window.innerHeight // Read only Gets the height of the content area of the browser window including, if rendered, the horizontal scrollbar.
Window.innerWidth // Read only Gets the width of the content area of the browser window including, if rendered, the vertical scrollbar.
Window.isSecureContext //  Read only Indicates whether a context is capable of using features that require secure contexts.
Window.length // Read only Returns the number of frames in the window. See also window.frames.
Window.location //Gets/sets the location, or current URL, of the window object.
Window.locationbar // Read only Returns the locationbar object, whose visibility can be toggled in the window.
Window.localStorage// Read only Returns a reference to the local storage object used to store data that may only be accessed by the origin that created it.
Window.menubar // Read only Returns the menubar object, whose visibility can be toggled in the window.
Window.messageManager //  Returns the message manager object for this window.
Window.mozInnerScreenX // Read only  Returns the horizontal (X) coordinate of the top-left corner of the window's viewport, in screen coordinates. This value is reported in CSS pixels. See mozScreenPixelsPerCSSPixel in nsIDOMWindowUtils for a conversion factor to adapt to screen pixels if needed.
Window.mozInnerScreenY // Read only  Returns the vertical (Y) coordinate of the top-left corner of the window's viewport, in screen coordinates. This value is reported in CSS pixels. See mozScreenPixelsPerCSSPixel for a conversion factor to adapt to screen pixels if needed.
Window.name //Gets/sets the name of the window.

Window.navigator // Read only Returns a reference to the navigator object.

Window.opener // Returns a reference to the window that opened this current window.

Window.outerHeight // Read only Gets the height of the outside of the browser window.
Window.outerWidth // Read only Gets the width of the outside of the browser window.

Window.pageXOffset // Read only An alias for window.scrollX.
Window.pageYOffset // Read only An alias for window.scrollY

Window.parent // Read only Returns a reference to the parent of the current window or subframe.
Window.performance // Read only Returns a Performance object, which includes the timing and navigation attributes, each of which is an object providing performance-related data. See also Using Navigation Timing for additional information and examples.
Window.personalbar // Read only Returns the personalbar object, whose visibility can be toggled in the window.

Window.screen // Read only Returns a reference to the screen object associated with the window.
Window.screenX //and 
Window.screenLeft  //Read only Both properties return the horizontal distance from the left border of the user's browser viewport to the left side of the screen.

Window.screenY  //and 
Window.screenTop // Read only Both properties return the vertical distance from the top border of the user's browser viewport to the top side of the screen.

Window.scrollbars //Read only Returns the scrollbars object, whose visibility can be toggled in the window.
Window.scrollMaxX  //Read only The maximum offset that the window can be scrolled to horizontally, that is the document width minus the viewport width.
Window.scrollMaxY  //Read only The maximum offset that the window can be scrolled to vertically (i.e., the document height minus the viewport height).
Window.scrollX //Read only Returns the number of pixels that the document has already been scrolled horizontally.
Window.scrollY //Read only Returns the number of pixels that the document has already been scrolled vertically.
Window.self //Read only Returns an object reference to the window object itself.

Window.sessionStorage //Returns a reference to the session storage object used to store data that may only be accessed by the origin that created it.
Window.sidebar   //Read only Returns a reference to the window object of the sidebar.
Window.speechSynthesis // Read only Returns a SpeechSynthesis object, which is the entry point into using Web Speech API speech synthesis functionality.
Window.status  //Gets/sets the text in the statusbar at the bottom of the browser.
Window.statusbar // Read only Returns the statusbar object, whose visibility can be toggled in the window.
Window.toolbar //Read only Returns the toolbar object, whose visibility can be toggled in the window.
Window.top //Read only Returns a reference to the topmost window in the window hierarchy. This property is read only.
Window.visualViewport //Read only  Returns a VisualViewport object which represents the visual viewport for a given window.

Window.window //Read only Returns a reference to the current window. window[0], window[1], etc. Returns a reference to the window object in the frames. See Window.frames for more details. Properties implemented from elsewhere

WindowOrWorkerGlobalScope.caches //Read only Returns the CacheStorage object associated with the current context. This object enables functionality such as storing assets for offline use, and generating custom responses to requests.
WindowOrWorkerGlobalScope.indexedDB //Read only Provides a mechanism for applications to asynchronously access capabilities of indexed databases; returns an IDBFactory object.
WindowOrWorkerGlobalScope.isSecureContext //Read only Returns a boolean indicating whether the current context is secure (true) or not (false).
WindowOrWorkerGlobalScope.origin //Read only Returns the global object's origin, serialized as a string. (This does not yet appear to be implemented in any browser.)


//Deprecated properties

Window.content    // and 
Window._content   //Read only Returns a reference to the content element in the current window. Since Firefox 57 (initially Nightly-only), both versions are only available from chrome (privileged) code, and not available to the web anymore.

Window.defaultStatus  //Gets/sets the status bar text for the given window.
Window.dialogArguments  //Read only Gets the arguments passed to the window (if it's a dialog box) at the time window.showModalDialog() was called. This is an nsIArray.

Window.directories  //Synonym of window.personalbar
Window.globalStorage   //Multiple storage objects that were used for storing data across multiple pages.
Window.mozAnimationStartTime   //The time in milliseconds since epoch at which the current animation cycle began. Use Animation.startTime instead.
Window.mozPaintCount  //Returns the number of times the current document has been rendered to the screen in this window. This can be used to compute rendering performance.
Window.orientation //Read only Returns the orientation in degrees (in 90 degree increments) of the viewport relative to the device's natural orientation.
Window.pkcs11 //Formerly provided access to install and remove PKCS11 modules.
Window.returnValue //The return value to be returned to the function that called window.showModalDialog() to display the window as a modal dialog.



// Method

/* This interface inherits methods from the EventTarget interface and
implements methods from WindowOrWorkerGlobalScope and EventTarget.


 */

//This interface inherits methods from the EventTarget interface and implements methods from WindowOrWorkerGlobalScope and EventTarget.

Window.alert() // Displays an alert dialog.
Window.blur() //Sets focus away from the window.
Window.cancelAnimationFrame() //Enables you to cancel a callback previously scheduled with Window.requestAnimationFrame.
Window.cancelIdleCallback()  //Enables you to cancel a callback previously scheduled with Window.requestIdleCallback.
Window.clearImmediate() //Cancels the repeated execution set using setImmediate.
Window.close() //Closes the current window.
Window.confirm() //Displays a dialog with a message that the user needs to respond to.
Window.dump()  //Writes a message to the console.
Window.find() //Searches for a given string in a window.
Window.focus() //Sets focus on the current window.
Window.getComputedStyle() //Gets computed style for the specified element. Computed style indicates the computed values of all CSS properties of the element.
Window.getDefaultComputedStyle()  //Gets default computed style for the specified element, ignoring author stylesheets.
Window.getSelection() //Returns the selection object representing the selected item(s).
Window.matchMedia() //Returns a MediaQueryList object representing the specified media query string.
Window.maximize() //FIXME: NeedsContents
Window.minimize() //(top-level XUL windows only) Minimizes the window.
Window.moveBy() //Moves the current window by a specified amount.
Window.moveTo() //Moves the window to the specified coordinates.
Window.open() //Opens a new window.
Window.postMessage() //Provides a secure means for one window to send a string of data to another window, which need not be within the same domain as the first.
Window.print() //Opens the Print Dialog to print the current document.
Window.prompt() //Returns the text entered by the user in a prompt dialog.
Window.requestAnimationFrame() //Tells the browser that an animation is in progress, requesting that the browser schedule a repaint of the window for the next animation frame.
Window.requestIdleCallback()  //Enables the scheduling of tasks during a browser's idle periods.
Window.resizeBy() //Resizes the current window by a certain amount.
Window.resizeTo() //Dynamically resizes window.
Window.scroll() //Scrolls the window to a particular place in the document.
Window.scrollBy() //Scrolls the document in the window by the given amount.
Window.scrollByLines()  //Scrolls the document by the given number of lines.
Window.scrollByPages() //Scrolls the current document by the specified number of pages.
Window.scrollTo() //Scrolls to a particular set of coordinates in the document.
Window.setImmediate() //Executes a function after the browser has finished other heavy tasks
Window.setResizable()  //Toggles a user's ability to resize a window.
Window.sizeToContent()  //Sizes the window according to its content.
Window.showOpenFilePicker() //Shows a file picker that allows a user to select a file or multiple files.
Window.showSaveFilePicker() //Shows a file picker that allows a user to save a file.
Window.showDirectoryPicker() //Displays a directory picker which allows the user to select a directory.
Window.stop() //This method stops window loading.
Window.updateCommands()  //Updates the state of commands of the current chrome window (UI).

// Methods implemented from elsewhere


EventTarget.addEventListener() //Register an event handler to a specific event type on the window.
EventTarget.dispatchEvent() //Used to trigger an event.
WindowOrWorkerGlobalScope.atob() //Decodes a string of data which has been encoded using base-64 encoding.
WindowOrWorkerGlobalScope.btoa() //Creates a base-64 encoded ASCII string from a string of binary data.
WindowOrWorkerGlobalScope.clearInterval() // Cancels the repeated execution set using WindowOrWorkerGlobalScope.setInterval().
WindowOrWorkerGlobalScope.clearTimeout() //Cancels the delayed execution set using WindowOrWorkerGlobalScope.setTimeout().
WindowOrWorkerGlobalScope.createImageBitmap() //Accepts a variety of different image sources, and returns a Promise which resolves to an ImageBitmap. Optionally the source is cropped to the rectangle of pixels originating at (sx, sy) with width sw, and height sh.
WindowOrWorkerGlobalScope.fetch() //Starts the process of fetching a resource from the network.
EventTarget.removeEventListener() // Removes an event listener from the window.
WindowOrWorkerGlobalScope.setInterval() //Schedules a function to execute every time a given number of milliseconds elapses.
WindowOrWorkerGlobalScope.setTimeout() //Schedules a function to execute in a given amount of time.


// Deprecated methods

Window.back()  //Moves back one in the window history. This method is deprecated; you should instead use window.history.back().
Window.captureEvents()  //Registers the window to capture all events of the specified type.
Window.forward()  //Moves the window one document forward in the history. This method is deprecated; you should instead use window.history.forward().
Window.home()  //Returns the browser to the home page.
Window.openDialog()  //Opens a new dialog window.
Window.releaseEvents()  //Releases the window from trapping events of a specific type.
Window.showModalDialog()  //Displays a modal dialog.


/* These are properties of the window object that can be set to establish
event handlers for the various things that can happen in the window that might
be of interest.

This interface inherits event handlers from the EventTarget interface and
implements event handlers from WindowEventHandlers.
 */



// Collect List of Event from console.dir()









