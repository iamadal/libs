/* The NodeIterator interface represents an iterator over the members of a
list of the nodes in a subtree of the DOM. The nodes will be returned in
document order. */


/* The NodeIterator interface represents an iterator over the members of a
list of the nodes in a subtree of the DOM. The nodes will be returned in
document order. */

// Example - https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator

const nodeIterator = document.createNodeIterator(root, whatToShow, filter);


// Properties


NodeIterator.root // Read only Returns a Node representing the root node as specified when the NodeIterator was created.
NodeIterator.whatToShow //Read only Returns an unsigned long being a bitmask made of constants describing the types of Node that must to be presented. Non-matching nodes are skipped, but their children may be included, if relevant.
// The possible values are:

/*
Constant	 ---- Numerical ---  value ---	Description
NodeFilter.SHOW_ALL	-1 (that is the max value of unsigned long)	Shows all nodes.
NodeFilter.SHOW_ATTRIBUTE 	2	Shows attribute Attr nodes. This is meaningful only when creating a NodeIterator with an Attr node as its root; in this case, it means that the attribute node will appear in the first position of the iteration or traversal. Since attributes are never children of other nodes, they do not appear when traversing over the document tree.
NodeFilter.SHOW_CDATA_SECTION 	8	Shows CDATASection nodes.
NodeFilter.SHOW_COMMENT	128	Shows Comment nodes.
NodeFilter.SHOW_DOCUMENT	256	Shows Document nodes.
NodeFilter.SHOW_DOCUMENT_FRAGMENT	1024	Shows DocumentFragment nodes.
NodeFilter.SHOW_DOCUMENT_TYPE	512	Shows DocumentType nodes.
NodeFilter.SHOW_ELEMENT	1	Shows Element nodes.
NodeFilter.SHOW_ENTITY 	32	Shows Entity nodes. This is meaningful only when creating a NodeIterator with an Entity node as its root; in this case, it means that the Entity node will appear in the first position of the traversal. Since entities are not part of the document tree, they do not appear when traversing over the document tree.
NodeFilter.SHOW_ENTITY_REFERENCE 	16	Shows EntityReference nodes.
NodeFilter.SHOW_NOTATION 	2048	Shows Notation nodes. This is meaningful only when creating a NodeIterator with a Notation node as its root; in this case, it means that the Notation node will appear in the first position of the traversal. Since entities are not part of the document tree, they do not appear when traversing over the document tree.
NodeFilter.SHOW_PROCESSING_INSTRUCTION	64	Shows ProcessingInstruction nodes.
NodeFilter.SHOW_TEXT	4	Shows Text nodes.   
 */



NodeIterator.filter // Read only Returns a NodeFilter used to select the relevant nodes.
NodeIterator.expandEntityReferences // Read only  Is a Boolean indicating if, when discarding an EntityReference its whole sub-tree must be discarded at the same time.
NodeIterator.referenceNode // Read only  Returns the Node to which the iterator is anchored.
NodeIterator.pointerBeforeReferenceNode //Read only  Returns a Boolean flag that indicates whether the NodeIterator is anchored before, the flag being true, or after, the flag being false, the anchor node. 


// Methods This interface doesn't inherit any method.

NodeIterator.detach()  // This operation is a no-op. It doesn't do anything. Previously it was telling the engine that the NodeIterator was no more used, but this is now useless.
NodeIterator.previousNode() //Returns the previous Node in the document, or null if there are none.
NodeIterator.nextNode() //Returns the next Node in the document, or null if there are none.

