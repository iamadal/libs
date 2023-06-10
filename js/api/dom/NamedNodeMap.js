/* The NamedNodeMap interface represents a collection of Attr objects. Objects
inside a NamedNodeMap are not in any particular order, unlike NodeList,
although they may be accessed by an index as in an array.

A NamedNodeMap object is live and will thus be auto-updated if changes are
made to its contents internally or elsewhere.

Although called NamedNodeMap, this interface doesn't deal with Node objects
but with Attr objects, which were originally a specialized class of Node, and
still are in some implementations. */


// Properties

NamedNodeMap.length //Read only Returns the amount of objects in the map.


// Methods
// This interface doesn't inherit any method.

NamedNodeMap.getNamedItem() //Returns a Attr, corresponding to the given name.
NamedNodeMap.setNamedItem() //Replaces, or adds, the Attr identified in the map by the given name.
NamedNodeMap.removeNamedItem() //Removes the Attr identified by the given map.
NamedNodeMap.item() //Returns the Attr at the given index, or null if the index is higher or equal to the number of nodes.
NamedNodeMap.getNamedItemNS() //Returns a Attr identified by a namespace and related local name.
NamedNodeMap.setNamedItemNS() //Replaces, or adds, the Attr identified in the map by the given namespace and related local name.
NamedNodeMap.removeNamedItemNS() //Removes the Attr identified by the given namespace and related local name.



