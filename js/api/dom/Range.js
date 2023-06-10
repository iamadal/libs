/* Glossary Other key terms used in this section.

anchor The anchor of a selection is the beginning point of the selection. When
making a selection with a mouse, the anchor is where in the document the mouse
button is initially pressed. As the user changes the selection using the mouse
or the keyboard, the anchor does not move. editing host An editable element
(e.g., an HTML element with contenteditable set, or the HTML child of a
document that has designMode enabled). focus of a selection The focus of a
selection is the end point of the selection. When making a selection with a
mouse, the focus is where in the document the mouse button is released. As the
user changes the selection using the mouse or the keyboard, the focus is the
end of the selection that moves. This is not the same as the focused element
of the document, as returned by document.activeElement. range A range is a
contiguous part of a document. A range can contain entire nodes as well as
portions of nodes (such as a portion of a text node). A user will normally
only select a single range at a time, but it's possible for a user to select
multiple ranges (e.g., by using the Control key). A range can be retrieved
from a selection as a range object. Range objects can also be created via the
DOM and programmatically added or removed from a selection.

 */

// Constructor -  Range()
// Properties

Range.collapsed // Read only Returns a Boolean indicating whether the range's start and end points are at the same position.
Range.commonAncestorContainer // Read only Returns the deepest Node that contains the startContainer and endContainer nodes.
Range.endContainer // Read only Returns the Node within which the Range ends.
Range.endOffset //  Read only Returns a number representing where in the endContainer the Range ends.
Range.startContainer //  Read only Returns the Node within which the Range starts.
Range.startOffset //Read only Returns a number representing where in the startContainer the Range starts.


// Methods
// There are no inherited methods.

Range.setStart() // Sets the start position of a Range.
Range.setEnd() // Sets the end position of a Range.
Range.setStartBefore() //Sets the start position of a Range relative to another Node.
Range.setStartAfter() //Sets the start position of a Range relative to another Node.
Range.setEndBefore() //Sets the end position of a Range relative to another Node.
Range.setEndAfter() //Sets the end position of a Range relative to another Node.
Range.selectNode() //Sets the Range to contain the Node and its contents.
Range.selectNodeContents() //Sets the Range to contain the contents of a Node.
Range.collapse() //Collapses the Range to one of its boundary points.
Range.cloneContents() //Returns a DocumentFragment copying the nodes of a Range.
Range.deleteContents() // Removes the contents of a Range from the Document.
Range.extractContents() //Moves contents of a Range from the document tree into a DocumentFragment.
Range.insertNode() //Insert a Node at the start of a Range.
Range.surroundContents() //Moves content of a Range into a new Node.
Range.compareBoundaryPoints() //Compares the boundary points of the Range with another Range.
Range.cloneRange() //Returns a Range object with boundary points identical to the cloned Range.
Range.detach() //Releases the Range from use to improve performance.
Range.toString() //Returns the text of the Range.
Range.compareNode()  //Returns a constant representing whether the Node is before, after, inside, or surrounding the range.
Range.comparePoint()  //Returns -1, 0, or 1 indicating whether the point occurs before, inside, or after the Range.
Range.createContextualFragment() //Returns a DocumentFragment created from a given string of code.
Range.getBoundingClientRect()  //Returns a DOMRect object which bounds the entire contents of the Range; this would be the union of all the rectangles returned by range.getClientRects().
Range.getClientRects() //Returns a list of DOMRect objects that aggregates the results of Element.getClientRects() for all the elements in the Range.
Range.intersectsNode()  //Returns a boolean indicating whether the given node intersects the Range.
Range.isPointInRange()  //Returns a boolean indicating whether the given point is in the Range.




