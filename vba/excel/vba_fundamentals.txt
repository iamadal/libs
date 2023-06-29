01. Variables and constant

Byte
1 byte
0 to 255

Boolean
2 bytes
True or False

Integer
2 bytes
–32,768 to 32,767

Long
4 bytes
–2,147,483,648 to 2,147,483,647

Single
4 bytes
–3.402823E38 to –1.401298E-45 (for negative values);
1.401298E-45 to 3.402823E38 (for positive values)

Double
8 bytes
–1.79769313486232E308 to –4.94065645841247E-324
(negative values); 4.94065645841247E-324 to
1.79769313486232E308 (for positive values)

Currency
8 bytes
–922,337,203,685,477.5808 to
922,337,203,685,477.5807

Decimal
12 bytes +/–79,228,162,514,264,337,593,543, 950,335 with no
decimal point; +/–7.9228162514264337593543950335
with 28 places to the right of the decimal

Date
8 bytes
January 1, 0100 to December 31, 9999

Object
4 bytes
Any object reference

String
(variable
length)
10 bytes
+ string
length
0 to approximately 2 billion characters

String
(fixed
length)
Length
of string
1 to approximately 65,400 characters

Variant
(with
numbers)
16 bytes Any numeric value up to the range of a double data type.
It can also hold special values, such as Empty, Error,
Nothing, and Null.

Variant
(with
characters)
22 bytes
+ string
length
0 to approximately 2 billion

User-
defined
Varies
Varies by element

Dim varName as DataType
use typename to determine type

------------------------------------------------------------------------
Scoping variables
A variable’s scope determines in which modules and procedures you can use the
variable. Table 3.2 lists the three ways in which a variable can be scoped.
Table 3.2 Variable Scope
Scope
To Declare a Variable with This Scope
Single
procedure
Include a Dim or Static statement within the procedure.
Single module Include a Dim or Private statement before the first procedure in
a module.
All modules
Include a Public statement before the first procedure in a
module.


Public variables
To make a variable available to all the procedures in all the VBA modules in a
project, declare the variable at the module level (before the first procedure
declaration) by using the Public keyword rather than Dim. Here’s an example:
Public CurrentRate as Long
The Public keyword makes the CurrentRate variable available to any
procedure in the VBA project, even those in other modules in the project. You
must insert this statement before the first procedure in a module (any module).
This type of declaration must appear in a standard VBA module, not in a code
module for a sheet or a UserForm.


Static variables
Static variables are a special case. They’re declared at the procedure level, and
they retain their value when the procedure ends normally. However, if the
procedure is halted by an End statement, static variables do lose their values.
Note that an End statement is not the same as an End Sub statement.
You declare static variables by using the Static keyword: Sub MySub() Static
Counter as Long '- [Code goes here] - End Sub

----------------------------------------------
Logical Opertors
Not
Performs a logical negation on an expression

And
Performs a logical conjunction on two expressions

Or
Performs a logical disjunction on two expressions

Xor
Performs a logical exclusion on two expressions

Eqv
Performs a logical equivalence on two expressions

Imp
Performs a logical implication on two expressions
-----------------------------------------------
Array  -- You declare an array with a Dim or Public statement, just as you declare a
regular variable.

Dim MyArray(1 To 100) As Integer 


Object Variables - just like instantiation object with new keyword
Dim name as ObjName
or set varName = Object

----------------------------------------------------
User-Defined Data Types

Type CustomerInfo
Company As String
Contact As String
RegionCode As Long
Sales As Double
End Type

------------------------------------------------------
Manipulating Objects and Collections - Examples need to be colllecd from the Web
With-End With constructs

For Each-Next constructs
-------------------------------------
Function REMOVEVOWELS(Txt) As String // Returing values unlike sub which does not return values
' Removes all vowels from the Txt argument
Dim i As Long
RemoveVowels =""
For i = 1 To Len(Txt)
If Not UCase(Mid(Txt, i, 1)) Like"[AEIOU]" Then
REMOVEVOWELS = REMOVEVOWELS & Mid(Txt, i, 1)
End If
Next i
End Function
------------------------------------------------
Function Procedures
A Function procedure has much in common with a Sub procedure. (For more
information on Sub procedures, see Chapter 4.)
The syntax for declaring a function is as follows:
[Public | Private][Static] Function name ([arglist])[As type]
[instructions]
[name = expression]
[Exit Function]
[instructions]
[name = expression]
End Function
The Function procedure contains the following elements:
Public: Optional. Indicates that the Function procedure is accessible to all
other procedures in all other modules in all active Excel VBA projects.
Private: Optional. Indicates that the Function procedure is accessible only
to other procedures in the same module.
Static: Optional. Indicates that the values of variables declared in the
Function procedure are preserved between calls.
Function: Required. Indicates the beginning of a procedure that returns a
value or other data.
name: Required. Any valid Function procedure name, which must follow the
same rules as a variable name.
arglist: Optional. A list of one or more variables that represent arguments
passed to the Function procedure. The arguments are enclosed in
parentheses. Use a comma to separate pairs of arguments.
type: Optional. The data type returned by the Function procedure.
instructions: Optional. Any number of valid VBA instructions.
Exit Function: Optional. A statement that forces an immediate exit from
the Function procedure before its completion.
End Function: Required. A keyword that indicates the end of the Function
procedure.
A key point to remember about a custom function written in VBA is that a value
is always assigned to the function’s name a minimum of one time, generally
when it has completed execution.
To create a custom function, start by inserting a VBA module. You can use an
existing module, as long as it’s a normal VBA module. Enter the keyword
Function, followed by the function name and a list of its arguments (if any) in
parentheses. You can also declare the data type of the return value by using the
As keyword (this step is optional but recommended). Insert the VBA code that
performs the work, making sure that the appropriate value is assigned to the term
corresponding to the function name at least once in the body of the Function
procedure. End the function with an End Function statement.
Function names must adhere to the same rules as variable names. If you plan to
use your custom function in a worksheet formula, be careful if the function name
is also a cell address. For example, if you use something such as ABC123 as a
function name, you can’t use the function in a worksheet formula because
ABC123 is a cell address. If you do so, Excel displays a #REF! error.
The best advice is to avoid using function names that are also cell references,
including named ranges. And avoid using function names that correspond to
Excel’s built-in function names. 
In the case of a function name conflict, Excel
always uses its built-in function.