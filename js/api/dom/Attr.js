 /**
 * EventTarget < Node < Attr (Object pointers)
 * @author(mdadalkhan@gmail.com)
 * Attr is a DOM Data Types
 * Attr interface represent one of the a DOM Elements attribute as an object
 * 
 * In Short: DOM Interface is a set of Properties and Method Which is implemented by an Object. Like other OOP Language
 * When we get an element using querySelector, it creates an Object. such as 
 * const ha = document.querySelector("h1"); it creates ha Object Which inherit all methods and Properties from HTMLHeadingElement
 * EventTarget << Node << Element << 
 * 
 * Interface means when you create any Object methods and properties are 
 * inherited from Attr() interface.
 * if we create a h1 Element. h1 Element can implements Attr() more interface
 * Togather
 */





/**
 * Important Terms
 * DOMString: A sequence of 16 bit unsigned integers typically interpreted as UTF-16 Unicode
 * Namespace in HTML: www.w3c.org
 * NameSpace is a declarative region like C++ where all elements are stored
 * E.G All html elements automatically put in the http://www.w3.org/1999/xhtml namespace
 * We can check it using the method. Attr.NamespaceURI
 * 
 * 
 * Google Search DOM Inheritance structure for better inforamtioin.
 */

// EventTraget << Node << Attr

const attrs = new window.Attr();

// Properties

attrs.name;
attrs.namespaceURI;
attrs.localName;
attrs.prefix;
attrs.ownerElement;
attrs.specified;
attrs.value;
attrs.attributes;
attrs.childNodes;
attrs.firstChild;
attrs.isId; // ReadOnly
attrs.nextSibling;
attrs.nodeValue;
attrs.nodeName;
attrs.nodeType;
attrs.parentNode;
attrs.previousSibling;
attrs.textContent;

// List of Methods - Deprecated - see mdn

attrs.appendChild(); // D use Attr.value
attrs.cloneNode();
attrs.createAttribute();  // D - setAttribute();
attrs.createAttributeNS(); // D - setAttributeNS();
attrs.getAttributeNode(); // D -  getattribute();
attrs.getAttributeNodeNS(); // D -  getattributeNS();
attrs.hasAttribute(); // D 

attrs.hasChildNodes();
attrs.insertBefore();

attrs.isSupported(); // D 
attrs.isEqualNode();
attrs.normalize(); 
attrs.removeAttributeNode();// D - removeAttribute()
attrs.removeChild(); // D
attrs.replaceChild(); //D
attrs.setAttribute(); //D - setAttribute()
attrs.setAttributeNS(); //D - setAttributeNS()






















// Properties - Attr represent HTML Attributes


//---------------------------------------------------
attrs.name; // The Attribute name

// -------------------------------------------------



//-------------------------------------------------------
attrs.namespaceURI // A DOMString representing the namespace URI or Null - eg: www.w3c.org

attrs.localName; // Return the name of the attribues

const elem = document.querySelector("#exp");
const attribute = elem.attributes[0];
alert(attribute.localName);  // Output -- id  because #exp is a id


//------ Attr.prefix ----
/**
 * This will only work when a namespace-aware parser is used, i.e. when a document is served with an XML MIME type. This will not work for HTML documents.
 */
<div x:id="exm">Sample</div>
attrs.prefix; // print x


// --------------------------------
attrs.ownerElement; // Display owen element
attrs.ownerDocument; // Display owner Document

attrs.value; // Print the attribute value 
/**
 * Example:
 * <div class="model"> TestClass </div>
 * Print attrs.value = model 
 */

attrs.isId // Testing the attribute is a id or not
const m = document.querySelector(".classTest");
m.attributes[0].isId; // Return true of False


// Deprecated Properties and Methods is listed below

attrs.attributes; // Procuce List of attributes of an element
attrs.childNodes; // 


















