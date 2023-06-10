/* A NodeFilter interface represents an object used to filter the nodes in a
NodeIterator or TreeWalker. A NodeFilter knows nothing about the document or
traversing nodes; it only knows how to evaluate a single node against the
provided filter. */



/* Note: The browser doesn't provide any object implementing this interface.
It is the user who is expected to write one, tailoring the acceptNode() method
to its needs, and using it with some TreeWalker or NodeIterator objects. */

// Properties
// This interface neither implements nor inherits any properties.



// Methods 

NodeFilter.acceptNode()
// Returns an unsigned short that will be used to tell if a given Node must be accepted or not by the NodeIterator or TreeWalker iteration algorithm.
// This method is expected to be written by the user of a NodeFilter. Possible return values are:

/* Constant	Description FILTER_ACCEPT	Value returned by the
NodeFilter.acceptNode() method when a node should be accepted. FILTER_REJECT	
Value to be returned by the NodeFilter.acceptNode() method when a node should
be rejected. For TreeWalker, child nodes are also rejected.

For NodeIterator, this flag is synonymous with FILTER_SKIP.

FILTER_SKIP	 Value to be returned by NodeFilter.acceptNode() for nodes to be
skipped by the NodeIterator or TreeWalker object.

The children of skipped nodes are still considered. This is treated as "skip
this node but not its children".

*/


// example - https://developer.mozilla.org/en-US/docs/Web/API/NodeFilter

const nodeIterator = document.createNodeIterator(
  // Node to use as root
  document.getElementById('someId'),

  // Only consider nodes that are text nodes (nodeType 3)
  NodeFilter.SHOW_TEXT,

  // Object containing the function to use for the acceptNode method
  // of the NodeFilter
  {
    acceptNode: function(node) {
      // Logic to determine whether to accept, reject or skip node
      // In this case, only accept nodes that have content
      // other than whitespace
      if (/\S/.test(node.data)) {
        return NodeFilter.FILTER_ACCEPT
      }
    }
  },
  false
);

// Show the content of every non-empty text node that is a child of root
let node;

while ((node = nodeIterator.nextNode())) {
  alert(node.data)
}



