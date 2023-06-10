// // Experimental

// // A Selection object represents the range of text selected by the user or the
// // current position of the caret. To obtain a Selection object for examination
// // or manipulation, call window.getSelection().

// A user may make a selection from left to right (in document order) or right to
// left (reverse of document order). The anchor is where the user began the
// selection and the focus is where the user ends the selection. If you make a
// selection with a desktop mouse, the anchor is placed where you pressed the
// mouse button, and the focus is placed where you released the mouse button.

// Anchor and focus should not be confused with the start and end positions of a
// selection. The anchor can be placed before the focus or vice-versa, depending
// on the direction you made your selection.



// Properties

Selection.anchorNode //Read only Returns the Node in which the selection begins. Can return null if selection never existed in the document (e.g., an iframe that was never clicked on). 
Selection.anchorOffset // Read only Returns a number representing the offset of the selection's anchor within the anchorNode. If anchorNode is a text node, this is the number of characters within anchorNode preceding the anchor. If anchorNode is an element, this is the number of child nodes of the anchorNode preceding the anchor.
Selection.focusNodeRead // only Returns the Node in which the selection ends. Can return null if selection never existed in the document (for example, in an iframe that was never clicked on).
Selection.focusOffset // Read only Returns a number representing the offset of the selection's anchor within the focusNode. If focusNode is a text node, this is the number of characters within focusNode preceding the focus. If focusNode is an element, this is the number of child nodes of the focusNode preceding the focus.
Selection.isCollapsed // Read only Returns a Boolean indicating whether the selection's start and end points are at the same position.
Selection.rangeCount //Read only Returns the number of ranges in the selection.
Selection.type //Read only Returns a DOMString describing the type of the current selection.

// Methods

Selection.addRange() // A Range object that will be added to the selection.
Selection.collapse() //Collapses the current selection to a single point.
Selection.collapseToEnd() //Collapses the selection to the end of the last range in the selection.
Selection.collapseToStart() //Collapses the selection to the start of the first range in the selection.
Selection.containsNode() //Indicates if a certain node is part of the selection.
Selection.deleteFromDocument() //Deletes the selection's content from the document.
Selection.extend() //Moves the focus of the selection to a specified point.
Selection.getRangeAt() //Returns a Range object representing one of the ranges currently selected.
Selection.modify() //Changes the current selection.
Selection.removeRange() //Removes a range from the selection.
Selection.removeAllRanges() //Removes all ranges from the selection.
Selection.selectAllChildren() //Adds all the children of the specified node to the selection.
Selection.setBaseAndExtent() //Sets the selection to be a range including all or parts of two specified DOM nodes, and any content located between them.
Selection.toString() //Returns a string currently being represented by the selection object, i.e. the currently selected text.


// String representation of a selection
// Calling the Selection.toString() method returns the text contained within the selection, e.g.:


var selObj = window.getSelection();
window.alert(selObj);

//Multiple ranges in a selection
// A selection object represents the Ranges that the user has selected. Typically, it holds only one range, accessed as follows:


var selObj = window.getSelection();
var range  = selObj.getRangeAt(0);

//selObj is a Selection object
// range is a Range object

//As the Selection API specification notes, the Selection API was initially
//created by Netscape and allowed multiple ranges (for instance, to allow the
//user to select a column from a <table>). However, browsers other than Gecko
//did not implement multiple ranges, and the specification also requires the
//selection to always have a single range.

// Selection and input focus


//Selection and input focus (indicated by Document.activeElement) have a complex
//relationship that varies by browser. In cross-browser compatible code, it's
//better to handle them separately.

//Safari and Chrome (unlike Firefox) currently focus the element containing
//selection when modifying the selection programmatically; it's possible that
//this may change in the future (see W3C bug 14383 and WebKit bug 38696).


//Behavior of Selection API in terms of editing host focus changes


/*
 The Selection API has a common behavior (i.e., shared between browsers) that governs how focus behavior changes for editing hosts after certain methods are called.

The behavior is as follows:

An editing host gains focus if the previous selection was outside of it.
A Selection API method is called, causing a new selection to be made with the selection range inside the editing host.
Focus then moves to the editing host.
Note: The Selection API methods may only move focus to an editing host, not to other focusable elements (e.g., <a>).

The above behavior applies to selections made using the following methods:

Selection.collapse()
Selection.collapseToStart()
Selection.collapseToEnd()
Selection.extend()
Selection.selectAllChildren()
Selection.addRange()
Selection.setBaseAndExtent()
And when the Range is modified using the following methods:

Range.setStart()
Range.setEnd()
Range.setStartBefore()
Range.setStartAfter()
Range.setEndBefore()
Range.setEndAfter()
Range.collapse()
Range.selectNode()
Range.selectNodeContents()
*/


// Glossary


/*
  Glossary
Other key terms used in this section.

anchor 

The anchor of a selection is the beginning point of the selection. When
making a selection with a mouse, the anchor is where in the document the mouse
button is initially pressed. As the user changes the selection using the mouse
or the keyboard, the anchor does not move. 

editing host 

An editable element
(e.g., an HTML element with contenteditable set, or the HTML child of a
document that has designMode enabled). 

focus of a selection

 The focus of a
selection is the end point of the selection. When making a selection with a
mouse, the focus is where in the document the mouse button is released. As the
user changes the selection using the mouse or the keyboard, the focus is the
end of the selection that moves. This is not the same as the focused element
of the document, as returned by document.activeElement. 

range 

A range is a
contiguous part of a document. A range can contain entire nodes as well as
portions of nodes (such as a portion of a text node). A user will normally
only select a single range at a time, but it's possible for a user to select
multiple ranges (e.g., by using the Control key). A range can be retrieved
from a selection as a range object. Range objects can also be created via the
DOM and programmatically added or removed from a selection. */









