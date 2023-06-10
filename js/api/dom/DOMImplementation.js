/*
 * developer.mozilla.org
 *
 * 01. The DOMImplementation interface represents an object providing methods which are not dependent on any particular document. Such an object is returned by the Document.implementation property.
 *
 *
 *
 */


 // No Specific method and Properties are implemented

DOMImplementation.createDocument() // Creates and returns an XMLDocument.
DOMImplementation.createDocumentType() //Creates and returns a DocumentType.
DOMImplementation.createHTMLDocument() //Creates and returns an HTML Document.
DOMImplementation.hasFeature() //Returns a Boolean indicating if a given feature is supported or not. This function is unreliable and kept for compatibility purpose alone: except for SVG-related queries, it always returns true. Old browsers are very inconsistent in their behavior.