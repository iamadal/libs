/* A MutationRecord represents an individual DOM mutation. It is the object
that is passed to MutationObserver's callback. */

// Properties 

MutationRecord.type // Type: 	String	Returns "attributes" if the mutation was
//an attribute mutation, "characterData" if it was a mutation to a
//CharacterData node, and "childList" if it was a mutation to the tree of
//nodes.

MutationRecord.target // Type	Node	Returns the node the mutation affected,
//depending on the MutationRecord.type. For attributes, it is the element
//whose attribute changed. For characterData, it is the CharacterData node.
//For childList, it is the node whose children changed.


MutationRecord.addedNodes // Type	NodeList	Return the nodes added. Will be an
//empty NodeList if no nodes were added.

MutationRecord.removedNodes // Type	NodeList	Return the nodes removed. Will be an
//empty NodeList if no nodes were removed.

MutationRecord.previousSibling // Type	Node	Return the previous sibling of the added
//or removed nodes, or null.


MutationRecord.nextSibling// Type	Node	Return the next sibling of the added or
//removed nodes, or null.



MutationRecord.attributeName //	String	Returns the local name of the changed
//attribute, or null.

MutationRecord.attributeNamespace //	String	Returns the namespace of the
//changed attribute, or null.

MutationRecord.oldValue//	String	The return value depends on the
//MutationRecord.type  For attributes, it is the value of the changed attribute
//before the change. For characterData, it is the data of the changed node
//before the change. For childList, it is null.

// Note that for this to work as expected, attributeOldValue or
// characterDataOldValue must be set to true in the corresponding
// MutationObserverInit parameter of the MutationObserver observe method






