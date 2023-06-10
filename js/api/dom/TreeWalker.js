/* The TreeWalker object represents the nodes of a document subtree and a
position within them.

A TreeWalker can be created using the Document.createTreeWalker() method. */

// properties


TreeWalker.root //Read only Returns a Node representing the root node as specified when the TreeWalker was created.
TreeWalker.whatToShow // Read only Returns an unsigned long being a bitmask made of constants describing the types of Node that must be presented. Non-matching nodes are skipped, but their children may be included, if relevant. The possible values are:

/*
 Constant	Numerical value	Description
NodeFilter.SHOW_ALL	-1 (that is the max value of unsigned long)	Shows all nodes.
NodeFilter.SHOW_ATTRIBUTE 	2	Shows attribute Attr nodes. This is meaningful only when creating a TreeWalker with an Attr node as its root. In this case, it means that the attribute node will appear in the first position of the iteration or traversal. Since attributes are never children of other nodes, they do not appear when traversing over the document tree.
NodeFilter.SHOW_CDATA_SECTION 	8	Shows CDATASection nodes.
NodeFilter.SHOW_COMMENT	128	Shows Comment nodes.
NodeFilter.SHOW_DOCUMENT	256	Shows Document nodes.
NodeFilter.SHOW_DOCUMENT_FRAGMENT	1024	Shows DocumentFragment nodes.
NodeFilter.SHOW_DOCUMENT_TYPE	512	Shows DocumentType nodes.
NodeFilter.SHOW_ELEMENT	1	Shows Element nodes.
NodeFilter.SHOW_ENTITY 	32	Shows Entity nodes. This is meaningful only when creating a TreeWalker with an Entity node as its root; in this case, it means that the Entity node will appear in the first position of the traversal. Since entities are not part of the document tree, they do not appear when traversing over the document tree.
NodeFilter.SHOW_ENTITY_REFERENCE 	16	Shows EntityReference nodes.
NodeFilter.SHOW_NOTATION 	2048	Shows Notation nodes. This is meaningful only when creating a TreeWalker with a Notation node as its root; in this case, it means that the Notation node will appear in the first position of the traversal. Since entities are not part of the document tree, they do not appear when traversing over the document tree.
NodeFilter.SHOW_PROCESSING_INSTRUCTION	64	Shows ProcessingInstruction nodes.
NodeFilter.SHOW_TEXT	4	Shows Text nodes.
 */

TreeWalker.filter // Read only Returns a NodeFilter used to select the relevant nodes.
TreeWalker.expandEntityReferences// Read only Is a Boolean indicating, when discarding an EntityReference its whole sub-tree must be discarded at the same time.
TreeWalker.currentNode //Is the Node on which the TreeWalker is currently pointing at.



// Methods 


// Note: in the context of a TreeWalker, a node is visible if it exists in the
// logical view determined by the whatToShow and filter parameter arguments.
// (Whether or not the node is visible on the screen is irrelevant.)


TreeWalker.parentNode() //Moves the current Node to the first visible ancestor node in the document order, and returns the found node. It also moves the current node to this one. If no such node exists, or if it is before that the root node defined at the object construction, returns null and the current node is not changed.
TreeWalker.firstChild() //Moves the current Node to the first visible child of the current node, and returns the found child. It also moves the current node to this child. If no such child exists, returns null and the current node is not changed.
TreeWalker.lastChild() //Moves the current Node to the last visible child of the current node, and returns the found child. It also moves the current node to this child. If no such child exists, null is returned and the current node is not changed.
TreeWalker.previousSibling() //Moves the current Node to its previous sibling, if any, and returns the found sibling. If there is no such node, return null and the current node is not changed.
TreeWalker.nextSibling() //Moves the current Node to its next sibling, if any, and returns the found sibling. If there is no such node, null is returned and the current node is not changed.
TreeWalker.previousNode() //Moves the current Node to the previous visible node in the document order, and returns the found node. It also moves the current node to this one. If no such node exists, or if it is before that the root node defined at the object construction, returns null and the current node is not changed.
TreeWalker.nextNode() //Moves the current Node to the next visible node in the document order, and returns the found node. It also moves the current node to this one. If no such node exists, returns null and the current node is not changed.


