/* The CSS interface holds useful CSS-related methods. No objects with this
interface are implemented: it contains only static methods and is therefore a
utilitarian interface. */

// Properties

// The CSS interface is a utility interface and no object of this type can be created: only static properties are defined on it.

// Static properties

CSS.paintWorklet ;

// Static Methods

CSS.registerProperty() //Registers custom properties, allowing for property type checking, default values, and properties that do or do not inherit their value.
CSS.supports() //Returns a Boolean indicating if the pair property-value, or the condition, given in parameter is supported.
CSS.escape() //Can be used to escape a string mostly for use as part of a CSS selector.

//CSS factory functions Can be used to return a new CSSUnitValue with a value of the parameter number of the units of the name of the factory function method used.

CSS.em(3) // CSSUnitValue {value: 3, unit: "em"}


