/*
 * mdadalkhan@gmail.com
 *
 * The DocumentType interface represents a Node containing a doctype.
 *
 *
 *
 */

 // Inherits properties from Node

DocumentType.entities // Read only A NamedNodeMap of entities declared in the DTD. Every node in this map implements the Entity interface.
DocumentType.internalSubset //D  Read only  A DOMString of the internal subset, or null if there is none. Eg "<!ELEMENT foo (bar)>".
DocumentType.name // Read only A DOMString, eg "html" for <!DOCTYPE HTML>.
DocumentType.notations //D Read only A NamedNodeMap with notations declared in the DTD. Every node in this map implements the Notation interface.
DocumentType.publicId //Read only A DOMString, eg "-//W3C//DTD HTML 4.01//EN", empty string for HTML5.
DocumentType.systemId //Read only A DOMString, eg "http://www.w3.org/TR/html4/strict.dtd", empty string for HTML5.

// Inherits methods from its parent, Node.

DocumentType.after() // Inserts a set of Node or DOMString objects in the children list of the DocumentType's parent, just after the DocumentType object.
DocumentType.before() // Inserts a set of Node or DOMString objects in the children list of the DocumentType's parent, just before the DocumentType object.
DocumentType.remove() //Removes the object from its parent children list.
DocumentType.replaceWith() //Replaces the document type with a set of given nodes.