// EventTarget <<  Node << CharacterData << Text

/* The Text interface represents the textual content of Element or Attr.

If an element has no markup within its content, it has a single child
implementing Text that contains the element's text. However, if the element
contains markup, it is parsed into information items and Text nodes that form
its children.

New documents have a single Text node for each block of text. Over time, more
Text nodes may be created as the document's content changes. The
Node.normalize() method merges adjacent Text objects back into a single node
for each block of text. */



// Constructor: Text();

// Propeties - Inherit Properties from its parent CharacterData

Text.assignedSlot//  Read only Returns a HTMLSlotElement representing the <slot> the node is inserted in.
Text.isElementContentWhitespace // Read only Returns a Boolean flag indicating whether or not the text node contains only whitespace.
Text.wholeText // Read only Returns a DOMString containing the text of all Text nodes logically adjacent to this Node, concatenated in document order.

// Methods - Inherits methods from its parent, CharacterData.

Text.getBoxQuads() //Returns a list of DOMQuad objects representing the CSS fragments of the node.
Text.replaceWholeText()  // Replaces the text of the current node and all logically adjacent nodes with the specified text.
Text.splitText() // Breaks the node into two nodes at a specified offset.



