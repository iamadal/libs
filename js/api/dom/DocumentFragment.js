/**
  * 
  * mdadalkhan@gmail.com
  * 
  * 01. EventTarget << Node << DocumentFragment
  * 02. Constructor: DocumentFragment();
  *
  *
  *
  *
  */

  // Properties are inherited from Node

DocumentFragment.childElementCount // Read only Returns the amount of child elements the DocumentFragment has.
DocumentFragment.children // Read only Returns a live HTMLCollection containing all objects of type Element that are children of the DocumentFragment object.
DocumentFragment.firstElementChild // Read only Returns the Element that is the first child of the DocumentFragment object, or null if there is none.
DocumentFragment.lastElementChild //Read only Returns the Element that is the last child of the DocumentFragment object, or null if there is none.

// Methods are inherited from Parent interface Node

DocumentFragment.append() // Inserts a set of Node objects or DOMString objects after the last child of the document fragment.
DocumentFragment.prepend() // Inserts a set of Node objects or DOMString objects before the first child of the document fragment.
DocumentFragment.querySelector() // Returns the first Element node within the DocumentFragment, in document order, that matches the specified selectors.
DocumentFragment.querySelectorAll() // Returns a NodeList of all the Element nodes within the DocumentFragment that match the specified selectors.
DocumentFragment.replaceChildren() // Replaces the existing children of a DocumentFragment with a specified new set of children.
DocumentFragment.getElementById() // Returns the first Element node within the DocumentFragment, in document order, that matches the specified ID. Functionally equivalent to Document.getElementById().


/*
   Usage notes
A common use for DocumentFragment is to create one, assemble a DOM subtree within it, then append or insert the fragment into the DOM using Node interface methods such as appendChild() or insertBefore(). Doing this moves the fragment's nodes into the DOM, leaving behind an empty DocumentFragment. Because all of the nodes are inserted into the document at once, only one reflow and render is triggered instead of potentially one for each node inserted if they were inserted separately.
This interface is also of great use with Web components: <template> elements contain a DocumentFragment in their HTMLTemplateElement.content property.
An empty DocumentFragment can be created using the document.createDocumentFragment() method or the constructor.


<ul id="list"></ul>


var list = document.querySelector('#list')
var fruits = ['Apple', 'Orange', 'Banana', 'Melon']

var fragment = new DocumentFragment()

fruits.forEach(function (fruit) {
  var li = document.createElement('li')
  li.innerHTML = fruit
  fragment.appendChild(li)
})

list.appendChild(fragment)




Apple
Orange
Banana
Melon
 */