// // EventTarget << Node << CharacterData << ProcessingInstructio

// //The ProcessingInstruction interface represents a processing instruction;
// //that is, a Node which embeds an instruction targeting a specific
// //application but that can be ignored by any other applications which don't
// //recognize the instruction.

// A processing instruction is different from the XML declaration.

// User-defined processing instructions cannot begin with "xml", as
// xml-prefixed processing-instruction target names are reserved by the XML
// specification for particular, standard uses (see, for example,
// <?xml-stylesheet ?>).

// The ProcessingInstruction interface inherits methods and properties from
// Node.




// Properties

target (DOMString) // Read only A name identifying the application to which the instruction is targeted.