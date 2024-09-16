'Python Reference - Adal Khan - 27-06-2023 10:07 AM GMT +06:00'
'Python Data Model'

m.py -> m.pyc -> PVM

import math
dir(math) # see all functions or properties inside math object

'Types and Operation'
------------------------------------------------------------------
Numbers
1234, 3.1415, 3+4j, 0b111, Decimal(), Fraction()

Strings
'spam', "Bob's", b'a\x01c', u'sp\xc4m'

Lists
[1, [2, 'three'], 4.5], list(range(10))

Dictionaries
{'food': 'spam', 'taste': 'yum'}, dict(hours=10)

Tuples
(1, 'spam', 4, 'U'), tuple('spam'), namedtuple

Files
open('eggs.txt'), open(r'C:\ham.bin', 'wb')

Sets
set('abc'), {'a', 'b', 'c'}

Other core types
Booleans, types, None
Program unit types
Functions, modules, classes (Part IV, Part V, Part VI)
Implementation-related types
Compiled code, stack tracebacks (Part IV, Part VII)
---------------------------------------------------------------------
String
Sequence Operations
>>> S = 'Spam' # Make a 4-character string, and assign it to a name
>>> len(S) # Length
4
>>> S[0] # The first item in S, indexing by zero-based position
'S'
>>> S[1] # The second item from the left
'p'

>>> S[-1] # The last item from the end in S =>> len-1 = -1 = 3 = s[3]
'm'
>>> S[-2] # The second-to-last item from the end
'a'

>>> S[-1] # The last item in S
'm'
>>> S[len(S)-1] # Negative indexing, the hard way
'm'

>>> S # A 4-character string
'Spam'

>>> S[1:3] # Slice of S from offsets 1 through 2 (not 3)
'pa'

>>> S[1:] # Everything past the first (1:len(S))
'pam'
>>> S # S itself hasn't changed
'Spam'
>>> S[0:3] # Everything but the last
'Spa'
>>> S[:3] # Same as S[0:3]
'Spa'
>>> S[:-1] # Everything but the last again, but simpler (0:-1)
'Spa'
>>> S[:] # All of S as a top-level copy (0:len(S))
'Spam'

>>> S + 'xyz' # Concatenation
'Spamxyz'
>>> S # S is unchanged
'Spam'
>>> S * 8 # Repetition
'SpamSpamSpamSpamSpamSpamSpamSpam'

>>> S
'Spam'
>>> S[0] = 'z' # Immutable objects cannot be changed
...error text omitted...
TypeError: 'str' object does not support item assignment
>>> S = 'z' + S[1:] # But we can run expressions to make new objects
>>> S
'zpam'


>>> S = 'shrubbery'
>>> L = list(S) # Expand to a list: [...]
>>> L
['s', 'h', 'r', 'u', 'b', 'b', 'e', 'r', 'y']
>>> L[1] = 'c' # Change it in place
>>> ''.join(L) # Join with empty delimiter
'scrubbery'
>>> B = bytearray(b'spam') # A bytes/list hybrid (ahead)
>>> B.extend(b'eggs') # 'b' needed in 3.X, not 2.X
>>> B # B[i] = ord(c) works here too
bytearray(b'spameggs')
>>> B.decode() # Translate to normal string
'spameggs'

>>> S = 'Spam'
>>> S.find('pa') # Find the offset of a substring in S
1
>>> S
'Spam'
>>> S.replace('pa', 'XYZ') # Replace occurrences of a string in S with another
'SXYZm'
>>> S
'Spam'


>>> line = 'aaa,bbb,ccccc,dd'
>>> line.split(',') # Split on a delimiter into a list of substrings
['aaa', 'bbb', 'ccccc', 'dd']
>>> S = 'spam'
>>> S.upper() # Upper- and lowercase conversions
'SPAM'
>>> S.isalpha() # Content tests: isalpha, isdigit, etc.
True
>>> line = 'aaa,bbb,ccccc,dd\n'
>>> line.rstrip() # Remove whitespace characters on the right side
'aaa,bbb,ccccc,dd'
>>> line.rstrip().split(',') # Combine two operations
['aaa', 'bbb', 'ccccc', 'dd']

>>> '%s, eggs, and %s' % ('spam', 'SPAM!') # Formatting expression (all)
'spam, eggs, and SPAM!'
>>> '{0}, eggs, and {1}'.format('spam', 'SPAM!') # Formatting method (2.6+, 3.0+)
'spam, eggs, and SPAM!'
>>> '{}, eggs, and {}'.format('spam', 'SPAM!') # Numbers optional (2.7+, 3.1+)
'spam, eggs, and SPAM!'



>>> '{:,.2f}'.format(296999.2567) # Separators, decimal digits
'296,999.26'
>>> '%.2f | %+05d' % (3.14159, −42) # Digits, padding, signs
'3.14 | −0042

>>> S + 'NI!'
'spamNI!'
>>> S.__add__('NI!')
'spamNI!'

>>> help(S.replace)

>>> S = 'A\nB\tC' # \n is end-of-line, \t is tab
>>> len(S) # Each stands for just one character
5
>>> ord('\n') # \n is a byte with the binary value 10 in ASCII
10
>>> S = 'A\0B\0C' # \0, a binary zero byte, does not terminate string
>>> len(S)
5
>>> S # Non-printables are displayed as \xNN hex escapes
'a\x00B\x00C'

>>> 'sp\xc4m' # 3.X: normal str strings are Unicode text
'spÄm'
>>> b'a\x01c' # bytes strings are byte-based data
b'a\x01c'
>>> u'sp\u00c4m' # The 2.X Unicode literal works in 3.3+: just str
'spÄm'

>>> print u'sp\xc4m' # 2.X: Unicode strings are a distinct type
spÄm
>>> 'a\x01c' # Normal str strings contain byte-based text/data
'a\x01c'
>>> b'a\x01c' # The 3.X bytes literal works in 2.6+: just str
'a\x01c'

Help on built-in function replace:
replace(...)
S.replace(old, new[, count]) -> str
Return a copy of S with all occurrences of substring
old replaced by new. If the optional argument count is
given, only the first count occurrences are replaced.


Pattern Matching
>>> import re
>>> match = re.match('Hello[ \t]*(.*)world', 'Hello Python world')
>>> match.group(1)
'Python '

>>> match = re.match('[/:](.*)[/:](.*)[/:](.*)', '/usr/home:lumberjack')
>>> match.groups()
('usr', 'home', 'lumberjack')
>>> re.split('[/:]', '/usr/home/lumberjack')
['', 'usr', 'home', 'lumberjack']

-----------------------------------------------------------------
List
>>> L = [123, 'spam', 1.23] # A list of three different-type objects
>>> len(L) # Number of items in the list
3


>>> L[0] # Indexing by position
123
>>> L[:-1] # Slicing a list returns a new list
[123, 'spam']
>>> L + [4, 5, 6] # Concat/repeat make new lists too
[123, 'spam', 1.23, 4, 5, 6]
>>> L * 2
[123, 'spam', 1.23, 123, 'spam', 1.23]
>>> L # We're not changing the original list
[123, 'spam', 1.23]

>>> L.append('NI') # Growing: add object at end of list
>>> L
[123, 'spam', 1.23, 'NI']
>>> L.pop(2) # Shrinking: delete an item in the middle
1.23
>>> L # "del L[2]" deletes from a list too
[123, 'spam', 'NI']

>>> M = ['bb', 'aa', 'cc']
>>> M.sort()
>>> M
['aa', 'bb', 'cc']
>>> M.reverse()
>>> M
['cc', 'bb', 'aa']

>>> L
[123, 'spam', 'NI']
>>> L[99]
...error text omitted...
IndexError: list index out of range
>>> L[99] = 1
...error text omitted...
IndexError: list assignment index out of range

>>> M = [[1, 2, 3], # A 3 × 3 matrix, as nested lists
[4, 5, 6], # Code can span lines if bracketed
[7, 8, 9]]
>>> M
[[1, 2, 3], [4, 5, 6], [7, 8, 9]]

>>> M[1] # Get row 2
[4, 5, 6]
>>> M[1][2] # Get row 2, then get item 3 within the row
6



>>> col2 = [row[1] for row in M] # Collect the items in column 2
>>> col2
[2, 5, 8]
>>> M # The matrix is unchanged
[[1, 2, 3], [4, 5, 6], [7, 8, 9]]

>>> [row[1] + 1 for row in M] # Add 1 to each item in column 2
[3, 6, 9]
>>> [row[1] for row in M if row[1] % 2 == 0] # Filter out odd items
[2, 8]

>>> diag = [M[i][i] for i in [0, 1, 2]] # Collect a diagonal from matrix
>>> diag
[1, 5, 9]
>>> doubles = [c * 2 for c in 'spam'] # Repeat characters in a string
>>> doubles
['ss', 'pp', 'aa', 'mm']

>>> list(range(4)) # 0..3 (list() required in 3.X)
[0, 1, 2, 3]
>>> list(range(−6, 7, 2)) # −6 to +6 by 2 (need list() in 3.X)
[−6, −4, −2, 0, 2, 4, 6]
>>> [[x ** 2, x ** 3] for x in range(4)] # Multiple values, "if" filters
[[0, 0], [1, 1], [4, 8], [9, 27]]
>>> [[x, x / 2, x * 2] for x in range(−6, 7, 2) if x > 0]
[[2, 1, 4], [4, 2, 8], [6, 3, 12]]

>>> G = (sum(row) for row in M) # Create a generator of row sums
>>> next(G) # iter(G) not required here
6
>>> next(G) # Run the iteration protocol next()
15
>>> next(G)
24

>>> list(map(sum, M)) # Map sum over items in M
[6, 15, 24]

>>> {sum(row) for row in M} # Create a set of row sums
{24, 6, 15}
>>> {i : sum(M[i]) for i in range(3)} # Creates key/value table of row sums
{0: 6, 1: 15, 2: 24}

>>> [ord(x) for x in 'spaam'] # List of character ordinals
[115, 112, 97, 97, 109]
>>> {ord(x) for x in 'spaam'} # Sets remove duplicates
{112, 97, 115, 109}
>>> {x: ord(x) for x in 'spaam'} # Dictionary keys are unique
{'p': 112, 'a': 97, 's': 115, 'm': 109}
>>> (ord(x) for x in 'spaam') # Generator of values
<generator object <genexpr> at 0x000000000254DAB0>

-----------------------------------------------------------
Dictionaries
Mapping Operations
>>> D = {'food': 'Spam', 'quantity': 4, 'color': 'pink'}
>>> D['food'] # Fetch value of key 'food'
'Spam'
>>> D['quantity'] += 1 # Add 1 to 'quantity' value
>>> D
{'color': 'pink', 'food': 'Spam', 'quantity': 5}

>>> D = {}
>>> D['name'] = 'Bob' # Create keys by assignment
>>> D['job'] = 'dev'
>>> D['age'] = 40
>>> D
{'age': 40, 'job': 'dev', 'name': 'Bob'}
>>> print(D['name'])
Bob

>>> bob1 = dict(name='Bob', job='dev', age=40) # Keywords
>>> bob1
>>> bob2 = dict(zip(['name', 'job', 'age'], ['Bob', 'dev', 40])) # Zipping
>>> bob2

{'job': 'dev', 'name': 'Bob', 'age': 40}

>>> rec = {'name': {'first': 'Bob', 'last': 'Smith'},
'jobs': ['dev', 'mgr'],
'age': 40.5}
{'age': 40, 'name': 'Bob', 'job': 'dev'}

>>> rec['name'] # 'name' is a nested dictionary
{'last': 'Smith', 'first': 'Bob'}
>>> rec['name']['last'] # Index the nested dictionary
'Smith'
>>> rec['jobs'] # 'jobs' is a nested list
['dev', 'mgr']
>>> rec['jobs'][-1] # Index the nested list
'mgr'
>>> rec['jobs'].append('janitor') # Expand Bob's job description in place
>>> rec
{'age': 40.5, 'jobs': ['dev', 'mgr', 'janitor'], 'name': {'last': 'Smith',
'first': 'Bob'}}

{'a': 1, 'c': 3, 'b': 2}
>>> D['e'] = 99 # Assigning new keys grows dictionaries
>>> D
{'a': 1, 'c': 3, 'b': 2, 'e': 99}
>>> D['f'] # Referencing a nonexistent key is an error
...error text omitted...
KeyError: 'f'

>>> 'f' in D
False
>>> if not 'f' in D: # Python's sole selection statement
print('missing')
missing

>>> if not 'f' in D:
print('missing')
print('no, really...')

>>> value = D.get('x', 0) # Index but with a default
>>> value
0
>>> value = D['x'] if 'x' in D else 0 # if/else expression form
>>> value
0


Sorting Keys: for Loops
>>> D = {'a': 1, 'b': 2, 'c': 3}
>>> D
{'a': 1, 'c': 3, 'b': 2}

>>> Ks = list(D.keys()) # Unordered keys list
>>> Ks # A list in 2.X, "view" in 3.X: use list()
['a', 'c', 'b']
>>> Ks.sort() # Sorted keys list
>>> Ks
['a', 'b', 'c']
>>> for key in Ks: # Iterate though sorted keys
print(key, '=>', D[key]) # <== press Enter twice here (3.X print)
a => 1
b => 2
c => 3


>>> D
{'a': 1, 'c': 3, 'b': 2}
>>> for key in sorted(D):
print(key, '=>', D[key])
a => 1
b => 2
c => 3

>>> for c in 'spam':
print(c.upper())
S
P
A
M

>> x = 4
>>> while x > 0:
print('spam!' * x)
x -= 1



>>> squares = [x ** 2 for x in [1, 2, 3, 4, 5]]
>>> squares
[1, 4, 9, 16, 25]



>>> squares = []
>>> for x in [1, 2, 3, 4, 5]: # This is what a list comprehension does
squares.append(x ** 2) # Both run the iteration protocol internally
>>> squares
[1, 4, 9, 16, 25]

---------------------------------------------------------------------
Tuples
>>> T = (1, 2, 3, 4) # A 4-item tuple
>>> len(T) # Length
4
>> T + (5, 6) # Concatenation
(1, 2, 3, 4, 5, 6)
>>> T[0] # Indexing, slicing, and more
1

>>> T.index(4) # Tuple methods: 4 appears at offset 3
3
>>> T.count(4) # 4 appears once
1

>>> T[0] = 2 # Tuples are immutable
...error text omitted...
TypeError: 'tuple' object does not support item assignment
>>> T = (2,) + T[1:] # Make a new tuple for a new value
>>> T
(2, 2, 3, 4)

>>> T = 'spam', 3.0, [11, 22, 33]
>>> T[1]
3.0
>>> T[2][1]
22
>>> T.append(4)
AttributeError: 'tuple' object has no attribute 'append'

--------------------------------------------------------------------------
Files
>>> f = open('data.txt', 'w') # Make a new file in output mode ('w' is write)
>>> f.write('Hello\n') # Write strings of characters to it
6
>>> f.write('world\n') # Return number of items written in Python 3.X
6
>>> f.close()

>>> f = open('data.txt') # 'r' (read) is the default processing mode
>>> text = f.read() # Read entire file into a string
>>> text
'Hello\nworld\n'
>>> print(text) # print interprets control characters
Hello
world
>>> text.split() # File content is always a string
['Hello', 'world']

>>> for line in open('data.txt'): print(line)

>>> dir(f)
[ ...many names omitted...
'buffer', 'close', 'closed', 'detach', 'encoding', 'errors', 'fileno', 'flush',
'isatty', 'line_buffering', 'mode', 'name', 'newlines', 'read', 'readable',
'readline', 'readlines', 'seek', 'seekable', 'tell', 'truncate', 'writable',
'write', 'writelines']
>>>help(f.seek)
...try it and see..

>>> import struct
>>> packed = struct.pack('>i4sh', 7, b'spam', 8) # Create packed binary data
>>> packed # 10 bytes, not objects or text
b'\x00\x00\x00\x07spam\x00\x08'
>>>
>>> file = open('data.bin', 'wb') # Open binary output file
>>> file.write(packed) # Write packed binary data
10
>>> file.close()

>>> data = open('data.bin', 'rb').read() # Open/read binary data file
>>> data # 10 bytes, unaltered
b'\x00\x00\x00\x07spam\x00\x08'
>>> data[4:8] # Slice bytes in the middle
b'spam'
>>> list(data) # A sequence of 8-bit bytes
[0, 0, 0, 7, 115, 112, 97, 109, 0, 8]
>>> struct.unpack('>i4sh', data) # Unpack into objects again
(7, b'spam', 8)

>>> S = 'sp\xc4m' # Non-ASCII Unicode text
>>> S
'spÄm'
>>> S[2] # Sequence of characters
'Ä'
>>> file = open('unidata.txt', 'w', encoding='utf-8')

>>> file.write(S) # 4 characters written
4
>>> file.close()
>>> text = open('unidata.txt', encoding='utf-8').read() # Read/decode UTF-8 text
>>> text
'spÄm'
>>> len(text) # 4 chars (code points)
4

>>> raw = open('unidata.txt', 'rb').read() # Read raw encoded bytes
>>> raw
b'sp\xc3\x84m'
>>> len(raw) # Really 5 bytes in UTF-8
5
>>> raw = open('unidata.txt', 'rb').read() # Read raw encoded bytes
>>> raw
b'sp\xc3\x84m'
>>> len(raw) # Really 5 bytes in UTF-8
5

>>> text.encode('utf-8') # Manual encode to bytes
b'sp\xc3\x84m'
>>> raw.decode('utf-8') # Manual decode to str
'spÄm

>>> text.encode('latin-1') # Bytes differ in others
b'sp\xc4m'
>>> text.encode('utf-16')
b'\xff\xfes\x00p\x00\xc4\x00m\x00'
>>> len(text.encode('latin-1')), len(text.encode('utf-16'))
(4, 10)
>>> b'\xff\xfes\x00p\x00\xc4\x00m\x00'.decode('utf-16') # But same string decoded
'spÄm'


>>> import codecs
>>> codecs.open('unidata.txt', encoding='utf8').read() # 2.X: read/decode text
u'sp\xc4m'
>>> open('unidata.txt', 'rb').read() # 2.X: read raw bytes
'sp\xc3\x84m'
>>> open('unidata.txt').read() # 2.X: raw/undecoded too
'sp\xc3\x84m'

--------------------------------------------------------------------------
Other Core Types
>>> X = set('spam') # Make a set out of a sequence in 2.X and 3.X
>>> Y = {'h', 'a', 'm'} # Make a set with set literals in 3.X and 2.7
>>> X, Y # A tuple of two sets without parentheses
({'m', 'a', 'p', 's'}, {'m', 'a', 'h'})
>>> X & Y # Intersection
{'m', 'a'}
>>> X | Y # Union
{'m', 'h', 'a', 'p', 's'}
>>> X - Y # Difference

{'p', 's'}
>>> X > Y # Superset
False
>>> {n ** 2 for n in [1, 2, 3, 4]} # Set comprehensions in 3.X and 2.7
{16, 1, 4, 9}

>>> list(set([1, 2, 1, 3, 1])) # Filtering out duplicates (possibly reordered)
[1, 2, 3]
>>> set('spam') - set('ham') # Finding differences in collections
{'p', 's'}
>>> set('spam') == set('asmp') # Order-neutral equality tests (== is False)
True

>>> 'p' in set('spam'), 'p' in 'spam', 'ham' in ['eggs', 'spam', 'ham']
(True, True, True)

>>> 1 / 3 # Floating-point (add a .0 in Python 2.X)
0.3333333333333333
>>> (2/3) + (1/2)
1.1666666666666665
>>> import decimal # Decimals: fixed precision
>>> d = decimal.Decimal('3.141')
>>> d + 1
Decimal('4.141')
>>> decimal.getcontext().prec = 2
>>> decimal.Decimal('1.00') / decimal.Decimal('3.00')
Decimal('0.33')
>>> from fractions import Fraction # Fractions: numerator+denominator
>>> f = Fraction(2, 3)
>>> f + 1
Fraction(5, 3)
>>> f + Fraction(1, 2)
Fraction(7, 6)

>>> 1 > 2, 1 < 2 # Booleans
(False, True)
>>> bool('spam') # Object's Boolean value
True
>>> X = None # None placeholder
>>> print(X)
None
>>> L = [None] * 100 # Initialize a list of 100 Nones
>>> L
[None, None, None, None, None, None, None, None, None, None, None, None,
None, None, None, None, None, None, None, None, ...a list of 100 Nones...]


# In Python 2.X:
>>> type(L) # Types: type of L is list type object
<type 'list'>
>>> type(type(L)) # Even types are objects
<type 'type'>
# In Python 3.X:
>>> type(L) # 3.X: types are classes, and vice versa
<class 'list'>
>>> type(type(L)) # See Chapter 32 for more on class types
<class 'type'>


>>> if type(L) == type([]): # Type testing, if you must...
print('yes')
yes
>>> if type(L) == list: # Using the type name
print('yes')
yes
>>> if isinstance(L, list): # Object-oriented tests
print('yes')
yes

class Worker:
def __init__(self, name, pay): # Initialize when created
self.name = name # self is the new object
self.pay = pay
def lastName(self):
return self.name.split()[-1] # Split string on blanks
def giveRaise(self, percent):
self.pay *= (1.0 + percent) # Update pay in place

>>> bob = Worker('Bob Smith', 50000) # Make two instances
>>> sue = Worker('Sue Jones', 60000) # Each has name and pay attrs
>>> bob.lastName() # Call method: bob is self
'Smith'
>>> sue.lastName() # sue is the self subject
'Jones'
>>> sue.giveRaise(.10) # Updates sue's pay
>>> sue.pay
66000.0
------------------------------------------------------------------------
Numeric Types
1234, −24, 0, 99999999999999
Integers (unlimited size)
1.23, 1., 3.14e-10, 4E210, 4.0e+210
Floating-point numbers
0o177, 0x9ff, 0b101010
Octal, hex, and binary literals in 3.X
0177, 0o177, 0x9ff, 0b101010
Octal, octal, hex, and binary literals in 2.X
3+4j, 3.0+4.0j, 3J
Complex number literals
set('spam'), {1, 2, 3, 4}
Sets: 2.X and 3.X construction forms
Decimal('1.0'), Fraction(1, 3)
Decimal and fraction extension types
bool(X), True, False
Boolean type and constants


Built-in Numeric Tools
Besides the built-in number literals and construction calls shown in Table 5-1, Python
provides a set of tools for processing number objects:
Expression operators
+, -, *, /, >>, **, &, etc.
Built-in mathematical functions
pow, abs, round, int, hex, bin, etc.
Utility modules
random, math, etc.



yield x
Generator function send protocol
lambda args: expression
Anonymous function generation
x if y else z
Ternary selection (x is evaluated only if y is true)
x or y
Logical OR (y is evaluated only if x is false)
x and y
Logical AND (y is evaluated only if x is true)
not x
Logical negation
x in y, x not in y
Membership (iterables, sets)
x is y, x is not y
Object identity tests
x < y, x <= y, x > y, x >= y
x == y, x != y
Magnitude comparison, set subset and superset;
Value equality operators
x | y
Bitwise OR, set union
x ^ y
Bitwise XOR, set symmetric difference
x & y
Bitwise AND, set intersection
x << y, x >> y
Shift x left or right by y bits
x + y
x – y
Addition, concatenation;
Subtraction, set difference
x * y
x % y
x / y, x // y
Multiplication, repetition;
Remainder, format;
Division: true and floor
−x, +x
Negation, identity
˜x
Bitwise NOT (inversion)
x ** y
Power (exponentiation)
x[i]
Indexing (sequence, mapping, others)
x[i:j:k]
Slicing
x(...)
Call (function, method, class, other callable)
x.attr
Attribute reference
(...)
Tuple, expression, generator expression
[...]
List, list comprehension
{...}
Dictionary, set, set and dictionary comprehensions


Mixed types are converted up
40 + 3.14
>>> 40 + 3.14 # Integer to float, float math/result
43.14

>>> int(3.1415) # Truncates float to integer
3
>>> float(3) # Converts integer to float
3.0
>>> a + 1, a − 1 # Addition (3 + 1), subtraction (3 − 1)
(4, 2)
>>> b * 3, b / 2 # Multiplication (4 * 3), division (4 / 2)
(12, 2.0)
>>> a % 2, b ** 2 # Modulus (remainder), power (4 ** 2)
(1, 16)
>>> 2 + 4.0, 2.0 ** b # Mixed-type conversions
(6.0, 16.0)

>>> b / 2 + a # Same as ((4 / 2) + 3) [use 2.0 in 2.X]
5.0
>>> b / (2.0 + a) # Same as (4 / (2.0 + 3)) [use print before 2.7]
0.8

>>> b / (2.0 + a) # Pythons <= 2.6: echoes give more (or fewer) digits
0.80000000000000004
>>> print(b / (2.0 + a)) # But print rounds off digits
0.8

>>> num = 1 / 3.0
>>> num # Auto-echoes
0.3333333333333333
>>> print(num) # Print explicitly
0.3333333333333333
>>> '%e' % num # String formatting expression
'3.333333e-01'
>>> '%4.2f' % num # Alternative floating-point format
'0.33'
>>> '{0:4.2f}'.format(num) # String formatting method: Python 2.6, 3.0, and later
'0.33'


>> repr('spam') # Used by echoes: as-code form
"'spam'"
>>> str('spam') # Used by print: user-friendly form
'spam'

>>> 1 < 2 # Less than
True
>>> 2.0 >= 1 # Greater than or equal: mixed-type 1 converted to 1.0
True
>>> 2.0 == 2.0 # Equal value
True
>>> 2.0 != 2.0 # Not equal value
False

>>> X = 2
>>> Y = 4
>>> Z = 6

>>> X < Y < Z # Chained comparisons: range tests
True
>>> X < Y and Y < Z
True

>>> X < Y > Z
False
>>> X < Y and Y > Z
False
>>> 1 < 2 < 3.0 < 4
True
>>> 1 > 2 > 3.0 > 4
False

>>> 1 == 2 < 3 # Same as: 1 == 2 and 2 < 3
False # Not same as: False < 3 (which means 0 < 3, which is true!)

>>> 1.1 + 2.2 == 3.3 # Shouldn't this be True?...
False
>>> 1.1 + 2.2 # Close to 3.3, but not exactly: limited precision
3.3000000000000003
>>> int(1.1 + 2.2) == int(3.3) # OK if convert: see also round, floor, trunc ahead
True

C:\code> C:\Python33\python
>>>
>>> 10 / 4 # Differs in 3.X: keeps remainder
2.5
>>> 10 / 4.0 # Same in 3.X: keeps remainder
2.5
>>> 10 // 4 # Same in 3.X: truncates remainder
2
>>> 10 // 4.0 # Same in 3.X: truncates to floor
2.0
C:\code> C:\Python27\python
>>>
>>> 10 / 4 # This might break on porting to 3.X!
2
>>> 10 / 4.0
2.5
>>> 10 // 4 # Use this in 2.X if truncation needed
2
>>> 10 // 4.0
2.0

C:\code> C:\Python27\python
>>> from __future__ import division # Enable 3.X "/" behavior
>>> 10 / 4
2.5
>>> 10 // 4 # Integer // is the same in both
2

>>> import math
>>> math.floor(2.5) # Closest number below value
2
>>> math.floor(-2.5)
-3
>>> math.trunc(2.5) # Truncate fractional part (toward zero)
2
>>> math.trunc(-2.5)
-2

C:\code> c:\python33\python
>>> 5 / 2, 5 / −2
(2.5, −2.5)
>>> 5 // 2, 5 // −2 # Truncates to floor: rounds to first lower integer
(2, −3) # 2.5 becomes 2, −2.5 becomes −3
>>> 5 / 2.0, 5 / −2.0
(2.5, −2.5)

>>> 5 // 2.0, 5 // −2.0 # Ditto for floats, though result is float too
(2.0, −3.0)

C:code> c:\python27\python
>>> 5 / 2, 5 / −2 # Differs in 3.X
(2, −3)
>>> 5 // 2, 5 // −2 # This and the rest are the same in 2.X and 3.X
(2, −3)
>>> 5 / 2.0, 5 / −2.0
(2.5, −2.5)
>>> 5 // 2.0, 5 // −2.0
(2.0, −3.0)

C:\code> c:\python33\python
>>> import math
>>> 5 / −2 # Keep remainder
−2.5
>>> 5 // −2 # Floor below result
-3
>>> math.trunc(5 / −2) # Truncate instead of floor (same as int())

C:\code> c:\python27\python
>>> import math
>>> 5 / float(−2) # Remainder in 2.X
−2.5
>>> 5 / −2, 5 // −2 # Floor in 2.X
(−3, −3)
>>> math.trunc(5 / float(−2)) # Truncate in 2.X
−2

>>> (5 / 2), (5 / 2.0), (5 / −2.0), (5 / −2) # 3.X true division
(2.5, 2.5, −2.5, −2.5)
>>> (5 // 2), (5 // 2.0), (5 // −2.0), (5 // −2) # 3.X floor division
(2, 2.0, −3.0, −3)
>>> (9 / 3), (9.0 / 3), (9 // 3), (9 // 3.0) # Both
(3.0, 3.0, 3, 3.0)

>>> (5 / 2), (5 / 2.0), (5 / −2.0), (5 / −2) # 2.X classic division (differs)
(2, 2.5, −2.5, −3)
>>> (5 // 2), (5 // 2.0), (5 // −2.0), (5 // −2) # 2.X floor division (same)
(2, 2.0, −3.0, −3)
>>> (9 / 3), (9.0 / 3), (9 // 3), (9 // 3.0) # Both
(3, 3.0, 3, 3.0)

>>> 999999999999999999999999999999 + 1 # 3.X
1000000000000000000000000000000

------------------------------------------------------------------
Complex Numbers
>>> 1j * 1J
(-1+0j)
>>> 2 + 1j * 3
(2+3j)
>>> (2 + 1j) * 3
(6+3j)

>>> 0o1, 0o20, 0o377 # Octal literals: base 8, digits 0-7 (3.X, 2.6+)
(1, 16, 255)
>>> 0x01, 0x10, 0xFF # Hex literals: base 16, digits 0-9/A-F (3.X, 2.X)

(1, 16, 255)
>>> 0b1, 0b10000, 0b11111111 # Binary literals: base 2, digits 0-1 (3.X, 2.6+)
(1, 16, 255)

>>> 0xFF, (15 * (16 ** 1)) + (15 * (16 ** 0)) # How hex/binary map to decimal
(255, 255)
>>> 0x2F, (2 * (16 ** 1)) + (15 * (16 ** 0))
(47, 47)
>>> 0xF, 0b1111, (1*(2**3) + 1*(2**2) + 1*(2**1) + 1*(2**0))
(15, 15, 15)

>>> oct(64), hex(64), bin(64) # Numbers=>digit strings
('0o100', '0x40', '0b1000000')

>>> 64, 0o100, 0x40, 0b1000000 # Digits=>numbers in scripts and strings
(64, 64, 64, 64)
>>> int('64'), int('100', 8), int('40', 16), int('1000000', 2)
(64, 64, 64, 64)
>>> int('0x40', 16), int('0b1000000', 2) # Literal forms supported too
(64, 64)

>>> eval('64'), eval('0o100'), eval('0x40'), eval('0b1000000')
(64, 64, 64, 64)

>>> '{0:o}, {1:x}, {2:b}'.format(64, 64, 64) # Numbers=>digits, 2.6+
'100, 40, 1000000'
>>> '%o, %x, %x, %X' % (64, 64, 255, 255) # Similar, in all Pythons
'100, 40, ff, FF'

>>> 0o1, 0o20, 0o377 # New octal format in 2.6+ (same as 3.X)
(1, 16, 255)
>>> 01, 020, 0377 # Old octal literals in all 2.X (error in 3.X)
(1, 16, 255)
>>> X = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFF
>>> X
5192296858534827628530496329220095
>>> oct(X)
'0o17777777777777777777777777777777777777'
>>> bin(X)
'0b111111111111111111111111111111111111111111111111111111111 ...and so on... 11111'

---------------------------------------------------------------------------
Bitwise Operations
>>> x = 1 # 1 decimal is 0001 in bits
>>> x << 2 # Shift left 2 bits: 0100

4
>>> x | 2 # Bitwise OR (either bit=1): 0011
3
>>> x & 1 # Bitwise AND (both bits=1): 0001
1

>>> X = 0b0001 # Binary literals
>>> X << 2 # Shift left
4
>>> bin(X << 2) # Binary digits string
'0b100'
>>> bin(X | 0b010) # Bitwise OR: either
'0b11'
>>> bin(X & 0b1) # Bitwise AND: both
'0b1'

>>> X = 0xFF # Hex literals
>>> bin(X)
'0b11111111'
>>> X ^ 0b10101010 # Bitwise XOR: either but not both
85
>>> bin(X ^ 0b10101010)
'0b1010101'
>>> int('01010101', 2) # Digits=>number: string to int per base
85
>>> hex(85) # Number=>digits: Hex digit string
'0x55'

>>> X = 99
>>> bin(X), X.bit_length(), len(bin(X)) - 2
('0b1100011', 7, 7)
>>> bin(256), (256).bit_length(), len(bin(256)) - 2
('0b100000000', 9, 9)

>>> import math
>>> math.pi, math.e # Common constants
(3.141592653589793, 2.718281828459045)
>>> math.sin(2 * math.pi / 180) # Sine, tangent, cosine
0.03489949670250097
>>> math.sqrt(144), math.sqrt(2) # Square root
(12.0, 1.4142135623730951)
>>> pow(2, 4), 2 ** 4, 2.0 ** 4.0 # Exponentiation (power)
(16, 16, 16.0)
>>> abs(-42.0), sum((1, 2, 3, 4)) # Absolute value, summation
(42.0, 10)
>>> min(3, 1, 2, 4), max(3, 1, 2, 4) # Minimum, maximum
(1, 4)

>>> math.floor(2.567), math.floor(-2.567) # Floor (next-lower integer)
(2, −3)
>>> math.trunc(2.567), math.trunc(−2.567) # Truncate (drop decimal digits)
(2, −2)
>>> int(2.567), int(−2.567) # Truncate (integer conversion)
(2, −2)
>>> round(2.567), round(2.467), round(2.567, 2)

(3, 2, 2.57)
>>> '%.1f' % 2.567, '{0:.2f}'.format(2.567) # Round for display (Chapter 7)
('2.6', '2.57')

>>> (1 / 3.0), round(1 / 3.0, 2), ('%.2f' % (1 / 3.0))
(0.3333333333333333, 0.33, '0.33')

>>> import math
>>> math.sqrt(144) # Module
12.0
>>> 144 ** .5 # Expression
12.0
>>> pow(144, .5) # Built-in
12.0
>>> math.sqrt(1234567890) # Larger numbers
35136.41828644462
>>> 1234567890 ** .5
35136.41828644462
>>> pow(1234567890, .5)
35136.41828644462

>>> import random
>>> random.random()
0.5566014960423105
>>> random.random() # Random floats, integers, choices, shuffles
0.051308506597373515

>>> random.randint(1, 10)
5
>>> random.randint(1, 10)
9

>>> random.choice(['Life of Brian', 'Holy Grail', 'Meaning of Life'])
'Holy Grail'
>>> random.choice(['Life of Brian', 'Holy Grail', 'Meaning of Life'])
'Life of Brian'
>>> suits = ['hearts', 'clubs', 'diamonds', 'spades']
>>> random.shuffle(suits)
>>> suits
['spades', 'hearts', 'diamonds', 'clubs']
>>> random.shuffle(suits)
>>> suits
['clubs', 'diamonds', 'hearts', 'spades']

Decimal Type
Python 2.4 introduced a new core numeric type: the decimal object, formally known
as Decimal. Syntactically, you create decimals by calling a function within an imported
module, rather than running a literal expression. Functionally, decimals are like float-
ing-point numbers, but they have a fixed number of decimal points. Hence, decimals
are fixed-precision floating-point values.
For example, with decimals, we can have a floating-point value that always retains just
two decimal digits. Furthermore, we can specify how to round or truncate the extra
decimal digits beyond the object’s cutoff. Although it generally incurs a performance
penalty compared to the normal floating-point type, the decimal type is well suited to
representing fixed-precision quantities like sums of money and can help you achieve
better numeric accuracy.
Other Numeric Types | 157
www.it-ebooks.info
Decimal basics
The last point merits elaboration. As previewed briefly when we explored comparisons,
floating-point math is less than exact because of the limited space used to store values.
For example, the following should yield zero, but it does not. The result is close to zero,
but there are not enough bits to be precise here:
>>> 0.1 + 0.1 + 0.1 - 0.3 # Python 3.3
5.551115123125783e-17
On Pythons prior to 3.1 and 2.7, printing the result to produce the user-friendly display
format doesn’t completely help either, because the hardware related to floating-point
math is inherently limited in terms of accuracy (a.k.a. precision). The following in 3.3
gives the same result as the previous output:
>>> print(0.1 + 0.1 + 0.1 - 0.3) # Pythons < 2.7, 3.1
5.55111512313e-17
However, with decimals, the result can be dead-on:
>>> from decimal import Decimal
>>> Decimal('0.1') + Decimal('0.1') + Decimal('0.1') - Decimal('0.3')
Decimal('0.0')
As shown here, we can make decimal objects by calling the Decimal constructor function
in the decimal module and passing in strings that have the desired number of decimal
digits for the resulting object (using the str function to convert floating-point values
to strings if needed). When decimals of different precision are mixed in expressions,
Python converts up to the largest number of decimal digits automatically:
>>> Decimal('0.1') + Decimal('0.10') + Decimal('0.10') - Decimal('0.30')
Decimal('0.00')
In Pythons 2.7, 3.1, and later, it’s also possible to create a decimal object from a floating-
point object, with a call of the form decimal.Decimal.from_float(1.25), and recent
Pythons allow floating-point numbers to be used directly. The conversion is exact but
can sometimes yield a large default number of digits, unless they are fixed per the next
section:
>>> Decimal(0.1) + Decimal(0.1) + Decimal(0.1) - Decimal(0.3)
Decimal('2.775557561565156540423631668E-17')
In Python 3.3 and later, the decimal module was also optimized to improve its perfor-
mance radically: the reported speedup for the new version is 10X to 100X, depending
on the type of program benchmarked.
Setting decimal precision globally
Other tools in the decimal module can be used to set the precision of all decimal num-
bers, arrange error handling, and more. For instance, a context object in this module
allows for specifying precision (number of decimal digits) and rounding modes (down,
158 | Chapter 5: Numeric Types
www.it-ebooks.info
ceiling, etc.). The precision is applied globally for all decimals created in the calling
thread:
>>> import decimal
>>> decimal.Decimal(1) / decimal.Decimal(7) # Default: 28 digits
Decimal('0.1428571428571428571428571429')
>>> decimal.getcontext().prec = 4 # Fixed precision
>>> decimal.Decimal(1) / decimal.Decimal(7)
Decimal('0.1429')
>>> Decimal(0.1) + Decimal(0.1) + Decimal(0.1) - Decimal(0.3) # Closer to 0
Decimal('1.110E-17')
This is especially useful for monetary applications, where cents are represented as two
decimal digits. Decimals are essentially an alternative to manual rounding and string
formatting in this context:
>>> 1999 + 1.33 # This has more digits in memory than displayed in 3.3
2000.33
>>>
>>> decimal.getcontext().prec = 2
>>> pay = decimal.Decimal(str(1999 + 1.33))
>>> pay
Decimal('2000.33')



Decimal context manager
C:\code> C:\Python33\python
>>> import decimal
>>> decimal.Decimal('1.00') / decimal.Decimal('3.00')
Decimal('0.3333333333333333333333333333')
>>>
>>> with decimal.localcontext() as ctx:
... ctx.prec = 2
... decimal.Decimal('1.00') / decimal.Decimal('3.00')
...
Decimal('0.33')
>>>
>>> decimal.Decimal('1.00') / decimal.Decimal('3.00')
Decimal('0.3333333333333333333333333333')

Fraction Type
>>> from fractions import Fraction
>>> x = Fraction(1, 3) # Numerator, denominator
>>> y = Fraction(4, 6) # Simplified to 2, 3 by gcd
>>> x
Fraction(1, 3)
>>> y
Fraction(2, 3)
>>> print(y)
2/3
Once created, Fractions can be used in mathematical expressions as usual:
>>> x + y
Fraction(1, 1)
>>> x − y # Results are exact: numerator, denominator
Fraction(−1, 3)
>>> x * y
Fraction(2, 9)
Fraction objects can also be created from floating-point number strings, much like
decimals:
>>> Fraction('.25')
Fraction(1, 4)
>>> Fraction('1.25')
Fraction(5, 4)
>>>
>>> Fraction('.25') + Fraction('1.25')
Fraction(3, 2)
>>> a = 1 / 3.0 # Only as accurate as floating-point hardware
>>> b = 4 / 6.0 # Can lose precision over many calculations
>>> a
0.3333333333333333
>>> b
0.6666666666666666
>>> a + b
1.0
>>> a - b
-0.3333333333333333
>>> a * b
0.2222222222222222

>>> 0.1 + 0.1 + 0.1 - 0.3 # This should be zero (close, but not exact)
5.551115123125783e-17
>>> from fractions import Fraction
>>> Fraction(1, 10) + Fraction(1, 10) + Fraction(1, 10) - Fraction(3, 10)
Fraction(0, 1)
>>> from decimal import Decimal
>>> Decimal('0.1') + Decimal('0.1') + Decimal('0.1') - Decimal('0.3')
Decimal('0.0')

>>> 1 / 3 # Use a ".0" in Python 2.X for true "/"
0.3333333333333333
>>> Fraction(1, 3) # Numeric accuracy, two ways
Fraction(1, 3)
>>> import decimal
>>> decimal.getcontext().prec = 2
>>> Decimal(1) / Decimal(3)
Decimal('0.33')
>>> (1 / 3) + (6 / 12) # Use a ".0" in Python 2.X for true "/"
0.8333333333333333
>>> Fraction(6, 12) # Automatically simplified
Fraction(1, 2)
>>> Fraction(1, 3) + Fraction(6, 12)
Fraction(5, 6)
>>> decimal.Decimal(str(1/3)) + decimal.Decimal(str(6/12))
Decimal('0.83')
>>> 1000.0 / 1234567890
8.100000073710001e-07
>>> Fraction(1000, 1234567890) # Substantially simpler!
Fraction(100, 123456789)

>>> (2.5).as_integer_ratio() # float object method
(5, 2)
>>> f = 2.5
>>> z = Fraction(*f.as_integer_ratio()) # Convert float -> fraction: two args
>>> z # Same as Fraction(5, 2)
Fraction(5, 2)
>>> x # x from prior interaction
Fraction(1, 3)
>>> x + z
Fraction(17, 6) # 5/2 + 1/3 = 15/6 + 2/6
>>> float(x) # Convert fraction -> float
0.3333333333333333
>>> float(z)
2.5
>>> float(x + z)
2.8333333333333335
>>> 17 / 6
2.8333333333333335
>>> Fraction.from_float(1.75) # Convert float -> fraction: other way
Fraction(7, 4)

>>> Fraction(*(1.75).as_integer_ratio())
Fraction(7, 4)
>>> x
Fraction(1, 3)
>>> x + 2 # Fraction + int -> Fraction
Fraction(7, 3)
>>> x + 2.0 # Fraction + float -> float
2.3333333333333335
>>> x + (1./3) # Fraction + float -> float
0.6666666666666666
>>> x + (4./3)
1.6666666666666665
>>> x + Fraction(4, 3) # Fraction + Fraction -> Fraction
Fraction(5, 3)
>>> 4.0 / 3
1.3333333333333333
>>> (4.0 / 3).as_integer_ratio() # Precision loss from float
(6004799503160661, 4503599627370496)
>>> x
Fraction(1, 3)
>>> a = x + Fraction(*(4.0 / 3).as_integer_ratio())
>>> a
Fraction(22517998136852479, 13510798882111488)
>>> 22517998136852479 / 13510798882111488. # 5 / 3 (or close to it!)
1.6666666666666667
>>> a.limit_denominator(10) # Simplify to closest fraction
Fraction(5, 3)

Sets
>>> x = set('abcde')
>>> y = set('bdxyz')
>>> x
set(['a', 'c', 'b', 'e', 'd'])
>>> x − y # Difference
set(['a', 'c', 'e'])
>>> x | y # Union
set(['a', 'c', 'b', 'e', 'd', 'y', 'x', 'z'])
>>> x & y # Intersection
set(['b', 'd'])
>>> x ^ y # Symmetric difference (XOR)
set(['a', 'c', 'e', 'y', 'x', 'z'])
>>> x > y, x < y # Superset, subset
(False, False)

>>> 'e' in x # Membership (sets)
True
>>> 'e' in 'Camelot', 22 in [11, 22, 33] # But works on other types too
(True, True)

>>> z = x.intersection(y) # Same as x & y
>>> z
set(['b', 'd'])
>>> z.add('SPAM') # Insert one item
>>> z
set(['b', 'd', 'SPAM'])
>>> z.update(set(['X', 'Y'])) # Merge: in-place union
>>> z
set(['Y', 'X', 'b', 'd', 'SPAM'])
>>> z.remove('b') # Delete one item
>>> z
set(['Y', 'X', 'd', 'SPAM'])

>>> for item in set('abc'): print(item * 3)
aaa
ccc
bbb

>>> S = set([1, 2, 3])
>>> S | set([3, 4]) # Expressions require both to be sets
set([1, 2, 3, 4])
>>> S | [3, 4]
TypeError: unsupported operand type(s) for |: 'set' and 'list'
>>> S.union([3, 4]) # But their methods allow any iterable
set([1, 2, 3, 4])
>>> S.intersection((1, 3, 5))
set([1, 3])
>>> S.issubset(range(-5, 5))
True

set([1, 2, 3, 4]) # Built-in call (all)
{1, 2, 3, 4}
C:\code> c:\python33\python
>>> set([1, 2, 3, 4]) # Built-in: same as in 2.6
{1, 2, 3, 4}
>>> set('spam') # Add all items in an iterable
{'s', 'a', 'p', 'm'}
>>> {1, 2, 3, 4} # Set literals: new in 3.X (and 2.7)
{1, 2, 3, 4}
>>> S = {'s', 'p', 'a', 'm'}
>>> S
{'s', 'a', 'p', 'm'}
>>> S.add('alot') # Methods work as before
>>> S
{'s', 'a', 'p', 'alot', 'm'}

>>> S1 = {1, 2, 3, 4}
>>> S1 & {1, 3} # Intersection
{1, 3}
>>> {1, 5, 3, 6} | S1 # Union
{1, 2, 3, 4, 5, 6}
>>> S1 - {1, 3, 4} # Difference
{2}
>>> S1 > {1, 3} # Superset
True

>>> S1 - {1, 2, 3, 4} # Empty sets print differently
set()
>>> type({}) # Because {} is an empty dictionary
<class 'dict'>
>>> S = set() # Initialize an empty set
>>> S.add(1.23)
>>> S
{1.23}

>>> {1, 2, 3} | {3, 4}
{1, 2, 3, 4}
>>> {1, 2, 3} | [3, 4]
TypeError: unsupported operand type(s) for |: 'set' and 'list'
>>> {1, 2, 3}.union([3, 4])
{1, 2, 3, 4}
>>> {1, 2, 3}.union({3, 4})
{1, 2, 3, 4}
>>> {1, 2, 3}.union(set([3, 4]))
{1, 2, 3, 4}
>>> {1, 2, 3}.intersection((1, 3, 5))
{1, 3}
>>> {1, 2, 3}.issubset(range(-5, 5))
True

>>> S
{1.23}
>>> S.add([1, 2, 3]) # Only immutable objects work in a set
TypeError: unhashable type: 'list'

>>> S.add({'a':1})
TypeError: unhashable type: 'dict'
>>> S.add((1, 2, 3))
>>> S # No list or dict, but tuple OK
{1.23, (1, 2, 3)}
>>> S | {(4, 5, 6), (1, 2, 3)} # Union: same as S.union(...)
{1.23, (4, 5, 6), (1, 2, 3)}
>>> (1, 2, 3) in S # Membership: by complete values
True
>>> (1, 4, 3) in S
False

>>> {x ** 2 for x in [1, 2, 3, 4]} # 3.X/2.7 set comprehension
{16, 1, 4, 9}

>>> {x for x in 'spam'} # Same as: set('spam')
{'m', 's', 'p', 'a'}
>>> {c * 4 for c in 'spam'} # Set of collected expression results
{'pppp', 'aaaa', 'ssss', 'mmmm'}
>>> {c * 4 for c in 'spamham'}
{'pppp', 'aaaa', 'hhhh', 'ssss', 'mmmm'}
>>> S = {c * 4 for c in 'spam'}

>>> S | {'mmmm', 'xxxx'}
{'pppp', 'xxxx', 'mmmm', 'aaaa', 'ssss'}
>>> S & {'mmmm', 'xxxx'}
{'mmmm'}

>>> L = [1, 2, 1, 3, 2, 4, 5]
>>> set(L)
{1, 2, 3, 4, 5}
>>> L = list(set(L)) # Remove duplicates
>>> L
[1, 2, 3, 4, 5]
>>> list(set(['yy', 'cc', 'aa', 'xx', 'dd', 'aa'])) # But order may change
['cc', 'xx', 'yy', 'dd', '

 a']

 >>> set([1, 3, 5, 7]) - set([1, 2, 4, 5, 6]) # Find list differences
{3, 7}
>>> set('abcdefg') - set('abdghij') # Find string differences
{'c', 'e', 'f'}
>>> set('spam') - set(['h', 'a', 'm']) # Find differences, mixed
{'p', 's'}
>>> set(dir(bytes)) - set(dir(bytearray)) # In bytes but not bytearray
{'__getnewargs__'}
>>> set(dir(bytearray)) - set(dir(bytes))
{'append', 'copy', '__alloc__', '__imul__', 'remove', 'pop', 'insert', ...more...]


>>> L1, L2 = [1, 3, 5, 2, 4], [2, 5, 3, 4, 1]
>>> L1 == L2 # Order matters in sequences
False
>>> set(L1) == set(L2) # Order-neutral equality
True
>>> sorted(L1) == sorted(L2) # Similar but results ordered
True
>>> 'spam' == 'asmp', set('spam') == set('asmp'), sorted('spam') == sorted('asmp')
(False, True, True)


 >>> engineers = {'bob', 'sue', 'ann', 'vic'}
>>> managers = {'tom', 'sue'}
>>> 'bob' in engineers # Is bob an engineer?
True
>>> engineers & managers # Who is both engineer and manager?
{'sue'}
>>> engineers | managers # All people in either category
{'bob', 'tom', 'sue', 'vic', 'ann'}
>>> engineers - managers # Engineers who are not managers
{'vic', 'ann', 'bob'}
>>> managers - engineers # Managers who are not engineers
{'tom'}
>>> engineers > managers # Are all managers engineers? (superset)
False

 >>> {'bob', 'sue'} < engineers # Are both engineers? (subset)
True
>>> (managers | engineers) > managers # All people is a superset of managers
True
>>> managers ^ engineers # Who is in one but not both?
{'tom', 'vic', 'ann', 'bob'}
>>> (managers | engineers) - (managers ^ engineers) # Intersection!
{'sue'}



 Booleans
 >>> type(True)
<class 'bool'>
>>> isinstance(True, int)
True

 >>> True == 1 # Same value
True
>>> True is 1 # But a different object: see the next chapter
False
>>> True or False # Same as: 1 or 0
True
>>> True + 4 # (Hmmm)
5

---------------------------------------------------------
The Dynamic Typing Interlude
 >>> a = 3 # Assign a name to an object
at least conceptually, Python will perform three distinct steps to carry out the request.
These steps reflect the operation of all assignments in the Python language:
1. Create an object to represent the value 3.
2. Create the variable a, if it does not yet exist.
3. Link the variable a to the new object 3.

>>> a = 3 # It's an integer
>>> a = 'spam' # Now it's a string
>>> a = 1.23 # Now it's a floating poin

 Objects Are Garbage-Collected
In the prior section’s listings, we assigned the variable a to different types of objects in
each assignment. But when we reassign a variable, what happens to the value it was
previously referencing? For example, after the following statements, what happens to
the object 3?
>>> a = 3
>>> a = 'spam'
 >>> x = 42
>>> x = 'shrubbery' # Reclaim 42 now (unless referenced elsewhere)
>>> x = 3.1415 # Reclaim 'shrubbery' now
>>> x = [1, 2, 3] # Reclaim 3.1415 now

Shared References
>>> a = 3
>>> b = a

 >>> a = 3
>>> b = a
>>> a = 'spam'

 >>> a = 3
>>> b = a
>>> a = a + 2

 >>> L1 = [2, 3, 4]
>>> L2 = L1

 >>> L1 = [2, 3, 4] # A mutable object
>>> L2 = L1 # Make a reference to the same object
>>> L1[0] = 24 # An in-place change
>>> L1 # L1 is different
[24, 3, 4]
>>> L2 # But so is L2!
[24, 3, 4]

 >>> L1 = [2, 3, 4]
>>> L2 = L1[:] # Make a copy of L1 (or list(L1), copy.copy(L1), etc.)
>>> L1[0] = 24
>>> L1
[24, 3, 4]
>>> L2 # L2 is not changed
[2, 3, 4]

 import copy
X = copy.copy(Y) # Make top-level "shallow" copy of any object Y
X = copy.deepcopy(Y) # Make deep copy of any object Y: copy all nested parts

>>> L = [1, 2, 3]
>>> M = L # M and L reference the same object
>>> L == M # Same values
True
>>> L is M # Same objects
True

>>> L = [1, 2, 3]
>>> M = [1, 2, 3] # M and L reference different objects
>>> L == M # Same values
True
>>> L is M # Different objects
False

>>> X = 42
>>> Y = 42 # Should be two different objects
>>> X == Y
True
>>> X is Y # Same object anyhow: caching at work!
True

>>> import sys
>>> sys.getrefcount(1) # 647 pointers to this shared piece of memory
647

------------------------------------------------------------------------
String
Operation
Interpretation
S = ''
Empty string
S = "spam's"
Double quotes, same as single
S = 's\np\ta\x00m'
Escape sequences
S = """...multiline..."""
Triple-quoted block strings
S = r'\temp\spam'
Raw strings (no escapes)
B = b'sp\xc4m'
Byte strings in 2.6, 2.7, and 3.X (Chapter 4, Chapter 37)
U = u'sp\u00c4m'
Unicode strings in 2.X and 3.3+ (Chapter 4, Chapter 37)
S1 + S2
S * 3
Concatenate, repeat
S[i]
S[i:j]
len(S)
Index, slice, length
"a %s parrot" % kind
String formatting expression
"a {0} parrot".format(kind)
String formatting method in 2.6, 2.7, and 3.X
S.find('pa')
S.rstrip()
S.replace('pa', 'xx')
S.split(',')
String methods (see ahead for all 43): search,
remove whitespace,
replacement,
split on delimiter,

S.isdigit()
S.lower()
S.endswith('spam')
'spam'.join(strlist)
S.encode('latin-1')
B.decode('utf8')
content test,
case conversion,
end test,
delimiter join,
Unicode encoding,
Unicode decoding, etc. (see Table 7-3)
for x in S: print(x)
'spam' in S
[c * 2 for c in S]
map(ord, S)
Iteration, membership
re.match('sp(.*)am', line)
Pattern matching: library module
Single quotes: 'spa"m'
• Double quotes: "spa'm"
• Triple quotes: '''... spam ...''', """... spam ..."""
• Escape sequences: "s\tp\na\0m"
• Raw strings: r"C:\new\test.spm"
• Bytes literals in 3.X and 2.6+ (see Chapter 4, Chapter 37): b'sp\x01am'
• Unicode literals in 2.X and 3.3+ (see Chapter 4, Chapter 37): u'eggs\u0020spam'

Single- and Double-Quoted Strings Are the Same

>>> 'shrubbery', "shrubbery"
('shrubbery', 'shrubbery')

>>> 'knight"s', "knight's"
('knight"s', "knight's")

>>> title = "Meaning " 'of' " Life" # Implicit concatenation
>>> title
'Meaning of Life'

>>> 'knight\'s', "knight\"s"
("knight's", 'knight"s')

\newline
Ignored (continuation line)
\\
Backslash (stores one \)
\'
Single quote (stores ')
\"
Double quote (stores ")
\a
Bell
\b
Backspace
\f
Formfeed
\n
Newline (linefeed)
\r
Carriage return
\t
Horizontal tab
\v
Vertical tab
\xhh
Character with hex value hh (exactly 2 digits)
\ooo
Character with octal value ooo (up to 3 digits)
\0
Null: binary 0 character (doesn’t end string)
\N{ id }
Unicode database ID
\uhhhh
Unicode character with 16-bit hex value
\Uhhhhhhhh
Unicode character with 32-bit hex valuea
\other
Not an escape (keeps both \ and other)


>>> s = 'a\0b\0c'
>>> s
'a\x00b\x00c'
>>> len(s)
5
In Python, a zero (null) character like this does not terminate a string the way a “null
byte” typically does in C. Instead, Python keeps both the string’s length and text in
memory. In fact, no character terminates a string in Python. Here’s a string that is all
String Literals | 195
www.it-ebooks.info
absolute binary escape codes—a binary 1 and 2 (coded in octal), followed by a binary
3 (coded in hexadecimal):
>>> s = '\001\002\x03'
>>> s
'\x01\x02\x03'
>>> len(s)
3
Notice that Python displays nonprintable characters in hex, regardless of how they were
specified. You can freely combine absolute value escapes and the more symbolic escape
types in Table 7-2. The following string contains the characters “spam”, a tab and
newline, and an absolute zero value character coded in hex:
>>> S = "s\tp\na\x00m"
>>> S
's\tp\na\x00m'
>>> len(S)
7
>>> print(S)
s p
a m
This becomes more important to know when you process binary data files in Python.
Because their contents are represented as strings in your scripts, it’s OK to process
binary files that contain any sorts of binary byte values—when opened in binary modes,
files return strings of raw bytes from the external file (there’s much more on files in
Chapter 4, Chapter 9, and Chapter 37).
Finally, as the last entry in Table 7-2 implies, if Python does not recognize the character
after a \ as being a valid escape code, it simply keeps the backslash in the resulting string:
>>> x = "C:\py\code" # Keeps \ literally (and displays it as \\)
>>> x
'C:\\py\\code'
>>> len(x)
10
However, unless you’re able to commit all of Table 7-2 to memory (and there are ar-
guably better uses for your neurons!), you probably shouldn’t rely on this behavior. To
code literal backslashes explicitly such that they are retained in your strings, double
them up (\\ is an escape for one \) or use raw strings; the next section shows how.



myfile = open('C:\new\text.dat', 'w')
>>> path = r'C:\new\text.dat'
>>> path # Show as Python code
'C:\\new\\text.dat'
>>> print(path) # User-friendly format
C:\new\text.dat
>>> len(path) # String length
15


Triple Quotes Code Multiline Block Strings
>>> mantra = """Always look
... on the bright
... side of life."""
>>>
>>> mantra
'Always look\n on the bright\nside of life.'

>>> print(mantra)
Always look
on the bright
side of life.
>>> menu = """spam # comments here added to string!
... eggs # ditto
... """
>>> menu
'spam # comments here added to string!\neggs # ditto\n'
>>> menu = (
... "spam\n" # comments here ignored
... "eggs\n" # but newlines not automatic
... )
>>> menu
'spam\neggs\n'

% python
>>> len('abc') # Length: number of items
3
>>> 'abc' + 'def' # Concatenation: a new string
'abcdef'
>>> 'Ni!' * 4

>>> print('------- ...more... ---') # 80 dashes, the hard way
>>> print('-' * 80) # 80 dashes, the easy way



>>> myjob = "hacker"
>>> for c in myjob: print(c, end=' ') # Step through items, print each (3.X form)
...
h a c k e r
>>> "k" in myjob # Found
True
>>> "z" in myjob # Not found
False
>>> 'spam' in 'abcspamdef' # Substring search, no position returned
True

>>> S = 'spam'
>>> S[0], S[−2] # Indexing from front or end
('s', 'a')
>>> S[1:3], S[1:], S[:−1] # Slicing: extract a section
('pa', 'pam', 'spa')

Indexing (S[i]) fetches components at offsets:
• The first item is at offset 0.
• Negative indexes mean to count backward from the end or right.
• S[0] fetches the first item.
• S[−2] fetches the second item from the end (like S[len(S)−2]).

Slicing (S[i:j]) extracts contiguous sections of sequences:
• The upper bound is noninclusive.
• Slice boundaries default to 0 and the sequence length, if omitted.
• S[1:3] fetches items at offsets 1 up to but not including 3.
• S[1:] fetches items at offset 1 through the end (the sequence length).
• S[:3] fetches items at offset 0 up to but not including 3.
• S[:−1] fetches items at offset 0 up to but not including the last item.
• S[:] fetches items at offsets 0 through the end—making a top-level copy of S.
Extended slicing (S[i:j:k]) accepts a step (or stride) k, which
defaults to +1:
• Allows for skipping items and reversing order—see the next section.

>>> S = 'abcdefghijklmnop'
>>> S[1:10:2] # Skipping items
'bdfhj'
>>> S[::2]
'acegikmo'

>>> S = 'hello'
>>> S[::−1] # Reversing items
'olleh'


>>> S = 'abcedfg'
>>> S[5:1:−1] # Bo

unds roles differ
'fdec'




>>> 'spam'[1:3] # Slicing syntax
'pa'
>>> 'spam'[slice(1, 3)] # Slice objects with index syntax + object
'pa'
>>> 'spam'[::-1]
'maps'
>>> 'spam'[slice(None, None, −1)]
'maps'


# File echo.py
import sys
print(sys.argv)
% python echo.py −a −b −c
['echo.py', '−a', '−b', '−c']



# Python 3.X
>>> "42" + 1
TypeError: Can't convert 'int' object to str implicitly
# Python 2.X
>>> "42" + 1
TypeError: cannot concatenate 'str' and 'int' objects


>>> int("42"), str(42) # Convert from/to string
(42, '42')
>>> repr(42) # Convert to as-code string
'42'

>>> print(str('spam'), repr('spam')) # 2.X: print str('spam'), repr('spam')
spam 'spam'

>>> str('spam'), repr('spam') # Raw interactive echo displays
('spam', "'spam'")
>>> S = "42"
>>> I = 1
>>> S + I
TypeError: Can't convert 'int' object to str implicitly
>>> int(S) + I # Force addition
43
>>> S + str(I) # Force concatenation
'421'

>>> str(3.1415), float("1.5")
('3.1415', 1.5)
>>> text = "1.234E-10"
>>> float(text) # Shows more digits before 2.7 and 3.1
1.234e-10

>>> ord('s')
115
>>> chr(115)
's'
>>> S = '5'
>>> S = chr(ord(S) + 1)
>>> S
'6'
>>> S = chr(ord(S) + 1)
>>> S
'7'
>>> int('5')
5
>>> ord('5') - ord('0')
5

>>> B = '1101' # Convert binary digits to integer with ord
>>> I = 0
>>> while B != '':
... I = I * 2 + (ord(B[0]) - ord('0'))
... B = B[1:]
...
>>> I
13

>>> int('1101', 2) # Convert binary to integer: built-in
13
>>> bin(13) # Convert integer to binary: built-in
'0b1101'

>>> S = 'spam'
>>> S[0] = 'x' # Raises an error!
TypeError: 'str' object does not support item assignment

>>> S = S + 'SPAM!' # To change a string, make a new one
>>> S
'spamSPAM!'
>>> S = S[:4] + 'Burger' + S[−1]
>>> S
'spamBurger!'

>>> S = S + 'SPAM!' # To change a string, make a new one
>>> S
'spamSPAM!'
>>> S = S[:4] + 'Burger' + S[−1]
>>> S
'spamBurger!'

>>> S = 'splot'
>>> S = S.replace('pl', 'pamal')
>>> S
'spamalot'


>>> 'That is %d %s bird!' % (1, 'dead') # Format expression: all Pythons
That is 1 dead bird!
>>> 'That is {0} {1} bird!'.format(1, 'dead') # Format method in 2.6, 2.7, 3.X
'That is 1 dead bird!




Methods of Strings


.capitalize()
S.ljust(width [, fill])
S.casefold()
S.lower()
S.center(width [, fill])
S.lstrip([chars])
S.count(sub [, start [, end]])
S.maketrans(x[, y[, z]])
S.encode([encoding [,errors]])
S.partition(sep)
S.endswith(suffix [, start [, end]])
S.replace(old, new [, count])
S.expandtabs([tabsize])
S.rfind(sub [,start [,end]])
S.find(sub [, start [, end]])
S.rindex(sub [, start [, end]])
S.format(fmtstr, *args, **kwargs)
S.rjust(width [, fill])
S.index(sub [, start [, end]])
S.rpartition(sep)
S.isalnum()
S.rsplit([sep[, maxsplit]])
S.isalpha()
S.rstrip([chars])
S.isdecimal()
S.split([sep [,maxsplit]])
S.isdigit()
S.splitlines([keepends])
S.isidentifier()
S.startswith(prefix [, start [, end]])
S.islower()
S.strip([chars])
S.isnumeric()
S.swapcase()
S.isprintable()
S.title()
S.isspace()
S.translate(map)
S.istitle()
S.upper()
S.isupper()
S.zfill(width)
S.join(iterable)


>>> S = 'spammy'
>>> S = S[:3] + 'xx' + S[5:] # Slice sections from S
>>> S
'spaxxy'

>> S = 'spammy'
>>> S = S.replace('mm', 'xx') # Replace all mm with xx in S
>>> S
'spaxxy'

>>> 'aa$bb$cc$dd'.replace('$', 'SPAM')
'aaSPAMbbSPAMccSPAMdd'

>>> S = 'xxxxSPAMxxxxSPAMxxxx'
>>> where = S.find('SPAM') # Search for position
>>> where # Occurs at offset 4
4
>>> S = S[:where] + 'EGGS' + S[(where+4):]
>>> S
'xxxxEGGSxxxxSPAMxxxx'


>>> S = 'xxxxSPAMxxxxSPAMxxxx'
>>> S.replace('SPAM', 'EGGS') # Replace all
'xxxxEGGSxxxxEGGSxxxx'
>>> S.replace('SPAM', 'EGGS', 1) # Replace one
'xxxxEGGSxxxxSPAMxxxx'


>>> S = 'spammy'
>>> L = list(S)
>>> L
['s', 'p', 'a', 'm', 'm', 'y']


>>> L[3] = 'x' # Works for lists, not strings
>>> L[4] = 'x'
>>> L[3] = 'x' # Works for lists, not strings
>>> L[4] = 'x'
>>> S = 'spammy'
>>> L = list(S)
>>> L

['s', 'p', 'a', 'm', 'm', 'y']
>>> line = 'aaa bbb ccc'
>>> col1 = line[0:3]
>>> col3 = line[8:]
>>> col1
'aaa'
>>> col3
'ccc

>>> line = 'aaa bbb ccc'
>>> cols = line.split()
>>> cols
['aaa', 'bbb', 'ccc']

>>> line = "The knights who say Ni!\n"
>>> line.rstrip()
'The knights who say Ni!'
>>> line.upper()
'THE KNIGHTS WHO SAY NI!\n'
>>> line.isalpha()
False
>>> line.endswith('Ni!\n')
True
>>> line.startswith('The')
True

>>> line
'The knights who say Ni!\n'
>>> line.find('Ni') != −1 # Search via method call or expression
True
>>> 'Ni' in line
True
>>> sub = 'Ni!\n'
>>> line.endswith(sub) # End test via method call or slice
Tru

>>> S = 'a+b+c+'
>>> x = S.replace('+', 'spam'

                  


>>> 'That is %d %s bird!' % (1, 'dead') # Format expression
That is 1 dead bird!

>>> exclamation = 'Ni'
>>> 'The knights who say %s!' % exclamation # String substitution
'The knights who say Ni!'
>>> '%d %s %g you' % (1, 'spam', 4.0) # Type-specific substitutions
'1 spam 4 you'
>>> '%s -- %s -- %s' % (42, 3.14159, [1, 2, 3]) # All types match a %s target
'42 -- 3.14159 -- [1, 2, 3]'


s
String (or any object’s str(X) string)
r
Same as s, but uses repr, not str
c
Character (int or str)
d
Decimal (base-10 integer)
i
Integer
u
Same as d (obsolete: no longer unsigned)
o
Octal integer (base 8)
x
Hex integer (base 16)
X
Same as x, but with uppercase letters
e
Floating point with exponent, lowercase
E
Same as e, but uses uppercase letters
f
Floating-point decimal
F
Same as f, but uses uppercase letters
g
Floating-point e or f
G
Floating-point E or F
%
Literal % (coded as %%


>>> x = 1234
>>> res = 'integers: ...%d...%−6d...%06d' % (x, x, x)
>>> res
'integers: ...1234...1234 ...001234'

           
           
>>> x = 1.23456789
>>> x # Shows more digits before 2.7 and 3.1
1.23456789
>>> '%e | %f | %g' % (x, x, x)
'1.234568e+00 | 1.234568 | 1.23457'
>>> '%E' % x
'1.234568E+00

           
>>> '%−6.2f | %05.2f | %+06.1f' % (x, x, x)
'1.23 | 01.23 | +001.2'
>>> '%s' % x, str(x)
('1.23456789', '1.23456789')


           >>> # Template with substitution targets
>>> reply = """
Greetings...
Hello %(name)s!
Your age is %(age)s
"""
>>> values = {'name': 'Bob', 'age': 40} # Build up values to substitute
>>> print(reply % values) # Perform substitutions
Greetings...
Hello Bob!
Your age is 40


>>> '%(qty)d more %(food)s' % {'qty': 1, 'food': 'spam'}
'1 more spam'

    >>> food = 'spam'
>>> qty = 10
>>> vars()
{'food': 'spam', 'qty': 10, ...plus built-in names set by Python... }       



 >>> template = '{0}, {1} and {2}' # By position
>>> template.format('spam', 'ham', 'eggs')
'spam, ham and eggs'
>>> template = '{motto}, {pork} and {food}' # By keyword
>>> template.format(motto='spam', pork='ham', food='eggs')
'spam, ham and eggs'
>>> template = '{motto}, {0} and {food}' # By both
>>> template.format('ham', motto='spam', food='eggs')
'spam, ham and eggs'
>>> template = '{}, {} and {}' # By relative position
>>> template.format('spam', 'ham', 'eggs') # New in 3.1 and 2.7
'spam, ham and eggs'


>>> template = '{0}, {1} and {2}' # By position
>>> template.format('spam', 'ham', 'eggs')
'spam, ham and eggs'
>>> template = '{motto}, {pork} and {food}' # By keyword
>>> template.format(motto='spam', pork='ham', food='eggs')
'spam, ham and eggs'
>>> template = '{motto}, {0} and {food}' # By both
>>> template.format('ham', motto='spam', food='eggs')
'spam, ham and eggs'
>>> template = '{}, {} and {}' # By relative position
>>> template.format('spam', 'ham', 'eggs') # New in 3.1 and 2.7
'spam, ham and eggs'

>>> '{motto}, {0} and {food}'.format(42, motto=3.14, food=[1, 2])
'3.14, 42 and [1, 2]'
           
>>> '{motto}, {0} and {food}'.format(42, motto=3.14, food=[1, 2])
'3.14, 42 and [1, 2]'

           >>> import sys
>>> 'My {1[kind]} runs {0.platform}'.format(sys, {'kind': 'laptop'})
'My laptop runs win32'

           >>> 'My {map[kind]} runs {sys.platform}'.format(sys=sys, map={'kind': 'laptop'})
'My laptop runs win32'


>>> somelist = list('SPAM')
>>> somelist
['S', 'P', 'A', 'M']
>>> 'first={0[0]}, third={0[2]}'.format(somelist)
'first=S, third=A'
>>> 'first={0}, last={1}'.format(somelist[0], somelist[-1]) # [-1] fails in fmt
'first=S, last=M'
>>> parts = somelist[0], somelist[-1], somelist[1:3] # [1:3] fails in fmt
>>> 'first={0}, last={1}, middle={2}'.format(*parts) # Or '{}' in 2.7/3.1+
"first=S, last=M, middle=['P', 'A

           >>> '{0:10} = {1:10}'.format('spam', 123.4567) # In Python 3.3
'spam = 123.4567'
>>> '{0:>10} = {1:<10}'.format('spam', 123.4567)
' spam = 123.4567 '
>>> '{0.platform:>10} = {1[kind]:<10}'.format(sys, dict(kind='laptop'))
' win32 = laptop

>>> '{:10} = {:10}'.format('spam', 123.4567)
'spam = 123.4567'
>>> '{:>10} = {:<10}'.format('spam', 123.4567)
' spam = 123.4567 '
>>> '{.platform:>10} = {[kind]:<10}'.format(sys, dict(kind='laptop'))
' win32 = laptop

           >>> '{0:e}, {1:.3e}, {2:g}'.format(3.14159, 3.14159, 3.14159)
'3.141590e+00, 3.142e+00, 3.14159'
>>> '{0:f}, {1:.2f}, {2:06.2f}'.format(3.14159, 3.14159, 3.14159)
'3.141590, 3.14, 003.14

           >>> '{0:X}, {1:o}, {2:b}'.format(255, 255, 255) # Hex, octal, binary
'FF, 377, 11111111'
>>> bin(255), int('11111111', 2), 0b11111111 # Other to/from binary
('0b11111111', 255, 255)
>>> hex(255), int('FF', 16), 0xFF # Other to/from hex
('0xff', 255, 255)
>>> oct(255), int('377', 8), 0o377 # Other to/from octal, in 3.X
('0o377', 255, 255)


>>> '{0:.2f}'.format(1 / 3.0) # Parameters hardcoded
'0.33'
>>> '%.2f' % (1 / 3.0) # Ditto for expression
'0.33'
>>> '{0:.{1}f}'.format(1 / 3.0, 4) # Take value from arguments
'0.3333'
>>> '%.*f' % (4, 1 / 3.0) # Ditto for expression
'0.3333

 >>> '{0:.2f}'.format(1.2345) # String method
'1.23'
>>> format(1.2345, '.2f') # Built-in function
'1.23'
>>> '%.2f' % 1.2345 # Expression
'1.23

print('%s=%s' % ('spam', 42)) # Format expression: in all 2.X/3.X
print('{0}={1}'.format('spam', 42)) # Format method: in 3.0+ and 2.6+
print('{}={}'.format('spam', 42)) # With autonumbering: in 3.1+ and 2.7

           
>>> '%s, %s and %s' % (3.14, 42, [1, 2]) # Arbitrary types
'3.14, 42 and [1, 2]'
>>> 'My %(kind)s runs %(platform)s' % {'kind': 'laptop', 'platform': sys.platform}
'My laptop runs win32'
>>> 'My %(kind)s runs %(platform)s' % dict(kind='laptop', platform=sys.platform)
'My laptop runs win32'
>>> somelist = list('SPAM'
>>> parts = somelist[0], somelist[-1], somelist[1:3]
>>> 'first=%s, last=%s, middle=%s' % parts
"first=S, last=M, middle=['P', 'A']"

                    >>> '%-10s = %10s' % ('spam', 123.4567)
'spam = 123.4567'
>>> '%10s = %-10s' % ('spam', 123.4567)
' spam = 123.4567 '
>>> '%(plat)10s = %(kind)-10s' % dict(plat=sys.platform, kind='laptop')
' win32 = laptop '
# Floating-point numbers
>>> '%e, %.3e, %g' % (3.14159, 3.14159, 3.14159)
'3.141590e+00, 3.142e+00, 3.14159'
>>> '%f, %.2f, %06.2f' % (3.14159, 3.14159, 3.14159)
'3.141590, 3.14, 003.14'
# Hex and octal, but not binary (see ahead)
>>> '%x, %o' % (255, 255)
'ff, 377'

                
   >>> import sys
>>> 'My {1[kind]:<8} runs {0.platform:>8}'.format(sys, {'kind': 'laptop'})
'My laptop runs win32'
>>> 'My %(kind)-8s runs %(plat)8s' % dict(kind='laptop', plat=sys.platform)
'My laptop runs win32'

>>> data = dict(platform=sys.platform, kind='laptop')
>>> 'My {kind:<8} runs {platform:>8}'.format(**data)
'My laptop runs win32'
>>> 'My %(kind)-8s runs %(platform)8s' % data
'My laptop runs win32'
                    
>>> '{0:d}'.format(999999999999)
'999999999999'
>>> '{0:,d}'.format(999999999999)
'999,999,999,999

>>> '{:,d}'.format(999999999999)
'999,999,999,999'
>>> '{:,d} {:,d}'.format(9999999, 8888888)
'9,999,999 8,888,888'
>>> '{:,.2f}'.format(296999.2567)
'296,999.26'


>>> from formats import commas, money
>>> '%s' % commas(999999999999)
'999,999,999,999'
>>> '%s %s' % (commas(9999999), commas(8888888))
'9,999,999 8,888,888'
>>> '%s' % money(296999.2567)
'$296,999.26
                    
                    
 >>> [commas(x) for x in (9999999, 8888888)]
['9,999,999', '8,888,888']
>>> '%s %s' % tuple(commas(x) for x in (9999999, 8888888))
'9,999,999 8,888,888'
>>> ''.join(commas(x) for x in (9999999, 8888888))
'9,999,9998,888,888'


>>> '{0:b}'.format((2 ** 16) − 1) # Expression (only) binary format code
'1111111111111111'
>>> '%b' % ((2 ** 16) − 1)
ValueError: unsupported format character 'b'...
>>> bin((2 ** 16) − 1) # But other more general options work too
'0b1111111111111111'
>>> '%s' % bin((2 ** 16) - 1) # Usable with both method and % expression
'0b1111111111111111'
>>> '{}'.format(bin((2 ** 16) - 1)) # With 2.7/3.1+ relative numbering
'0b1111111111111111'
>>> '%s' % bin((2 ** 16) - 1)[2:] # Slice off 0b to get exact equivalent
'1111111111111111'


>>> '{:,d}'.format(999999999999) # New str.format method feature in 3.1/2.7
'999,999,999,999'
>>> '%s' % commas(999999999999) # But % is same with simple 8-line function
'999,999,999,999'

>>> '{name} {job} {name}'.format(name='Bob', job='dev')
'Bob dev Bob'
>>> '%(name)s %(job)s %(name)s' % dict(name='Bob', job='dev')
'Bob dev Bob
                    
                    
>>> D = dict(name='Bob', job='dev')
>>> '{0[name]} {0[job]} {0[name]}'.format(D) # Method, key references
'Bob dev Bob'
>>> '{name} {job} {name}'.format(**D) # Method, dict-to-args
'Bob dev Bob'
>>> '%(name)s %(job)s %(name)s' % D # Expression, key references
'Bob dev Bob

>>> '{0:f}, {1:.2f}, {2:05.2f}'.format(3.14159, 3.14159, 3.14159)
'3.141590, 3.14, 03.14'
>>> '{:f}, {:.2f}, {:06.2f}'.format(3.14159, 3.14159, 3.14159)
'3.141590, 3.14, 003.14'
>>> '%f, %.2f, %06.2f' % (3.14159, 3.14159, 3.14159)
'3.141590, 3.14, 003.14'

>>> '%.2f' % 1.2345 # Single value
'1.23'
>>> '%.2f %s' % (1.2345, 99) # Multiple values tuple
'1.23 99'

>>> '%s' % 1.23 # Single value, by itself
'1.23'
>>> '%s' % (1.23,) # Single value, in a tuple
'1.23'
>>> '%s' % ((1.23,),) # Single value that is a tuple
'(1.23,)

>>> '{0:.2f}'.format(1.2345) # Single value
'1.23'
>>> '{0:.2f} {1}'.format(1.2345, 99) # Multiple values
'1.23 99'
>>> '{0}'.format(1.23) # Single value, by itself
'1.23'
>>> '{0}'.format((1.23,)) # Single value that is a tuple
'(1.23,)'

def myformat(fmt, args): return fmt % args # See Part IV
myformat('%s %s', (88, 99)) # Call your function object
str.format('{} {}', 88, 99) # Versus calling the built-in
otherfunction(myformat) # Your function is an object to

>>> '%(num)i = %(title)s' % dict(num=7, title='Strings')
'7 = Strings

>>> '{num:d} = {title:s}'.format(num=7, title='Strings')
'7 = Strings'
>>> '{num} = {title}'.format(**dict(num=7, title='Strings'))
'7 = Strings'

>>> import string
>>> t = string.Template('$num = $title')
>>> t.substitute({'num': 7, 'title': 'Strings'})
'7 = Strings'
>>> t.substitute(num=7, title='Strings')
'7 = Strings'
>>> t.substitute(dict(num=7, title='Strings'))
'7 = Strings'

X + Y makes a new sequence object with the contents of both operands.
• X * N makes a new sequence object with N copies of the sequence operand X.
------------------------------------------------------------------
Lists and Dictionaries

L = []
An empty list
L = [123, 'abc', 1.23, {}]
Four items: indexes 0..3
L = ['Bob', 40.0, ['dev', 'mgr']]
Nested sublists
L = list('spam')
L = list(range(-4, 4))
List of an iterable’s items, list of successive integers
L[i]
L[i][j]
L[i:j]
len(L)
Index, index of index, slice, length
L1 + L2
Concatenate, repeat


L * 3
for x in L: print(x)
3 in L
Iteration, membership
L.append(4)
L.extend([5,6,7])
L.insert(i, X)
Methods: growing
L.index(X)
L.count(X)
Methods: searching
L.sort()
L.reverse()
L.copy()
L.clear()
Methods: sorting, reversing,
copying (3.3+), clearing (3.3+)
L.pop(i)
L.remove(X)
del L[i]
del L[i:j]
L[i:j] = []
Methods, statements: shrinking
L[i] = 3
L[i:j] = [4,5,6]
Index assignment, slice assignment
L = [x**2 for x in range(5)]
list(map(ord, 'spam')

% python
>>> len([1, 2, 3]) # Length
3
>>> [1, 2, 3] + [4, 5, 6] # Concatenation
[1, 2, 3, 4, 5, 6]
>>> ['Ni!'] * 4 # Repetition
['Ni!', 'Ni!', 'Ni!', 'Ni!']

>>> str([1, 2]) + "34" # Same as "[1, 2]" + "34"
'[1, 2]34'
>>> [1, 2] + list("34") # Same as [1, 2] + ["3", "4"]
[1, 2, '3', '4']

>>> 3 in [1, 2, 3] # Membership
True
>>> for x in [1, 2, 3]:
... print(x, end=' ') # Iteration (2.X uses: print x,)
...
1 2 3

>>> res = [c * 4 for c in 'SPAM'] # List comprehensions
>>> res
['SSSS', 'PPPP', 'AAAA', 'MMMM'

>>> res = []
>>> for c in 'SPAM': # List comprehension equivalent
... res.append(c * 4)
...
>>> res
['SSSS', 'PPPP', 'AAAA', 'MMMM']

>>> L = ['spam', 'Spam', 'SPAM!']
>>> L[2] # Offsets start at zero
'SPAM!'
>>> L[−2] # Negative: count from the right
'Spam'
>>> L[1:] # Slicing fetches sections
['Spam', 'SPAM!']

 matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 
 >>> matrix[1]
[4, 5, 6]
>>> matrix[1][1]
5
>>> matrix[2][0]
7
>>> matrix = [[1, 2, 3],
... [4, 5, 6],
... [7, 8, 9]]
>>> matrix[1][1]
5

>>> L = ['spam', 'Spam', 'SPAM!']
>>> L[1] = 'eggs' # Index assignment
>>> L
['spam', 'eggs', 'SPAM!']
>>> L[0:2] = ['eat', 'more'] # Slice assignment: delete+insert
>>> L # Replaces items 0,1
['eat', 'more', 'SPAM!'

>>> L = [1, 2, 3]
>>> L[1:2] = [4, 5] # Replacement/insertion
>>> L
[1, 4, 5, 3]
>>> L[1:1] = [6, 7] # Insertion (replace nothing)
>>> L
[1, 6, 7, 4, 5, 3]
>>> L[1:2] = [] # Deletion (insert nothing)
>>> L
[1, 7, 4, 5, 3]


>>> L = [1, 2, 3]
>>> L[1:2] = [4, 5] # Replacement/insertion
>>> L
[1, 4, 5, 3]
>>> L[1:1] = [6, 7] # Insertion (replace nothing)
>>> L
[1, 6, 7, 4, 5, 3]
>>> L[1:2] = [] # Deletion (insert nothing)
>>> L
[1, 7, 4, 5, 3]

>>> L = ['eat', 'more', 'SPAM!']
>>> L.append('please') # Append method call: add item at end
>>> L
['eat', 'more', 'SPAM!', 'please']
>>> L.sort() # Sort list items ('S' < 'e')
>>> L
['SPAM!', 'eat', 'more', 'please']

>>> L = ['abc', 'ABD', 'aBe']
>>> L.sort() # Sort with mixed case
>>> L
['ABD', 'aBe', 'abc']
>>> L = ['abc', 'ABD', 'aBe']
>>> L.sort(key=str.lower) # Normalize to lowercase
>>> L
['abc', 'ABD', 'aBe']
>>>
>>> L = ['abc', 'ABD', 'aBe']
>>> L.sort(key=str.lower, reverse=True) # Change sort order
>>> L
['aBe', 'ABD', 'abc']

 >>> L = ['abc', 'ABD', 'aBe']
>>> sorted(L, key=str.lower, reverse=True) # Sorting built-in
['aBe', 'ABD', 'abc']
>>> L = ['abc', 'ABD', 'aBe']
>>> sorted([x.lower() for x in L], reverse=True) # Pretransform items: differs!
['abe', 'abd', 'abc']

>>> L = [1, 2]
>>> L.extend([3, 4, 5]) # Add many items at end (like in-place +)
>>> L
[1, 2, 3, 4, 5]
>>> L.pop() # Delete and return last item (by default: −1)
5
>>> L
[1, 2, 3, 4]
>>> L.reverse() # In-place reversal method
>>> L
[4, 3, 2, 1]
>>> list(reversed(L)) # Reversal built-in with a result (iterator)
[1, 2, 3, 4]

>>> L = []
>>> L.append(1) # Push onto stack
>>> L.append(2)
>>> L
[1, 2]
>>> L.pop() # Pop off stack
2
>>> L
[1]

>>> L = ['spam', 'eggs', 'ham']
>>> L.index('eggs') # Index of an object (search/find)
1
>>> L.insert(1, 'toast') # Insert at position
>>> L
['spam', 'toast', 'eggs', 'ham']
>>> L.remove('eggs') # Delete by value
>>> L
['spam', 'toast', 'ham']
>>> L.pop(1) # Delete by position
'toast'
>>> L
['spam', 'ham']
>>> L.count('spam') # Number of occurrences
1


>>> L = ['spam', 'eggs', 'ham', 'toast']
>>> del L[0] # Delete one item
>>> L
['eggs', 'ham', 'toast']
>>> del L[1:] # Delete an entire section
>>> L # Same as L[1:] = []
['eggs']

>>> L = ['Already', 'got', 'one']
>>> L[1:] = []
>>> L
['Already']
>>> L[0] = []
>>> L
[[]]

Dictionaries
D = {}
Empty dictionary
D = {'name': 'Bob', 'age': 40}
Two-item dictionary
E = {'cto': {'name': 'Bob', 'age': 40}}
Nesting
D = dict(name='Bob', age=40)
D = dict([('name', 'Bob'), ('age', 40)])
D = dict(zip(keyslist, valueslist))
D = dict.fromkeys(['name', 'age'])
Alternative construction techniques:
keywords, key/value pairs, zipped key/value pairs, key lists
D['name']
E['cto']['age']
Indexing by key
'age' in D
Membership: key present test
D.keys()
D.values()
D.items()
D.copy()
D.clear()
D.update(D2)
D.get(key, default?)
D.pop(key, default?)
D.setdefault(key, default?)
D.popitem()
Methods: all keys,
all values,
all key+value tuples,
copy (top-level),
clear (remove all items),
merge by keys,
fetch by key, if absent default (or None),
remove by key, if absent default (or error)
fetch by key, if absent set default (or None),
remove/return any (key, value) pair; etc.
len(D)
Length: number of stored entries
D[key] = 42
Adding/changing keys
del D[key]
Deleting entries by key
list(D.keys())
D1.keys() & D2.keys()
Dictionary views (Python 3.X)
D.viewkeys(), D.viewvalues()
Dictionary views (Python 2.7)
D = {x: x*2 for x in range(10)}
Dictionary comprehensions (Python 3.X, 2.7)

% python
>>> D = {'spam': 2, 'ham': 1, 'eggs': 3} # Make a dictionary
>>> D['spam'] # Fetch a value by key
2
>>> D # Order is "scrambled"
{'eggs': 3, 'spam': 2, 'ham': 1}

>>> len(D) # Number of entries in dictionary
3
>>> 'ham' in D # Key membership test alternative
True
>>> list(D.keys()) # Create a new list of D's keys
['eggs', 'spam', 'ham']

>>> D
{'eggs': 3, 'spam': 2, 'ham': 1}
>>> D['ham'] = ['grill', 'bake', 'fry'] # Change entry (value=list)
>>> D
{'eggs': 3, 'spam': 2, 'ham': ['grill', 'bake', 'fry']}
>>> del D['eggs'] # Delete entry
>>> D
{'spam': 2, 'ham': ['grill', 'bake', 'fry']}
>>> D['brunch'] = 'Bacon' # Add new entry
>>> D
{'brunch': 'Bacon', 'spam': 2, 'ham': ['grill', 'bake', 'fry']}

>>> D = {'spam': 2, 'ham': 1, 'eggs': 3}
>>> list(D.values())
[3, 2, 1]
>>> list(D.items())
[('eggs', 3), ('spam', 2), ('ham', 1)]

>>> D.get('spam') # A key that is there
2
>>> print(D.get('toast')) # A key that is missing
None
>>> D.get('toast', 88)
88

>>> D
{'eggs': 3, 'spam': 2, 'ham': 1}
>>> D2 = {'toast':4, 'muffin':5} # Lots of delicious scrambled order here
>>> D.update(D2)
>>> D
{'eggs': 3, 'muffin': 5, 'toast': 4, 'spam': 2, 'ham': 1}

# pop a dictionary by key
>>> D
{'eggs': 3, 'muffin': 5, 'toast': 4, 'spam': 2, 'ham': 1}
>>> D.pop('muffin')
5
>>> D.pop('toast') # Delete and return from a key
4
>>> D
{'eggs': 3, 'spam': 2, 'ham': 1}
# pop a list by position
>>> L = ['aa', 'bb', 'cc', 'dd']
>>> L.pop() # Delete and return from the end
'dd
>>> L
['aa', 'bb', 'cc']
>>> L.pop(1) # Delete from a specific position
'bb'
>>> L
['aa', 'cc']

>>> table = {'1975': 'Holy Grail', # Key: Value
... '1979': 'Life of Brian',
... '1983': 'The Meaning of Life'}
>>>
>>> year = '1983'
>>> movie = table[year] # dictionary[Key] => Value
>>> movie
'The Meaning of Life'
>>> for year in table: # Same as: for year in table.keys()
... print(year + '\t' + table[year])
...
1979 Life of Brian
1975 Holy Grail
1983 The Meaning of Life


>>> table = {'Holy Grail': '1975', # Key=>Value (title=>year)
... 'Life of Brian': '1979',
... 'The Meaning of Life': '1983'}
>>>
>>> table['Holy Grail']
'1975'
>>> list(table.items()) # Value=>Key (year=>title)
[('The Meaning of Life', '1983'), ('Holy Grail', '1975'), ('Life of Brian', '1979')]
>>> [title for (title, year) in table.items() if year == '1975']
['Holy Grail']

>>> K = 'Holy Grail'
>>> table[K] # Key=>Value (normal usage)
'1975'
>>> V = '1975'
>>> [key for (key, value) in table.items() if value == V] # Value=>Key
['Holy Grail']
>>> [key for key in table.keys() if table[key] == V] # Ditto
['Holy Grail']

Dictionary Usage Notes
Dictionaries are fairly straightforward tools once you get the hang of them, but here
are a few additional pointers and reminders you should be aware of when using them:
• Sequence operations don’t work. Dictionaries are mappings, not sequences; be-
cause there’s no notion of ordering among their items, things like concatenation
(an ordered joining) and slicing (extracting a contiguous section) simply don’t ap-
ply. In fact, Python raises an error when your code runs if you try to do such things.
• Assigning to new indexes adds entries. Keys can be created when you write a
dictionary literal (embedded in the code of the literal itself), or when you assign
values to new keys of an existing dictionary object individually. The end result is
the same.
• Keys need not always be strings. Our examples so far have used strings as keys,
but any other immutable objects work just as well. For instance, you can use inte-
gers as keys, which makes the dictionary look much like a list (when indexing, at
least). Tuples may be used as dictionary keys too, allowing compound key values
—such as dates and IP addresses—to have associated values. User-defined class
instance objects (discussed in Part VI) can also be used as keys, as long as they have
the proper protocol methods; roughly, they need to tell Python that their values
are “hashable” and thus won’t change, as otherwise they would be useless as fixed
keys. Mutable objects such as lists, sets, and other dictionaries don’t work as keys,
but are allowed as values.

>>> L = []
>>> L[99] = 'spam'
Traceback (most recent call last):
File "<stdin>", line 1, in ?
IndexError: list assignment index out of range

>>> D = {}
>>> D[99] = 'spam'
>>> D[99]
'spam'
>>> D
{99: 'spam'}

>>> table = {1975: 'Holy Grail',
... 1979: 'Life of Brian', # Keys are integers, not strings
... 1983: 'The Meaning of Life'}
>>> table[1975]
'Holy Grail'
>>> list(table.items())
[(1979, 'Life of Brian'), (1983, 'The Meaning of Life'), (1975, 'Holy Grail')]

>>> Matrix = {}
>>> Matrix[(2, 3, 4)] = 88
>>> Matrix[(7, 8, 9)] = 99
>>>
>>> X = 2; Y = 3; Z = 4 # ; separates statements: see Chapter 10
>>> Matrix[(X, Y, Z)]
88
>>> Matrix
{(2, 3, 4): 88, (7, 8, 9): 99}

>>> Matrix[(2,3,6)]
Traceback (most recent call last):
File "<stdin>", line 1, in ?
KeyError: (2, 3, 6)

>>> if (2, 3, 6) in Matrix: # Check for key before fetch
... print(Matrix[(2, 3, 6)]) # See Chapters 10 and 12 for if/else
... else:
... print(0)
...
0
>>> try:
... print(Matrix[(2, 3, 6)]) # Try to index
... except KeyError: # Catch and recover
... print(0) # See Chapters 10 and 34 for try/except
...
0
>>> Matrix.get((2, 3, 4), 0) # Exists: fetch and return
88
>>> Matrix.get((2, 3, 6), 0) # Doesn't exist: use default arg
0

>> rec = {}
>>> rec['name'] = 'Bob'
>>> rec['age'] = 40.5
>>> rec['job'] = 'developer/manager'
>>>
>>> print(rec['name'])
Bob

>>> rec = {'name': 'Bob',
... 'jobs': ['developer', 'manager'],
... 'web': 'www.bobs.org/˜Bob',
... 'home': {'state': 'Overworked', 'zip': 12345}}

>>> rec['name']
'Bob'
>>> rec['jobs']
['developer', 'manager']
>>> rec['jobs'][1]
'manager'
>>> rec
home']['zip']
12345

db = []
db.append(rec) # A list "database"
db.append(other)
db[0]['jobs']
db = {}
db['bob'] = rec # A dictionary "database"
db['sue'] = other
db['bob']['jobs']

{'name': 'Bob', 'age': 40} # Traditional literal expression
D = {} # Assign by keys dynamically
D['name'] = 'Bob'
D['age'] = 40
dict(name='Bob', age=40) # dict keyword argument form
dict([('name', 'Bob'), ('age', 40)]) # dict key/value tuples form
Other Ways to Make Dictionaries
{'name': 'Bob', 'age': 40} # Traditional literal expression
D = {} # Assign by keys dynamically
D['name'] = 'Bob'
D['age'] = 40
dict(name='Bob', age=40) # dict keyword argument form
dict([('name', 'Bob'), ('age', 40)]) # dict key/value tuples form


Why You Will Care: Dictionaries Versus Lists
With all the objects in Python’s core types arsenal, some readers may be puzzled over
the choice between lists and dictionaries. In short, although both are flexible collections
of other objects, lists assign items to positions, and dictionaries assign them to more
mnemonic keys. Because of this, dictionary data often carries more meaning to human
readers. For example, the nested list structure in row 3 of Table 8-1 could be used to
represent a record too:
>>> L = ['Bob', 40.5, ['dev', 'mgr']] # List-based "record"
>>> L[0]
'Bob'
>>> L[1] # Positions/numbers for fields
40.5
>>> L[2][1]
'mgr'
For some types of data, the list’s access-by-position makes sense—a list of employees
in a company, the files in a directory, or numeric matrixes, for example. But a more
symbolic record like this may be more meaningfully coded as a dictionary along the
lines of row 2 in Table 8-2, with labeled fields replacing field positions (this is similar
to a record we coded in Chapter 4):
>>> D = {'name': 'Bob', 'age': 40.5, 'jobs': ['dev', 'mgr']}
>>> D['name']
'Bob'
>>> D['age'] # Dictionary-based "record"
40.5
>>> D['jobs'][1] # Names mean more than numbers
'mgr'
For variety, here is the same record recoded with keywords, which may seem even more
readable to some human readers:
>>> D = dict(name='Bob', age=40.5, jobs=['dev', 'mgr'])
>>> D['name']
'Bob'
>>> D['jobs'].remove('mgr')
>>> D
{'jobs': ['dev'], 'age': 40.5, 'name': 'Bob'}
In practice, dictionaries tend to be best for data with labeled components, as well as
structures that can benefit from quick, direct lookups by name, instead of slower linear
searches. As we’ve seen, they also may be better for sparse collections and collections
that grow at arbitrary positions.
Dictionaries in Action | 263
www.it-ebooks.info
Python programmers also have access to the sets we studied in Chapter 5, which are
much like the keys of a valueless dictionary; they don’t map keys to values, but can
often be used like dictionaries for fast lookups when there is no associated value, es-
pecially in search routines:
>>> D = {}
>>> D['state1'] = True # A visited-state dictionary
>>> 'state1' in D
True
>>> S = set()
>>> S.add('state1') # Same, but with sets
>>> 'state1' in S
True
Watch for a rehash of this record representation thread in the next chapter, where we’ll
see how tuples and named tuples compare to dictionaries in this role, as well as in
Chapter 27, where we’ll learn how user-defined classes factor into this picture, com-
bining both data and logic to process it.


>>> list(zip(['a', 'b', 'c'], [1, 2, 3])) # Zip together keys and values
[('a', 1), ('b', 2), ('c', 3)]
>>> D = dict(zip(['a', 'b', 'c'], [1, 2, 3])) # Make a dict from zip result
>>> D
{'b': 2, 'c': 3, 'a': 1}

>>> list(zip(['a', 'b', 'c'], [1, 2, 3])) # Zip together keys and values
[('a', 1), ('b', 2), ('c', 3)]
>>> D = dict(zip(['a', 'b', 'c'], [1, 2, 3])) # Make a dict from zip result
>>> D
{'b': 2, 'c': 3, 'a': 1}

>>> D = {k: v for (k, v) in zip(['a', 'b', 'c'], [1, 2, 3])}
>>> D
{'b': 2, 'c': 3, 'a': 1}

>>> D = {x: x ** 2 for x in [1, 2, 3, 4]} # Or: range(1, 5)
>>> D
{1: 1, 2: 4, 3: 9, 4: 16}
>>> D = {c: c * 4 for c in 'SPAM'} # Loop over any iterable
>>> D
{'S': 'SSSS', 'P': 'PPPP', 'A': 'AAAA', 'M': 'MMMM'}
>>> D = {c.lower(): c + '!' for c in ['SPAM', 'EGGS', 'HAM']}
>>> D
{'eggs': 'EGGS!', 'spam': 'SPAM!', 'ham': 'HAM!'}


>> D = dict.fromkeys(['a', 'b', 'c'], 0) # Initialize dict from keys
>>> D
{'b': 0, 'c': 0, 'a': 0}
>>> D = {k:0 for k in ['a', 'b', 'c']} # Same, but with a comprehension
>>> D
{'b': 0, 'c': 0, 'a': 0}
>>> D = dict.fromkeys('spam') # Other iterables, default value
>>> D
{'s': None, 'p': None, 'a': None, 'm': None}
>>> D = {k: None for k in 'spam'}
>>> D
{'s': None, 'p': None, 'a': None, 'm': None}

>>> D = dict(a=1, b=2, c=3)
>>> D
{'b': 2, 'c': 3, 'a': 1}
>>> K = D.keys() # Makes a view object in 3.X, not a list
>>> K
dict_keys(['b', 'c', 'a'])
>>> list(K) # Force a real list in 3.X if needed
['b', 'c', 'a']
>>> V = D.values() # Ditto for values and items views
>>> V
dict_values([2, 3, 1])
>>> list(V)
[2, 3, 1]
>>> D.items()
dict_items([('b', 2), ('c', 3), ('a', 1)])
>>> list(D.items())
[('b', 2), ('c', 3), ('a', 1)]
>>> K[0] # List operations fail unless converted
TypeError: 'dict_keys' object does not support indexing
>>> list(K)[0]
'b'

>> for k in D.keys(): print(k) # Iterators used automatically in loops
...
b
c
a

>>> D = {'a': 1, 'b': 2, 'c': 3}
>>> D
{'b': 2, 'c': 3, 'a': 1}
>>> K = D.keys()
>>> V = D.values()
>>> list(K) # Views maintain same order as dictionary
['b', 'c', 'a']
>>> list(V)
[2, 3, 1]
>>> del D['b'] # Change the dictionary in place
>>> D
{'c': 3, 'a': 1}
>>> list(K) # Reflected in any current view objects
['c', 'a']
>>> list(V) # Not true in 2.X! - lists detached from dict
[3, 1]

>>> K, V
(dict_keys(['c', 'a']), dict_values([3, 1]))
>>> K | {'x': 4} # Keys (and some items) views are set-like
{'c', 'x', 'a'}
>>> V & {'x': 4}
TypeError: unsupported operand type(s) for &: 'dict_values' and 'dict'
>>> V & {'x': 4}.values()
TypeError: unsupported operand type(s) for &: 'dict_values' and 'dict_values'

>>> D = {'a': 1, 'b': 2, 'c': 3}
>>> D.keys() & D.keys() # Intersect keys views
{'b', 'c', 'a'}
>>> D.keys() & {'b'} # Intersect keys and set
{'b'}
>>> D.keys() & {'b': 1} # Intersect keys and dict
{'b'}
268 | Chapter 8: Lists and Dictionaries
www.it-ebooks.info
>>> D.keys() | {'b', 'c', 'd'} # Union keys and set
{'b', 'c', 'a', 'd'}

>>> D = {'a': 1}
>>> list(D.items()) # Items set-like if hashable
[('a', 1)]
>>> D.items() | D.keys() # Union view and view
{('a', 1), 'a'}
>>> D.items() | D # dict treated same as its keys
{('a', 1), 'a'}
>>> D.items() | {('c', 3), ('d', 4)} # Set of key/value pairs
{('d', 4), ('a', 1), ('c', 3)}
>>> dict(D.items() | {('c', 3), ('d', 4)}) # dict accepts iterable sets too
{'c': 3, 'a': 1, 'd': 4}

>>> D = {'a': 1, 'b': 2, 'c': 3}
>>> D
{'b': 2, 'c': 3, 'a': 1}
>>> Ks = D.keys() # Sorting a view object doesn't work!
>>> Ks.sort()
AttributeError: 'dict_keys' object has no attribute 'sort'

>>> Ks = list(Ks) # Force it to be a list and then sort
>>> Ks.sort()
>>> for k in Ks: print(k, D[k]) # 2.X: omit outer parens in prints
...
a 1
b 2
c 3
>>> D
{'b': 2, 'c': 3, 'a': 1}
>>> Ks = D.keys() # Or you can use sorted() on the keys
>>> for k in sorted(Ks): print(k, D[k]) # sorted() accepts any iterable
... # sorted() returns its result
a 1
Dictionaries in Action | 269
www.it-ebooks.info
b 2
c 3

>> D
{'b': 2, 'c': 3, 'a': 1} # Better yet, sort the dict directly
>>> for k in sorted(D): print(k, D[k]) # dict iterators return keys
...
a 1
b 2
c 3

>>> D
{'b': 2, 'c': 3, 'a': 1}
>>> D.has_key('c') # 2.X only: True/False
AttributeError: 'dict' object has no attribute 'has_key'
>>> 'c' in D # Required in 3.X
True
>>> 'x' in D # Preferred in 2.X today
False
>>> if 'c' in D: print('present', D['c']) # Branch on result
...
present 3
>>> print(D.get('c')) # Fetch with default
3
>>> print(D.get('x'))
None
>>> if D.get('c') != None: print('present', D['c']) # Another option
...
present 3



Why You Will Care: Dictionary Interfaces
Dictionaries aren’t just a convenient way to store information by key in your programs
—some Python extensions also present interfaces that look like and work the same as
dictionaries. For instance, Python’s interface to DBM access-by-key files looks much
like a dictionary that must be opened. You store and fetch strings using key indexes:
import dbm # Named anydbm in Python 2.X
file = dbm.open("filename") # Link to file
file['key'] = 'data' # Store data by key
data = file['key'] # Fetch data by key
In Chapter 28, you’ll see that you can store entire Python objects this way, too, if you
replace dbm in the preceding code with shelve (shelves are access-by-key databases that
store persistent Python objects, not just strings). For Internet work, Python’s CGI script
support also presents a dictionary-like interface. A call to cgi.FieldStorage yields a
dictionary-like object with one entry per input field on the client’s web page:
import cgi
form = cgi.FieldStorage() # Parse form data
if 'name' in form:
showReply('Hello, ' + form['name'].value)
Though dictionaries are the only core mapping type, all of these others are instances
of mappings, and support most of the same operations. Once you learn dictionary
interfaces, you’ll find that they apply to a variety of built-in tools in Python.
For another dictionary use case, see also Chapter 9’s upcoming overview of JSON—a
language-neutral data format used for databases and data transfer. Python dictionaries,
lists, and nested combinations of them can almost pass for records in this format as is,
and may be easily translated to and from formal JSON text strings with Python’s
json standard library module.

-----------------------------------------------------------------------------
Tuples, Files, and Everything Else
Tuples
()
An empty tuple
T = (0,)
A one-item tuple (not an expression)
T = (0, 'Ni', 1.2, 3)
A four-item tuple
T = 0, 'Ni', 1.2, 3
Another four-item tuple (same as prior line)
T = ('Bob', ('dev', 'mgr'))
Nested tuples
T = tuple('spam')
Tuple of items in an iterable
T[i]
T[i][j]
T[i:j]
len(T)
Index, index of index, slice, length
T1 + T2
T * 3
Concatenate, repeat
for x in T: print(x)
'spam' in T
[x ** 2 for x in T]
Iteration, membership
T.index('Ni')
T.count('Ni')
Methods in 2.6, 2.7, and 3.X: search, count
namedtuple('Emp', ['name', 'jobs'])
Named tuple extension type

>>> (1, 2) + (3, 4) # Concatenation
(1, 2, 3, 4)
>>> (1, 2) * 4 # Repetition
(1, 2, 1, 2, 1, 2, 1, 2)
>>> T = (1, 2, 3, 4) # Indexing, slicing
>>> T[0], T[1:3]
(1, (2, 3))

>>> x = (40) # An integer!
>>> x
40
Tuples | 277
www.it-ebooks.info
>>> y = (40,) # A tuple containing an integer
>>> y
(40,)

>>> x = (40) # An integer!
>>> x
40
Tuples | 277
www.it-ebooks.info
>>> y = (40,) # A tuple containing an integer
>>> y
(40,)

>>> T = (1, 2, 3, 4, 5)
>>> L = [x + 20 for x in T]
>>> L
[21, 22, 23, 24, 25]

>>> T = (1, 2, 3, 2, 4, 2) # Tuple methods in 2.6, 3.0, and later
>>> T.index(2) # Offset of first appearance of 2
1
>>> T.index(2, 2) # Offset of appearance after offset 2
3
>>> T.count(2) # How many 2s are there?
3

>>> T = (1, [2, 3], 4)
>>> T[1] = 'spam' # This fails: can't change tuple itself
TypeError: object doesn't support item assignment
>>> T[1][0] = 'spam' # This works: can change mutables inside
>>> T
(1, ['spam', 3], 4)

>>> bob = ('Bob', 40.5, ['dev', 'mgr']) # Tuple record
>>> bob
('Bob', 40.5, ['dev', 'mgr'])
>>> bob[0], bob[2] # Access by position
('Bob', ['dev', 'mgr'])

>>> bob = dict(name='Bob', age=40.5, jobs=['dev', 'mgr']) # Dictionary record
>>> bob
{'jobs': ['dev', 'mgr'], 'name': 'Bob', 'age': 40.5}
>>> bob['name'], bob['jobs'] # Access by key
('Bob', ['dev', 'mgr'])
>>> tuple(bob.values()) # Values to tuple
(['dev', 'mgr'], 'Bob', 40.5)
>>> list(bob.items()) # Items to tuple list
[('jobs', ['dev', 'mgr']), ('name', 'Bob'), ('age', 40.5)]



>>> from collections import namedtuple # Import extension type
>>> Rec = namedtuple('Rec', ['name', 'age', 'jobs']) # Make a generated class
>>> bob = Rec('Bob', age=40.5, jobs=['dev', 'mgr']) # A named-tuple record
>>> bob
Rec(name='Bob', age=40.5, jobs=['dev', 'mgr'])
>>> bob[0], bob[2] # Access by position
('Bob', ['dev', 'mgr'])
>>> bob.name, bob.jobs # Access by attribute
('Bob', ['dev', 'mgr'])
Converting to a dictionary supports key-based behavior when needed:
>>> O = bob._asdict() # Dictionary-like form
>>> O['name'], O['jobs'] # Access by key too
('Bob', ['dev', 'mgr'])
>>> O
OrderedDict([('name', 'Bob'), ('age', 40.5), ('jobs', ['dev', 'mgr'])])

>>> bob = Rec('Bob', 40.5, ['dev', 'mgr']) # For both tuples and named tuples
>>> name, age, jobs = bob # Tuple assignment (Chapter 11)
>>> name, jobs
('Bob', ['dev', 'mgr'])
>>> for x in bob: print(x) # Iteration context (Chapters 14, 20)
...prints Bob, 40.5, ['dev', 'mgr']...

>> bob = {'name': 'Bob', 'age': 40.5, 'jobs': ['dev', 'mgr']}
>>> job, name, age = bob.values()
>>> name, job # Dict equivalent (but order may vary)
('Bob', ['dev', 'mgr'])
>>> for x in bob: print(bob[x]) # Step though keys, index values
...prints values...
>>> for x in bob.values(): print(x) # Step through values view
...prints values...

Files
utput = open(r'C:\spam', 'w')
Create output file ('w' means write)
input = open('data', 'r')
Create input file ('r' means read)
input = open('data')
Same as prior line ('r' is the default)
aString = input.read()
Read entire file into a single string
aString = input.read(N)
Read up to next N characters (or bytes) into a string
aString = input.readline()
Read next line (including \n newline) into a string
aList = input.readlines()
Read entire file into list of line strings (with \n)
output.write(aString)
Write a string of characters (or bytes) into file
output.writelines(aList)
Write all line strings in a list into file
output.close()
Manual close (done for you when file is collected)
output.flush()
Flush output buffer to disk without closing
anyFile.seek(N)
Change file position to offset N for next operation
for line in open('data'): use line
File iterators read line by line
open('f.txt', encoding='latin-1')
Python 3.X Unicode text files (str strings)
open('f.bin', 'rb')
Python 3.X bytes files (bytes strings)
codecs.open('f.txt', encoding='utf8')
Python 2.X Unicode text files (unicode strings)
open('f.bin', 'rb')
Python 2.X bytes files (str strings)

>>> myfile = open('myfile.txt', 'w') # Open for text output: create/empty
>>> myfile.write('hello text file\n') # Write a line of text: string
16
Files | 285
www.it-ebooks.info
>>> myfile.write('goodbye text file\n')
18
>>> myfile.close() # Flush output buffers to disk
>>> myfile = open('myfile.txt') # Open for text input: 'r' is default
>>> myfile.readline() # Read the lines back
'hello text file\n'
>>> myfile.readline()
'goodbye text file\n'
>>> myfile.readline() # Empty string: end-of-file

>>> open('myfile.txt').read() # Read all at once into string
'hello text file\ngoodbye text file\n'
>>> print(open('myfile.txt').read()) # User-friendly display
hello text file
goodbye text file
And if you want to scan a text file line by line, file iterators are often your best option:
>>> for line in open('myfile.txt'): # Use file iterators, not reads
... print(line, end='')
...
hello text file
goodbye text file

>>> open(r'C:\Python33\Lib\pdb.py').readline()
'#! /usr/bin/env python3\n'
>>> open('C:/Python33/Lib/pdb.py').readline()
'#! /usr/bin/env python3\n'
>>> open('C:\\Python33\\Lib\\pdb.py').readline()
'#! /usr/bin/env python3\n

>>> data = open('data.bin', 'rb').read() # Open binary file: rb=read binary
>>> data # bytes string holds binary data
b'\x00\x00\x00\x07spam\x00\x08'
>>> data[4:8] # Act like strings
b'spam'
>>> data[4:8][0] # But really are small 8-bit integers
115
Files | 287
www.it-ebooks.info
>>> bin(data[4:8][0]) # Python 3.X/2.6+ bin() function
'0b1110011'

>>> X, Y, Z = 43, 44, 45 # Native Python objects
>>> S = 'Spam' # Must be strings to store in file
>>> D = {'a': 1, 'b': 2}
>>> L = [1, 2, 3]
>>>
>>> F = open('datafile.txt', 'w') # Create output text file
>>> F.write(S + '\n') # Terminate lines with \n
>>> F.write('%s,%s,%s\n' % (X, Y, Z)) # Convert numbers to strings
>>> F.write(str(L) + '$' + str(D) + '\n') # Convert and separate with $
>>> F.close()

>>> chars = open('datafile.txt').read() # Raw string display
>>> chars
"Spam\n43,44,45\n[1, 2, 3]${'a': 1, 'b': 2}\n"
>>> print(chars) # User-friendly display
Spam
43,44,45
[1, 2, 3]${'a': 1, 'b': 2}


>> F = open('datafile.txt') # Open again
>>> line = F.readline() # Read one line
>>> line
'Spam\n'
>>> line.rstrip() # Remove end-of-line
'Spam

>>> line = F.readline() # Next line from file
>>> line # It's a string here
'43,44,45\n'
>>> parts = line.split(',') # Split (parse) on commas
>>> parts
['43', '44', '45\n']

>> int(parts[1]) # Convert from string to int
44
>>> numbers = [int(P) for P in parts] # Convert all in list at once
>>> numbers
[43, 44, 45]

>>> line = F.readline()
>>> line
"[1, 2, 3]${'a': 1, 'b': 2}\n"
>>> parts = line.split('$') # Split (parse) on $
>>> parts
['[1, 2, 3]', "{'a': 1, 'b': 2}\n"]
>>> eval(parts[0]) # Convert to any object type
[1, 2, 3]
>>> objects = [eval(P) for P in parts] # Do same for all in list
>>> objects
[[1, 2, 3], {'a': 1, 'b': 2}]

>>> D = {'a': 1, 'b': 2}
>>> F = open('datafile.pkl', 'wb')
>>> import pickle
>>> pickle.dump(D, F) # Pickle any object to file
>>> F.close()
Then, to get the dictionary back later, we simply use pickle again to re-create it:
>>> F = open('datafile.pkl', 'rb')
>>> E = pickle.load(F) # Load any object from file
>>> E
{'a': 1, 'b': 2}

Storing Python Objects in JSON Format
>>> name = dict(first='Bob', last='Smith')
>>> rec = dict(name=name, job=['dev', 'mgr'], age=40.5)
>>> rec
{'job': ['dev', 'mgr'], 'name': {'last': 'Smith', 'first': 'Bob'}, 'age': 40.5}

>>> import json
>>> json.dumps(rec)
'{"job": ["dev", "mgr"], "name": {"last": "Smith", "first": "Bob"}, "age": 40.5}'
>>> S = json.dumps(rec)
>>> S
Files | 291
www.it-ebooks.info
'{"job": ["dev", "mgr"], "name": {"last": "Smith", "first": "Bob"}, "age": 40.5}'
>>> O = json.loads(S)
>>> O
{'job': ['dev', 'mgr'], 'name': {'last': 'Smith', 'first': 'Bob'}, 'age': 40.5}
>>> O == rec
True

>>> json.dump(rec, fp=open('testjson.txt', 'w'), indent=4)
>>> print(open('testjson.txt').read())
{
"job": [
"dev",
"mgr"
],
"name": {
"last": "Smith",
"first": "Bob"
},
"age": 40.5
}
>>> P = json.load(open('testjson.txt'))
>>> P
{'job': ['dev', 'mgr'], 'name': {'last': 'Smith', 'first': 'Bob'}, 'age': 40.5}



>>> import csv
>>> rdr = csv.reader(open('csvdata.txt'))
292 | Chapter 9: Tuples, Files, and Everything Else
www.it-ebooks.info
>>> for row in rdr: print(row)
...
['a', 'bbb', 'cc', 'dddd']
['11', '22', '33', '44']

Storing Packed Binary Data: struct
>>> F = open('data.bin', 'wb') # Open binary output file
>>> import struct
>>> data = struct.pack('>i4sh', 7, b'spam', 8) # Make packed binary data
>>> data
b'\x00\x00\x00\x07spam\x00\x08'
>>> F.write(data) # Write byte string
>>> F.close()
Python creates a binary bytes data string, which we write out to the file normally—this
one consists mostly of nonprintable characters printed in hexadecimal escapes, and is
the same binary file we met earlier. To parse the values out to normal Python objects,
we simply read the string back and unpack it using the same format string. Python
extracts the values into normal Python objects—integers and a string:
>>> F = open('data.bin', 'rb')
>>> data = F.read() # Get packed binary data
>>> data
b'\x00\x00\x00\x07spam\x00\x08'
>>> values = struct.unpack('>i4sh', data) # Convert to Python objects
>>> values
(7, b'spam', 8)

File Context Managers
with open(r'C:\code\data.txt') as myfile: # See Chapter 34 for details
for line in myfile:
...use line here...
The try/finally statement that we’ll also study in Chapter 34 can provide similar
functionality, but at some cost in extra code—three extra lines, to be precise (though
we can often avoid both options and let Python close files for us automatically):
myfile = open(r'C:\code\data.txt')
try:
for line in myfile:
...use line here...
finally:
myfile.close()
The with context manager scheme ensures release of system resources in all Pythons,
and may be more useful for output files to guarantee buffer flushes; unlike the more
general try, though, it is also limited to objects that support its protocol. Since both
these options require more information than we have yet obtained, however, we’ll
postpone details until later in this book.

bject type
Category
Mutable?
Numbers (all)
Numeric
No
Strings (all)
Sequence
No
Lists
Sequence
Yes
Dictionaries
Mapping
Yes
Tuples
Sequence
No
Files
Extension
N/A
Sets
Set
Yes
Frozenset
Set
No
bytearray
Sequence
Yes

Lists, dictionaries, and tuples can hold any kind of object.
• Sets can contain any type of immutable object.
• Lists, dictionaries, and tuples can be arbitrarily nested.
• Lists, dictionaries, and sets can dynamically grow and shrink.

>>> L = ['abc', [(1, 2), ([3], 4)], 5]
>>> L[1]
[(1, 2), ([3], 4)]
>>> L[1][1]
([3], 4)
>>> L[1][1][0]
[3]
>>> L[1][1][0][0]
3

>>> L1 == L2, L1 is L2 # Equivalent? Same object?
(True, False)
Here, L1 and L2 are assigned lists that are equivalent but distinct objects. As a review
of what we saw in Chapter 6, because of the nature of Python references, there are two
ways to test for equality:
• The == operator tests value equivalence. Python performs an equivalence test,
comparing all nested objects recursively.
• The is operator tests object identity. Python tests whether the two are really the
same object (i.e., live at the same address in memory).
In the preceding example, L1 and L2 pass the == test (they have equivalent values because
all their components are equivalent) but fail the is check (they reference two different
objects, and hence two different pieces of memory). Notice what happens for short
strings, though:
>>> S1 = 'spam'
>>> S2 = 'spam'
>>> S1 == S2, S1 is S2
(True, True)

Object
Value
"spam"
True
""
False
[1, 2]
True
[]
False
{'a': 1}
True
{}
False
1
True
0.0
False
None
False

he None object
As shown in the last row in Table 9-4, Python also provides a special object called
None, which is always considered to be false. None was introduced briefly in Chap-
ter 4; it is the only value of a special data type in Python and typically serves as an empty
placeholder (much like a NULL pointer in C).
>>> L = [None] * 100
>>>
>>> L
[None, None, None, None, None, None, None, ... ]


The bool type
While we’re on the topic of truth, also keep in mind that the Python Boolean type
bool, introduced in Chapter 5, simply augments the notions of true and false in Python.
As we learned in Chapter 5, the built-in words True and False are just customized
versions of the integers 1 and 0—it’s as if these two words have been preassigned to 1
and 0 everywhere in Python. Because of the way this new type is implemented, this is
really just a minor extension to the notions of true and false already described, designed
to make truth values more explicit:
• When used explicitly in truth test code, the words True and False are equivalent
to 1 and 0, but they make the programmer’s intent clearer.
• Results of Boolean tests run interactively print as the words True and False, instead
of as 1 and 0, to make the type of result clearer.
You are not required to use only Boolean types in logical statements such as if; all
objects are still inherently true or false, and all the Boolean concepts mentioned in this
chapter still work as described if you use other types. Python also provides a bool built-
in function that can be used to test the Boolean value of an object if you want to make
this explicit (i.e., whether it is true—that is, nonzero or nonempty):
>>> bool(1)
True
>>> bool('spam')
True
>>> bool({})
Fals

type([1]) == type([]) # Compare to type of another list
type([1]) == list # Compare to list type name
isinstance([1], list) # Test if list or customization thereof
import types # types has names for other types
def f(): pass
type(f) == types.FunctionType

Build in structures

Collection
 1. Sequence 
   1.1. Immutable
      1.1.1. String
      1.1.2. Unicode
      1.1.3. Byte
      1.1.4. Tuple
   1.2. Mutable
      1.2.1 List
      1.2.2 Bytearray
      
 2. Mapping
   2.1 Dictionary
 3. Sets
  3.1 Set
  3.2 Frozenset
  
  Numbers
  Integer -> Integer , Long , Boolean
  Float -> Float, Complex, Decimal, Fraction
  
  Callables
  Fuction, Generator, Class, Method(Boundm Unbound)
  
  other -> Module, Instance , File
  
  Internals -> Type, Code, Frame, Traceback
  
  --------------------------------------------------------------
  Statements and Syntax
  
1. Programs are composed of modules.
2. Modules contain statements.
3. Statements contain expressions.
4. Expressions create and process objects

  
  Assignment
Creating references
a, b = 'good', 'bad'
Calls and other expressions
Running functions
log.write("spam, ham")
print calls
Printing objects
print('The Killer', joke)
if/elif/else
Selecting actions
if "python" in text:
print(text)
for/else
Iteration
for x in mylist:
print(x)
while/else
General loops
while X > Y:
print('hello')
pass
Empty placeholder
while True:
pass
break
Loop exit
while True:
if exittest(): break
continue
Loop continue
while True:
if skiptest(): continue
def
Functions and methods
def f(a, b, c=1, *d):
print(a+b+c+d[0])
return
Functions results
def f(a, b, c=1, *d):
return a+b+c+d[0]
yield
Generator functions
def gen(n):
for i in n: yield i*2
global
Namespaces
x = 'old'
def function():
global x, y; x = 'new'
nonlocal
Namespaces (3.X)
def outer():
x = 'old'

import
Module access
import sys
from
Attribute access
from sys import stdin
class
Building objects
class Subclass(Superclass):
staticData = []
def method(self): pass
try/except/ finally
Catching exceptions
try:
action()
except:
print('action error')
raise
Triggering exceptions
raise EndSearch(location)
assert
Debugging checks
assert X > Y, 'X too small'
with/as
Context managers (3.X, 2.6+)
with open('data') as myfile:
process(myfile)
del
Deleting references
del data[k]
del data[i:j]
del obj.attr
del variable

if x > y:
x = 1
y = 2

End of indentation is end of blockif x:

if y:
statement1
else:
statement2

a = 1; b = 2; print(a + b) # Three statements on one line

if x > y: print(x)

while True:
reply = input('Enter text:')
if reply == 'stop': break
print(reply.upper())

while True:
reply = input('Enter text:')
if reply == 'stop':
break
elif not reply.isdigit():
print('Bad!' * 8)
else:
print(int(reply) ** 2)
print('Bye')

while True:
reply = input('Enter text:')
if reply == 'stop': break
try:
num = int(reply)
except:
print('Bad!' * 8)
else:
print(num ** 2)
print('Bye')

---------------------------------------------------------------------------------
Assignments, Expressions, and Prints
spam = 'Spam'
Basic form
spam, ham = 'yum', 'YUM'
Tuple assignment (positional)
[spam, ham] = ['yum', 'YUM']
List assignment (positional)
a, b, c, d = 'spam'
Sequence assignment, generalized
a, *b = 'spam'
Extended sequence unpacking (Python 3.X)
spam = ham = 'lunch'
Multiple-target assignment
spams += 42
Augmented assignment (equivalent to spams = spams + 42)


Sequence Assignments
We’ve already used and explored basic assignments in this book, so we’ll take them as
a given. Here are a few simple examples of sequence-unpacking assignments in action:
% python
>>> nudge = 1 # Basic assignment
>>> wink = 2
>>> A, B = nudge, wink # Tuple assignment
>>> A, B # Like A = nudge; B = wink
(1, 2)
>>> [C, D] = [nudge, wink] # List assignment
>>> C, D
(1, 2)

>>> nudge = 1
>>> wink = 2
>>> nudge, wink = wink, nudge # Tuples: swaps values
>>> nudge, wink # Like T = nudge; nudge = wink; wink = T
(2, 1

>>> [a, b, c] = (1, 2, 3) # Assign tuple of values to list of names
>>> a, c
(1, 3)
>>> (a, b, c) = "ABC" # Assign string of characters to tuple
>>> a, c
('A', 'C')

>>> string = 'SPAM'
>>> a, b, c, d = string # Same number on both sides
>>> a, d
('S', 'M')
>>> a, b, c = string # Error if not
...error text omitted...
ValueError: too many values to unpack (expected 3)
>>> a, b, c = string[0], string[1], string[2:] # Index and slice
>>> a, b, c
('S', 'P', 'AM')
>>> a, b, c = list(string[:2]) + [string[2:]] # Slice and concatenate
>>> a, b, c
('S', 'P', 'AM')
>>> a, b = string[:2] # Same, but simpler
>>> c = string[2:]
>>> a, b, c
('S', 'P', 'AM')
>>> (a, b), c = string[:2], string[2:] # Nested sequences
>>> a, b, c

or (a, b, c) in [(1, 2, 3), (4, 5, 6)]: ... # Simple tuple assignment
for ((a, b), c) in [((1, 2

>>> list(range(3)) # list() required in Python 3.X only
[0, 1, 2]

>> L = [1, 2, 3, 4]
>>> while L:
... front, L = L[0], L[1:] # See next section for 3.X * alternative
... print(front, L)
...
1 [2, 3, 4]
2 [3, 4]
3 [4]
4 []

Extended unpacking in action
C:\code> c:\python33\python
>>> seq = [1, 2, 3, 4]
>>> a, b, c, d = seq
>>> print(a, b, c, d)
1 2 3 4
>>> a, b = seq
ValueError: too many values to unpack (expected 2)
In Python 3.X, though, we can use a single starred nam

>> a, *b = seq
>>> a
1
>>> b
[2, 3, 4]

>>> *a, b = seq
>>> a
[1, 2, 3]
>>> b
4

>>> a, *b, c = seq
>>> a
1
>>> b
[2, 3]
>>> c
4

>>> a, b, *c = seq
>>> a
Assignment Statements | 345
www.it-ebooks.info
1
>>> b
2
>>> c
[3, 4]

>> a, *b = 'spam'
>>> a, b
('s', ['p', 'a', 'm'])
>>> a, *b, c = 'spam'
>>> a, b, c
('s', ['p', 'a'], 'm')
>>> a, *b, c = range(4)
>>> a, b, c
(0, [1, 2], 3)

Augmented Assignments
Beginning with Python 2.0, the set of additional assignment statement formats listed
in Table 11-2 became available. Known as augmented assignments, and borrowed from
the C language, these formats are mostly just shorthand. They imply the combination
of a binary expression and an assignment. For instance, the following two formats are
roughly equivalent:
X = X + Y # Traditional form
X += Y # Newer augmented form
Table 11-2. Augmented assignment statements
X += Y
X &= Y
X −= Y
X |= Y
X *= Y
X ^= Y
X /= Y
X >>= Y
X %= Y
X <<= Y
X **= Y
X //= Y
Augmented assignment works on any type that supports the implied binary expression.
For example, here are two ways to add 1 to a name:
>>> x = 1
>>> x = x + 1 # Traditional
>>> x
2
>>> x += 1 # Augmented
>>> x
3


spam(eggs, ham)
Function calls
spam.ham(eggs)
Method calls
spam
Printing variables in the interactive interpreter
print(a, b, c, sep='')
Printing operations in Python 3.X
yield x ** 2
Yielding expression statements


Print Operations
print([object, ...][, sep=' '][, end='\n'][, file=sys.stdout][, flush=False])
C:\code> c:\python33\python
>>> print() # Display a blank line
>>> x = 'spam'
>>> y = 99
>>> z = ['eggs']
>>>
>>> print(x, y, z) # Print three objects per defaults
spam 99 ['eggs']
There’s no need to convert objects to strings here, as would be required for file write
methods. By default, print calls add a space between the objects printed. To suppress
this, send an empty string to the sep keyword argument, or send an alternative separator
of your choosing:
>>> print(x, y, z, sep='') # Suppress separator
spam99['eggs']
>>>
>>> print(x, y, z, sep=', ') # Custom separator
spam, 99, ['eggs']

>>> print(x, y, z, end='') # Suppress line break
spam 99 ['eggs']>>>
>>>
>>> print(x, y, z, end=''); print(x, y, z) # Two prints, same output line
spam 99 ['eggs']spam 99 ['eggs']
>>> print(x, y, z, end='...\n') # Custom line end
spam 99 ['eggs']...
>>>

>>> print(x, y, z, sep='...', file=open('data.txt', 'w')) # Print to a file
>>> print(x, y, z) # Back to stdout
spam 99 ['eggs']
>>> print(open('data.txt').read()) # Display file text
spam...99...['eggs']

>>> text = '%s: %-.4f, %05d' % ('Result', 3.14159, 42)
>>> print(text)
Result: 3.1416, 00042
>>> print('%s: %-.4f, %05d' % ('Result', 3.14159, 42))
Result: 3.1416, 00042

>>> print('%s %s %s' % ('spam', 'ham', 'eggs'))
spam ham eggs
>>> print('{0} {1} {2}'.format('spam', 'ham', 'eggs'))
spam ham eggs
>>> print('answer: ' + str(42))
answer: 42

----------------------------------------------------------------------

if test1: # if test
statements1 # Associated block
elif test2: # Optional elifs
statements2
371
www.it-ebooks.info
else: # Optional else
statements3



>>> choice = 'ham'
>>> print({'spam': 1.25, # A dictionary-based 'switch'
... 'ham': 1.99, # Use has_key or get for default
... 'eggs': 0.99,
... 'bacon': 1.10}[choice])
1.9


x = 1
if x:
y = 2
if y:
print('block2')
print('block1')
print('block0')

break, continue, pass, and the Loop else
Now that we’ve seen a few Python loops in action, it’s time to take a look at two simple
statements that have a purpose only when nested inside loops—the break and con
tinue statements. While we’re looking at oddballs, we will also study the loop else
clause here because it is intertwined with break, and Python’s empty placeholder state-
ment, pass (which is not tied to loops per se, but falls into the general category of simple
one-word statements). In Python:
break
Jumps out of the closest enclosing loop (past the entire loop statement)
continue
Jumps to the top of the closest enclosing loop (to the loop’s header line)
pass
Does nothing at all: it’s an empty statement placeholder
Loop else block
Runs if and only if the loop is exited normally (i.e., without hitting a break)

while True: pass # Type Ctrl-C to stop me!

for target in object: # Assign object items to target
statements # Repeated loop body: use target
else: # Optional else part
statement

>>> for x in ["spam", "eggs", "ham"]:
... print(x, end=' ')
...
spam eggs ham


>>> sum = 0
>>> for x in [1, 2, 3, 4]:
... sum = sum + x
...
>>> sum
10
>>> prod = 1
>>> for item in [1, 2, 3, 4]: prod *= item
...
>>> prod
24

>>> items = ["aaa", 111, (4, 5), 2.01] # A set of objects
>>> tests = [(4, 5), 3.14] # Keys to search for
>>>
>>> for key in tests: # For all keys
... for item in items: # For all items
... if item == key: # Check for match
... print(key, "was found")
... break
... else:
... print(key, "not found!")
...
(4, 5) was found
3.14 not found
-------------------------------------------------------------------------
Iterators
>>> for x in [1, 2, 3, 4]: print(x ** 2, end=' ') # In 2.X: print x ** 2,
...
1 4 9 16
>>> for x in (1, 2, 3, 4): print(x ** 3, end=' ')
...
1 8 27 64
>>> for x in 'spam': print(x * 2, end=' ')
...
ss pp aa mm

>>> f = open('script2.py') # Read a four-line script file in this directory
>>> f.readline() # readline loads one line on each call
'import sys\n'
>>> f.readline()
'print(sys.path)\n'
>>> f.readline()
'x = 2\n'
>>> f.readline() # Last lines may have a \n or not
'print(x ** 32)\n'
>>> f.readline()

>>> f = open('script2.py') # __next__ loads one line on each call too
>>> f.__next__() # But raises an exception at end-of-file
'import sys\n'
>>> f.__next__() # Use f.next() in 2.X, or next(f) in 2.X or 3.X
'print(sys.path)\n'
>>> f.__next__()
'x = 2\n'
>>> f.__next__()
'print(x ** 32)\n'
>>> f.__next__()
Traceback (most recent call last):
File "<stdin>", line 1, in <module>
StopIteration

L = [1, 2, 3, 4, 5]
>>> for i in range(len(L)):
... L[i] += 10
...
>>> L
[11, 12, 13, 14, 15]

L = [x + 10 for x in L]

>>> [line.upper() for line in open('script2.py')]
['IMPORT SYS\n', 'PRINT(SYS.PATH)\n', 'X = 2\n', 'PRINT(X ** 32)\n']
>>> [line.rstrip().upper() for line in open('script2.py')]
['IMPORT SYS', 'PRINT(SYS.PATH)', 'X = 2', 'PRINT(X ** 32)']
>>> [line.split() for line in open('script2.py')]
[['import', 'sys'], ['print(sys.path)'], ['x', '=', '2'], ['print(x', '**', '32)']]
>>> [line.replace(' ', '!') for line in open('script2.py')]
['import!sys\n', 'print(sys.path)\n', 'x!=!2\n', 'print(x!**!32)\n']
>>> [('sys' in line, line[:5]) for line in open('script2.py')]
[(True, 'impor'), (True, 'print'), (False, 'x = 2'), (False, 'print')]

The range Iterable
C:\code> c:\python33\python
>>> R = range(10) # range returns an iterable, not a list
>>> R
range(0, 10)
>>> I = iter(R) # Make an iterator from the range iterable
>>> next(I) # Advance to next result
0 # What happens in for loops, comprehensions, etc.
>>> next(I)
1
>>> next(I)
2
>>> list(range(10)) # To force a list if required
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

-------------------------------------------------------------------
The Documentation Interlude
# comments
In-file documentation
The dir function
Lists of attributes available in objects
Docstrings: __doc__
In-file documentation attached to objects
PyDoc: the help function
Interactive help for objects
PyDoc: HTML reports
Module documentation in a browser
Sphinx third-party tool
Richer documentation for larger projects
The standard manual set
Official language and library descriptions
Web resources
Online tutorials, examples, and so on
Published books
Commercially polished reference texts



:\code> python -m pydoc -b
Server ready at http://localhost:62135/
Server commands: [b]rowser, [q]uit
server> q
Server stopped
c:\code> py −3 -m pydoc -b
Server ready at http://localhost:62144/
Server commands: [b]rowser, [q]uit
server> q
Server stopped
c:\code> C:\python33\python -m pydoc -b
Server ready at http://localhost:62153/
Server commands: [b]rowser, [q]uit
server> q
Server stopped


----------------------------------------------------------------------------------
Functions and Generators
Call expressions
myfunc('spam', 'eggs', meat=ham, *rest)
def
def printer(messge):
print('Hello ' + message)
return
def adder(a, b=1, *c):
return a + b + c[0]

global
x = 'old'
def changer():
global x; x = 'new'
nonlocal (3.X)
def outer():
x = 'old'
def changer():
nonlocal x; x = 'new'
yield
def squares(x):
for i in range(x): yield i ** 2
lambda
funcs = [lambda x: x**2, lambda x: x**3]

Name Resolution: The LEGB Rule 
Name assignments create or change local names by default.
• Name references search at most four scopes: local, then enclosing functions (if any),
then global, then built-in.
• Names declared in global and nonlocal statements map assigned names to en-
closing module and function scopes, respectively

nonlocal Basics
Python 3.X introduces a new nonlocal statement, which has meaning only inside a
function:
def func():
nonlocal name1, name2, ... # OK here
>>> nonlocal X
SyntaxError: nonlocal declaration not allowed at module level


C:\code> c:\python33\python
>>> def tester(start):
The nonlocal Statement in 3.X | 509
www.it-ebooks.info
 state = start # Referencing nonlocals works normally
def nested(label):
print(label, state) # Remembers state in enclosing scope
return nested
>>> F = tester(0)
>>> F('spam')
spam 0
>>> F('ham')
ham 0


func(value)
Caller
Normal argument: matched by position
func(name=value)
Caller
Keyword argument: matched by name
func(*iterable)
Caller
Pass all objects in iterable as individual positional arguments
func(**dict)
Caller
Pass all key/value pairs in dict as individual keyword arguments
def func(name)
Function
Normal argument: matches any passed value by position or name
def func(name=value)
Function
Default argument value, if not passed in the call
def func(*name)
Function
Matches and collects remaining positional arguments in a tuple
def func(**name)
Function
Matches and collects remaining keyword arguments in a dictionary
def func(*other, name)
Function
Arguments that must be passed by keyword only in calls (3.X)
def func(*, name=value)
Function
Arguments that must be passed by keyword only in calls (3.X)

-------------------------------------------------------------------------
lambda argument1, argument2,... argumentN : expression using arguments
 f = lambda x, y, z: x + y + z
>>> f(2, 3, 4)
9

---------------------------------------------------------------------------
Comprehensions and Generations
Generator Functions: yield Versus return
In this part of the book, we’ve learned about coding normal functions that receive input
parameters and send back a single result immediately. It is also possible, however, to
write functions that may send back a value and later be resumed, picking up where they
left off. Such functions, available in both Python 2.X and 3.X, are known as generator
functions because they generate a sequence of values over time.
Generator functions are like normal functions in most respects, and in fact are coded
with normal def statements. However, when created, they are compiled specially into
an object that supports the iteration protocol. And when called, they don’t return a
result: they return a result generator that can appear in any iteration context. We stud-
ied iterables in Chapter 14, and Figure 14-1 gave a formal and graphic summary of their
operation. Here, we’ll revisit them to see how they relate to generators.

def gensquares(N):
for i in range(N):
yield i ** 2

---------------------------------------------------------------------------------
Modules and Packages
import
Lets a client (importer) fetch a module as a whole
from
Allows clients to fetch particular names from a module
---------------------------------------------------------------------------------
Object Oriented Programming
Although we are speaking in the abstract here, there is tangible code behind all these
ideas, of course. We construct trees and their objects with class statements and class
calls, which we’ll meet in more detail later. In short:
• Each class statement generates a new class object.
• Each time a class is called, it generates a new instance object.
• Instances are automatically linked to the classes from which they are created.
• Classes are automatically linked to their superclasses according to the way we list
them in parentheses in a class header line; the left-to-right order there gives the
order in the tree.
To build the tree in Figure 26-1, for example, we would run Python code of the following
form. Like function definition, classes are normally coded in module files and are run
during an import (I’ve omitted the guts of the class statements here for brevity):
class C2: ... # Make class objects (ovals)
class C3: ...
class C1(C2, C3): ... # Linked to superclasses (in this order)
I1 = C1() # Make instance objects (rectangles)
I2 = C1() # Linked to their classes
Here, we build the three class objects by running three class statements, and make the
two instance objects by calling the class C1 twice, as though it were a function. The
instances remember the class they were made from, and the class C1 remembers its listed
superclasses.
Technically, this example is using something called multiple inheritance, which simply
means that a class has more than one superclass above it in the class tree—a useful
technique when you wish to combine multiple tools. In Python, if there is more than
one superclass listed in parentheses in a class statement (like C1’s here), their left-to-
right order gives the order in which those superclasses will be searched for attributes
OOP from 30,000 Feet | 789
www.it-ebooks.info
by inheritance. The leftmost version of a name is used by default, though you can always
choose a name by asking for it from the class it lives in (e.g., C3.z).
Because of the way inheritance searches proceed, the object to which you attach an
attribute turns out to be crucial—it determines the name’s scope. Attributes attached
to instances pertain only to those single instances, but attributes attached to classes are
shared by all their subclasses and instances. Later, we’ll study the code that hangs
attributes on these objects in depth. As we’ll find:
• Attributes are usually attached to classes by assignments made at the top level in
class statement blocks, and not nested inside function def statements there.
• Attributes are usually attached to instances by assignments to the special argument
passed to functions coded inside classes, called self.
For example, classes provide behavior for their instances with method functions we
create by coding def statements inside class statements. Because such nested defs as-
sign names within the class, they wind up attaching attributes to the class object that
will be inherited by all instances and subclasses:
class C2: ... # Make superclass objects
class C3: ...
class C1(C2, C3): # Make and link class C1
def setname(self, who): # Assign name: C1.setname
self.name = who # Self is either I1 or I2
I1 = C1() # Make two instances
I2 = C1()
I1.setname('bob') # Sets I1.name to 'bob'
I2.setname('sue') # Sets I2.name to 'sue'
print(I1.name) # Prints 'bob'
There’s nothing syntactically unique about def in this context. Operationally, though,
when a def appears inside a class like this, it is usually known as a method, and it
automatically receives a special first argument—called self by convention—that pro-
vides a handle back to the instance to be processed. Any values you pass to the method
yourself go to arguments after self (here, to who).2
Because classes are factories for multiple instances, their methods usually go through
this automatically passed-in self argument whenever they need to fetch or set attributes
of the particular instance being processed by a method call. In the preceding code,
self is used to store a name in one of two instances.
Like simple variables, attributes of classes and instances are not declared ahead of time,
but spring into existence the first time they are assigned values. When a method assigns
to a self attribute, it creates or changes an attribute in an instance at the bottom of the
2. If you’ve ever used C++ or Java, you’ll recognize that Python’s self is the same as the this pointer, but
self is always explicit in both headers and bodies of Python methods to make attribute accesses more
obvious: a name has fewer possible meanings.
790 | Chapter 26: OOP: The Big Picture
www.it-ebooks.info
class tree (i.e., one of the rectangles in Figure 26-1) because self automatically refers
to the instance being processed—the subject of the call.
In fact, because all the objects in class trees are just namespace objects, we can fetch or
set any of their attributes by going through the appropriate names. Saying C1.setname
is as valid as saying I1.setname, as long as the names C1 and I1 are in your code’s scopes.
