/* The URL interface is used to parse, construct, normalize, and encode URLs.
It works by providing properties which allow you to easily read and modify the
components of a URL. You normally create a new URL object by specifying the
URL as a string when calling its constructor, or by providing a relative URL
and a base URL. You can then easily read the parsed components of the URL or
make changes to the URL.

If a browser doesn't yet support the URL() constructor, you can access a URL
object using the Window interface's URL property. Be sure to check to see if
any of your target browsers require this to be prefixed. */

// Note: This feature is available in Web Workers

// new URL() - Creates and returns a URL object referencing the URL specified using an absolute URL string, or a relative URL string and a base URL string.

// Properties


URL.hash //A USVString containing a '#' followed by the fragment identifier of the URL.
URL.host //A USVString containing the domain (that is the hostname) followed by (if a port was specified) a ':' and the port of the URL.
URL.hostname //A USVString containing the domain of the URL.
URL.href // A stringifier that returns a USVString containing the whole URL.
URL.origin // Read only Returns a USVString containing the origin of the URL, that is its scheme, its domain and its port.
URL.password //A USVString containing the password specified before the domain name.
URL.pathname //Is a USVString containing an initial '/' followed by the path of the URL, not including the query string or fragment.
URL.port //A USVString containing the port number of the URL.
URL.protocol //A USVString containing the protocol scheme of the URL, including the final ':'.
URL.search //A USVString indicating the URL's parameter string; if any parameters are provided, this string includes all of them, beginning with the leading ? character.
URL.searchParams // Read only A URLSearchParams object which can be used to access the individual query parameters found in search.
URL.username //A USVString containing the username specified before the domain name.


//Methods

toString() //Returns a USVString containing the whole URL. It is a synonym for URL.href, though it can't be used to modify the value.
toJSON() //Returns a USVString containing the whole URL. It returns the same string as the href property.

// Static Methods

createObjectURL() // Returns a DOMString containing a unique blob URL, that is a URL with blob: as its scheme, followed by an opaque string uniquely identifying the object in the browser.
revokeObjectURL() //Revokes an object URL previously created using URL.createObjectURL().


// //Usage notes The constructor takes a url parameter, and an optional base
// parameter to use as a base if the url parameter is a relative URL:



const url = new URL('../cats', 'http://www.example.com/dogs');
console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/cats"


// URL properties can be set to construct the URL:

url.pathname = 'démonstration.html';
console.log(url.href); // "http://www.example.com/d%C3%A9monstration.html"


// The URLSearchParams interface can be used to build and manipulate the URL
// query string.

// To get the search params from the current window's URL, you can do this:

// https://some.site/?id=123
const parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id")); // "123"


//The toString() method of URL just returns the value of the href property, so
//the constructor can be used to normalize and encode a URL directly.
const response = await fetch(new URL('http://www.example.com/démonstration.html'));











