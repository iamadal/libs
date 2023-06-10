/**
 * mdadalkhan@gmail.com
 * 
 * 01. EventTarget << Node << CharacterData
 * 
 * 02. The CharacterData abstract interface 
 * represents a Node object that contains 
 * characters. This is an abstract interface, 
 * meaning there aren't any objects of type 
 * CharacterData: it is implemented by other 
 * interfaces like Text, Comment, or 
 * ProcessingInstruction, which aren't abstract)(7***)
 */


// Properties

const cd = new window.CharacterData(); // This is abstract interface. avoid 
// creating objects using this constructors. 
// you can errors "illegal constructor"

CharacterData.data; //Represent texual Data
CharacterData.length; // return unsinged long value = sizeof CharacterData.Data
Element.nextElementSibling; // Return Element Object  following the specified one in its parent's children list or null 
Element.previousElementSibling; // Copy

// Methods

CharacterData.appendData();
CharacterData.deleteData();
CharacterData.insertData();
CharacterData.remove();
CharacterData.replaceWith();
CharacterData.substringData();


