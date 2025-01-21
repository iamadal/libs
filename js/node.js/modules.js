/**
 * @author Adal Khan 21 JAN 2025
 * Nodejs Build in Modules
 * 
Here's a concise one-line description for each Node.js module:
Internal and HTTP-Related Modules:

    _http_agent: Manages HTTP agent behaviors, like connection pooling.
    _http_client: Handles low-level HTTP client request functionality.
    _http_common: Shared utilities and constants for HTTP operations.
    _http_incoming: Manages HTTP incoming messages like requests and responses.
    _http_outgoing: Handles HTTP outgoing messages and headers.
    _http_server: Provides the server-side HTTP logic for handling requests.

Stream Modules:

    _stream_duplex: Implements both readable and writable streams.
    _stream_passthrough: Creates a stream that simply passes data unchanged.
    _stream_readable: Implements readable stream logic.
    _stream_transform: Implements transform streams for modifying data.
    _stream_wrap: Handles low-level stream wrapping for internal use.
    _stream_writable: Implements writable stream logic.

TLS/SSL Modules:

    _tls_common: Shared utilities and constants for TLS/SSL operations.
    _tls_wrap: Manages low-level TLS/SSL socket wrapping.

General Node.js Modules:

    assert: Provides assertion testing tools for debugging.
    assert/strict: Offers strict mode for assertion testing.
    async_hooks: Tracks and monitors asynchronous resource creation and lifecycle.
    buffer: Manages binary data buffers in memory.
    child_process: Spawns and manages system-level child processes.
    cluster: Enables multi-core server scaling with worker processes.
    console: Provides the global console object for logging and debugging.
    constants: Defines system and error constants.

Security and Networking:

    crypto: Implements cryptographic algorithms like hashing and encryption.
    dgram: Provides UDP socket functionality for datagrams.
    diagnostics_channel: Creates named channels for diagnostic data flow.
    dns: Resolves domain names to IP addresses.
    dns/promises: Provides promise-based DNS resolution.

Legacy and Events:

    domain: Handles uncaught errors in an event-based domain (deprecated).
    events: Manages event-driven programming with the EventEmitter class.

File System:

    fs: Provides methods for file system operations.
    fs/promises: Offers promise-based file system operations.

HTTP and Web Protocols:

    http: Provides functionality for HTTP servers and clients.
    http2: Implements HTTP/2 protocol support.
    https: Adds HTTPS server and client support.

Debugging and Inspector:

    inspector: Offers programmatic access to the V8 debugger.
    inspector/promises: Provides promise-based inspector methods.

Modules and Networking:

    module: Handles module system logic in Node.js.
    net: Provides TCP/IPC server and client functionality.
    os: Exposes operating system-specific information.

Path Utilities:

    path: Manages file and directory path manipulations.
    path/posix: Provides POSIX-compliant path handling.
    path/win32: Provides Windows-compliant path handling.

Performance and Process:

    perf_hooks: Monitors performance metrics and timings.
    process: Exposes Node.js process and environment information.

Data Encoding and Decoding:

    punycode: Encodes and decodes Unicode to ASCII-compatible encoding.
    querystring: Parses and formats URL query strings.

Readline:

    readline: Reads input from command line interfaces.
    readline/promises: Provides promise-based readline methods.

REPL and Streams:

    repl: Creates a Read-Eval-Print-Loop interactive shell.
    stream: Manages readable and writable streams.
    stream/consumers: Utilities for consuming streams.
    stream/promises: Provides promise-based stream utilities.
    stream/web: Implements web-standard streams.

String and Timers:

    string_decoder: Decodes binary data into readable strings.
    sys: Alias for util (deprecated).
    timers: Provides methods for scheduling function execution.
    timers/promises: Offers promise-based timer utilities.

TLS, Tracing, and TTY:

    tls: Implements TLS/SSL for secure communication.
    trace_events: Provides custom tracing for diagnostics.
    tty: Provides functionality for working with terminal devices.

URL, Utilities, and V8:

    url: Parses and formats URL strings.
    util: Offers utility functions for various operations.
    util/types: Provides type-checking utilities.
    v8: Exposes V8 engine-specific features.

Virtual Machine and WASI:

    vm: Runs JavaScript code in virtualized contexts.
    wasi: Provides WebAssembly System Interface capabilities.

Worker Threads and Compression:

    worker_threads: Enables multithreading in Node.js using workers.
    zlib: Provides compression and decompression utilities.
 **/


//--------------------------------------------------------------------------------------------------------------------------
// Important modules - based on their use case

Request Object (req) Methods:

    on(event, listener) - Listens for specific events (e.g., data, end).
    pipe(destination[, options]) - Pipes the request to a writable stream.
    unpipe([destination]) - Stops piping the request.
    resume() - Resumes the flow of data.
    pause() - Pauses the flow of data.
    setEncoding(encoding) - Sets the character encoding for the request data.
    destroy([error]) - Destroys the request object.

Request Object (req) Properties:

    method - HTTP method (e.g., GET, POST).
    url - The URL of the request.
    headers - The request headers.
    rawHeaders - Array of raw header names/values.
    httpVersion - The HTTP version used.
    socket - The network socket.
    connection - Legacy alias for socket.
    body - The request body (if parsed by middleware).
    query - URL query parameters (if using Express).
    params - Route parameters (if using Express).
    cookies - Parsed cookies (if using cookie-parser).
    hostname - Hostname derived from the Host header.
    protocol - The protocol (e.g., http or https).
    secure - Boolean indicating if the connection is secure (HTTPS).
    get(headerName) - Retrieves a specific header.



Response Object (res) Methods:

    write(chunk[, encoding][, callback]) - Sends a chunk of the response body.
    end([data][, encoding][, callback]) - Signals the end of the response.
    setHeader(name, value) - Sets a response header.
    getHeader(name) - Retrieves a specific header.
    removeHeader(name) - Removes a response header.
    writeHead(statusCode[, statusMessage][, headers]) - Sends the response status and headers.
    statusCode = code - Sets the HTTP status code.
    statusMessage = message - Sets the HTTP status message.
    addTrailers(headers) - Adds HTTP trailing headers.
    redirect([status,] url) - Redirects to a new URL (Express).
    json(data) - Sends a JSON response (Express).
    send(data) - Sends a generic response (Express).
    render(view[, locals][, callback]) - Renders a view template (Express).
    cookie(name, value[, options]) - Sets a cookie (Express).
    clearCookie(name[, options]) - Clears a cookie (Express).

Response Object (res) Properties:

    statusCode - The HTTP status code of the response.
    statusMessage - The HTTP status message of the response.
    headersSent - Boolean indicating if headers are sent.
    finished - Boolean indicating if the response is finished.
    locals - Local variables for templates (Express).








































// index.js

// Define the functions you want to export
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Export the functions as part of an object
module.exports = {
    add,
    subtract
};




// test.js

// Import your library
const myLibrary = require('./index');

// Use the functions
console.log(myLibrary.add(5, 3));        // Output: 8
console.log(myLibrary.subtract(5, 3));   // Output: 2






// index.js using es module
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}


// test.js
import { add, subtract } from './index.js';

console.log(add(5, 3));         // Output: 8
console.log(subtract(5, 3));    // Output: 2







