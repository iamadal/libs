/* * window.Element  is the most important Base class * EventTarget << Node <<
Element */

 // Properties



// Element inherits properties from its parent interface,  Node, and by
// extension that interface's  parent, EventTarget.

/* Element is the most general base class from which all  element objects
(i.e. objects that represent elements) in  a Document inherit. It only has
methods and properties common to all kinds of elements. More specific classes
inherit from Element.  For example, the HTMLElement interface is the base
interface for HTML elements, while the SVGElement interface is the basis for
all SVG elements. Most functionality is specified further down the class
hierarchy. Languages outside the realm of the Web platform, like XUL through
the XULElement interface, also implement Element. */


Element.assignedSlot //Read only Returns a HTMLSlotElement representing the <slot> the node is inserted in.
Element.attributes // Read only Returns a NamedNodeMap object containing the assigned attributes of the corresponding HTML element.
Element.childElementCount // Read only Returns the number of child elements of this element.
Element.children // Read only Returns the child elements of this element.
Element.classList //Read only Returns a DOMTokenList containing the list of class attributes.
Element.className //Is a DOMString representing the class of the element.
Element.clientHeight //Read only Returns a Number representing the inner height of the element.
Element.clientLeft //Read only Returns a Number representing the width of the left border of the element.
Element.clientTop //Read only Returns a Number representing the width of the top border of the element.
Element.clientWidth //Read only Returns a Number representing the inner width of the element.
Element.firstElementChild //Read only Returns the first child element of this element.
Element.id //Is a DOMString representing the id of the element.
Element.innerHTML //Is a DOMString representing the markup of the element's content.
Element.lastElementChild //Read only Returns the last child element of this element.
Element.localName //Read only A DOMString representing the local part of the qualified name of the element.
Element.namespaceURI //Read only The namespace URI of the element, or null if it is no namespace.


//Note: In Firefox 3.5 and earlier, HTML elements are in no namespace. In later versions, HTML elements are in the http://www.w3.org/1999/xhtml namespace in both HTML and XML trees.

Element.nextElementSibling //Read only Is an Element, the element immediately following the given one in the tree, or null if there's no sibling node.
Element.outerHTML //Is a DOMString representing the markup of the element including its content. When used as a setter, replaces the element with nodes parsed from the given string.
Element.part //Represents the part identifier(s) of the element (i.e. set using the part attribute), returned as a DOMTokenList.
Element.prefix //Read only A DOMString representing the namespace prefix of the element, or null if no prefix is specified.
Element.previousElementSibling //Read only Is a Element, the element immediately preceding the given one in the tree, or null if there is no sibling element.
Element.scrollHeight //Read only Returns a Number representing the scroll view height of an element.
Element.scrollLeft //Is a Number representing the left scroll offset of the element.
Element.scrollLeftMax  //Read only Returns a Number representing the maximum left scroll offset possible for the element.
Element.scrollTop //A Number representing number of pixels the top of the document is scrolled vertically.
Element.scrollTopMax  //Read only Returns a Number representing the maximum top scroll offset possible for the element.
Element.scrollWidth //Read only Returns a Number representing the scroll view width of the element.
Element.shadowRoot //Read only Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
Element.openOrClosedShadowRoot //Read only Returns the shadow root that is hosted by the element, regardless if its open or closed. Available only to WebExtensions.
Element.slot  //Returns the name of the shadow DOM slot the element is inserted in.
Element.tagName //Read only Returns a String with the name of the tag for the given element.


// Properties included from ARIA
// The Element interface includes the following properties, defined on the ARIAMixin mixin.


Element.ariaAtomic //Is a DOMString reflecting the aria-atomic attribute, which indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
Element.ariaAutoComplete //Is a DOMString reflecting the aria-autocomplete attribute, which indicates whether inputting text could trigger display of one or more predictions of the user's intended value for a combobox, searchbox, or textbox and specifies how predictions would be presented if they were made.
Element.ariaBusy //Is a DOMString reflecting the aria-busy attribute, which indicates whether an element is being modified, as assistive technologies may want to wait until the modifications are complete before exposing them to the user.
Element.ariaChecked //Is a DOMString reflecting the aria-checked attribute, which indicates the current "checked" state of checkboxes, radio buttons, and other widgets that have a checked state.
Element.ariaColCount //Is a DOMString reflecting the aria-colcount attribute, which defines the number of columns in a table, grid, or treegrid.
Element.ariaColIndex //Is a DOMString reflecting the aria-colindex attribute, which defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
Element.ariaColIndexText //Is a DOMString reflecting the aria-colindextext attribute, which defines a human readable text alternative of aria-colindex.
Element.ariaColSpan //Is a DOMString reflecting the aria-colspan attribute, which defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
Element.ariaCurrent //Is a DOMString reflecting the aria-current attribute, which indicates the element that represents the current item within a container or set of related elements.
Element.ariaDescription //Is a DOMString reflecting the aria-description attribute, which defines a string value that describes or annotates the current element.
Element.ariaDisabled //Is a DOMString reflecting the aria-disabled attribute, which indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
Element.ariaExpanded //Is a DOMString reflecting the aria-expanded attribute, which indicates whether a grouping element owned or controlled by this element is expanded or collapsed.
Element.ariaHasPopup //Is a DOMString reflecting the aria-haspopup attribute, which indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
Element.ariaHidden //Is a DOMString reflecting the aria-hidden attribute, which indicates whether the element is exposed to an accessibility API.
Element.ariaKeyShortcuts //Is a DOMString reflecting the aria-keyshortcuts attribute, which indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
Element.ariaLabel //Is a DOMString reflecting the aria-label attribute, which defines a string value that labels the current element.
Element.ariaLevel //Is a DOMString reflecting the aria-level attribute, which defines the hierarchical level of an element within a structure.
Element.ariaLive //Is a DOMString reflecting the aria-live attribute, which indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
Element.ariaModal //Is a DOMString reflecting the aria-modal attribute, which indicates whether an element is modal when displayed.
Element.ariaMultiline //Is a DOMString reflecting the aria-multiline attribute, which indicates whether a text box accepts multiple lines of input or only a single line.
Element.ariaMultiSelectable //Is a DOMString reflecting the aria-multiselectable attribute, which indicates that the user may select more than one item from the current selectable descendants.
Element.ariaOrientation //Is a DOMString reflecting the aria-orientation attribute, which indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
Element.ariaPlaceholder //Is a DOMString reflecting the aria-placeholder attribute, which defines a short hint intended to aid the user with data entry when the control has no value.
Element.ariaPosInSet //Is a DOMString reflecting the aria-posinset attribute, which defines an element's number or position in the current set of listitems or treeitems.
Element.ariaPressed //Is a DOMString reflecting the aria-pressed attribute, which indicates the current "pressed" state of toggle buttons.
Element.ariaReadOnly //Is a DOMString reflecting the aria-readonly attribute, which indicates that the element is not editable, but is otherwise operable.
Element.ariaRelevant //Is a DOMString reflecting the aria-relevant attribute, which indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. This is used to describe what changes in an aria-live region are relevant and should be announced.
Element.ariaRequired //Is a DOMString reflecting the aria-required attribute, which indicates that user input is required on the element before a form may be submitted.
Element.ariaRoleDescription //Is a DOMString reflecting the aria-roledescription attribute, which defines a human-readable, author-localized description for the role of an element.
Element.ariaRowCount //Is a DOMString reflecting the aria-rowcount attribute, which defines the total number of rows in a table, grid, or treegrid.
Element.ariaRowIndex //Is a DOMString reflecting the aria-rowindex attribute, which defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
Element.ariaRowIndexText //Is a DOMString reflecting the aria-rowindextext attribute, which defines a human readable text alternative of aria-rowindex.
Element.ariaRowSpan //Is a DOMString reflecting the aria-rowspan attribute, which defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
Element.ariaSelected // Is a DOMString reflecting the aria-selected attribute, which indicates the current "selected" state of elements that have a selected state.
Element.ariaSetSize //Is a DOMString reflecting the aria-setsize attribute, which defines the number of items in the current set of listitems or treeitems.
Element.ariaSort //Is a DOMString reflecting the aria-sort attribute, which indicates if items in a table or grid are sorted in ascending or descending order.
Element.ariaValueMax //Is a DOMString reflecting the aria-valueMax attribute, which defines the maximum allowed value for a range widget.
Element.ariaValueMin //Is a DOMString reflecting the aria-valueMin attribute, which defines the minimum allowed value for a range widget.
Element.ariaValueNow //Is a DOMString reflecting the aria-valueNow attribute, which defines the current value for a range widget.
Element.ariaValueText //Is a DOMString reflecting the aria-valuetext attribute, which defines the human readable text alternative of aria-valuenow for a range widget.



// Event handlers -- all global events are inherited here. 


// Methods -- Check experimental and mozila specific method carefully and try not to use deprecated method in production code
// Methods are inherited from Node and EventTarget

EventTarget.addEventListener() //Registers an event handler to a specific event type on the element.
Element.after() // Inserts a set of Node or DOMString objects in the children list of the Element's parent, just after the Element.
Element.attachShadow() // Attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
Element.animate() //A shortcut method to create and run an animation on an element. Returns the created Animation object instance.
Element.append() //Inserts a set of Node objects or DOMString objects after the last child of the element.
Element.before() //Inserts a set of Node or DOMString objects in the children list of the Element's parent, just before the Element.
Element.closest() //Returns the Element which is the closest ancestor of the current element (or the current element itself) which matches the selectors given in parameter.
Element.createShadowRoot()  //Creates a shadow DOM on the element, turning it into a shadow host. Returns a ShadowRoot.
Element.computedStyleMap() //Returns a StylePropertyMapReadOnly interface which provides a read-only representation of a CSS declaration block that is an alternative to CSSStyleDeclaration.
EventTarget.dispatchEvent() //Dispatches an event to this node in the DOM and returns a Boolean that indicates whether no handler canceled the event.
Element.getAnimations() //Returns an array of Animation objects currently active on the element.
Element.getAttribute() //Retrieves the value of the named attribute from the current node and returns it as an Object.
Element.getAttributeNames() //Returns an array of attribute names from the current element.
Element.getAttributeNode() //Retrieves the node representation of the named attribute from the current node and returns it as an Attr.
Element.getAttributeNodeNS() //Retrieves the node representation of the attribute with the specified name and namespace, from the current node and returns it as an Attr.
Element.getAttributeNS() //Retrieves the value of the attribute with the specified name and namespace, from the current node and returns it as an Object.
Element.getBoundingClientRect() //Returns the size of an element and its position relative to the viewport.
Element.getBoxQuads() //Returns a list of DOMQuad objects representing the CSS fragments of the node.
Element.getClientRects() //Returns a collection of rectangles that indicate the bounding rectangles for each line of text in a client.
Element.getElementsByClassName() //Returns a live HTMLCollection that contains all descendants of the current element that possess the list of classes given in the parameter.
Element.getElementsByTagName() //Returns a live HTMLCollection containing all descendant elements, of a particular tag name, from the current element.
Element.getElementsByTagNameNS() //Returns a live HTMLCollection containing all descendant elements, of a particular tag name and namespace, from the current element.
Element.hasAttribute() //Returns a Boolean indicating if the element has the specified attribute or not.
Element.hasAttributeNS() //Returns a Boolean indicating if the element has the specified attribute, in the specified namespace, or not.
Element.hasAttributes() //Returns a Boolean indicating if the element has one or more HTML attributes present.
Element.hasPointerCapture() //Indicates whether the element on which it is invoked has pointer capture for the pointer identified by the given pointer ID.
Element.insertAdjacentElement() //Inserts a given element node at a given position relative to the element it is invoked upon.
Element.insertAdjacentHTML() //Parses the text as HTML or XML and inserts the resulting nodes into the tree in the position given.
Element.insertAdjacentText() //Inserts a given text node at a given position relative to the element it is invoked upon.
Element.matches() //Returns a Boolean indicating whether or not the element would be selected by the specified selector string.
Element.prepend() //Inserts a set of Node objects or DOMString objects before the first child of the element.
Element.querySelector() //Returns the first Node which matches the specified selector string relative to the element.
Element.querySelectorAll() //Returns a NodeList of nodes which match the specified selector string relative to the element.
Element.releasePointerCapture() //Releases (stops) pointer capture that was previously set for a specific pointer event.
Element.remove() //Removes the element from the children list of its parent.
Element.removeAttribute() //Removes the named attribute from the current node.
Element.removeAttributeNode() //Removes the node representation of the named attribute from the current node.
Element.removeAttributeNS() //Removes the attribute with the specified name and namespace, from the current node.
EventTarget.removeEventListener() //Removes an event listener from the element.
Element.replaceChildren() //Replaces the existing children of a Node with a specified new set of children.
Element.replaceWith() //Replaces the element in the children list of its parent with a set of Node or DOMString objects.
Element.requestFullscreen() //Asynchronously asks the browser to make the element full-screen.
Element.requestPointerLock() //Allows to asynchronously ask for the pointer to be locked on the given element.
Element.scroll() //Scrolls to a particular set of coordinates inside a given element.
Element.scrollBy() //Scrolls an element by the given amount.
Element.scrollIntoView() //Scrolls the page until the element gets into the view.
Element.scrollTo() //Scrolls to a particular set of coordinates inside a given element.
Element.setAttribute() //Sets the value of a named attribute of the current node.
Element.setAttributeNode() //Sets the node representation of the named attribute from the current node.
Element.setAttributeNodeNS() //Sets the node representation of the attribute with the specified name and namespace, from the current node.
Element.setAttributeNS() //Sets the value of the attribute with the specified name and namespace, from the current node.
Element.setCapture()  //Sets up mouse event capture, redirecting all mouse events to this element.
Element.setPointerCapture() //Designates a specific element as the capture target of future pointer events.
Element.toggleAttribute() //Toggles a boolean attribute, removing it if it is present and adding it if it is not present, on the specified element.










