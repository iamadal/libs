/*
 A DOMString is a sequence of 16-bit unsigned integers, typically interpreted as UTF-16 code units. This corresponds exactly to the JavaScript primitive String type. When a DOMString is provided to JavaScript, it maps directly to the corresponding String.

When a Web API accepts a DOMString, the value provided will be stringified, using the ToString abstract operation. (For types other than Symbol, this has the same behavior as the String() function.)

Certain Web APIs accepting a DOMString have an additional legacy behavior, where passing null stringifies to the empty string instead of the usual "null".
 */