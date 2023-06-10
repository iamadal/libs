/**
 * 01. Patter Format:  var pattern = /expression/flag or using RegExp Object
 * 02. Testing:
 *     var input = String
 *     var p = /expression/flag
 *     var matches = p.exec(input)
 */

/** Rules - from Beginning JavaScript - Wiley
 * 01. \d - Any digit from 0-9 = \d\d match 72 but not aa or 7a
 * 02. \D - any character that is not a digit - \D\D\D match abc but not 999
 * 03. \w - A-Z,a-z,0-9,_  - \w\w\w\w matches AB_2 but not ab%
 * 04. \W - Except letters from 03. - \W matches 
 * 05. \s - Any white space character - \s match Tab.Enter
 * 06. \S - Any no-white space character - \S matches without TAB
 * 07. .  - Any Single Character other than newline
 * 08. [abc] - any of those. [abc] will match a,b or c but nothing else
 * 09. [^abc] - any Character without a or b or c
 * 10.  /[^a-z\d ]/i 
 *      * ^ means except
 *      * a-z from a-z and A-Z since i flag is present
 *      * \d or any digit 0-9
 *      * space also excluded
 *      * Match the pattern  where input is not from a-z ,A-Z or 0-9
 * 11. {n} - Macth n of previous item - x{2} match xx - d{2} matches 22,11,23   
 * 12. {n,} - x{2,} - Matches xx,xx,xxx,xxxx.......
 * 13. {n,m} - x{2,4} - Matches xx,xxx,xxxx.......
 * 14. x? - matches x or nothing 
 *          string = "Paul Paula Paulaline"
 *          pattern = /Paul?/
 * 15. x+  - matches x,xx,xxx,xxxx........
 * 16. x* - matches nothing or x,xx,xxx,xxxx,....
 * 
 * Character Positioning
 * 01. ^    Pattern must be at the starting of the String
 * 02. $    Pattern must at the End of the String
 * 03. \b   Mathces a word boundary , which is essentially the point between a word character and non word character
 * 04. \B   this Matches a position that's not a word boundary
 *      means "This is a String"
 *           *This*
 *           *is*
 *           *a*
 *           *String* Seperating using star or separte using any character
 * 05. Grouping Regular Expression. /(\d\d)/
 * 
 * Let’s take the following string defined in myString as an example:
   
    var myString = “JavaScript, VBScript and Perl”;

    How could you match both JavaScript and VBScript using the same regular expression? The only
    thing they have in common is that they are whole words and they both end in Script . Well, an easy
    way would be to use parentheses to group the patterns Java and VB . Then you can use the ? special
    character to apply to each of these groups of characters to make the pattern match any word having
    zero or one instances of the characters Java or VB , and ending in Script .

    var myRegExp = /\b(VB)?(Java)?Script\b/gi;

    Breaking this expression down, you can see the pattern it requires is as follows:

    1. Aword boundary: \b

    2. Zero or one instance of VB: (VB)?

    3. Zero or one instance of Java: (Java)?

    4. The characters Script : Script

    5. Aword boundary: \b

    Putting these together, you get this:

    var myString = “JavaScript, VBScript and Perl”;

    var myRegExp = /\b(VB)?(Java)?Script\b/gi;

    myString = myString.replace(myRegExp, “xxxx”);

    alert(myString)    

    \b(VB|Java)Script\b

    var myRegExp = /\bPaul\b/gi;

    you have your final answer and can be sure only Paul or paul will ever be matched. 

    */

var myRegExp1 = /\b’|’\b/
var myRegExp2 = new RegExp("\\b’|’\\b") // Dynamic in Nature


 