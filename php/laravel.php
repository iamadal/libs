<?php

/**
 * Laravel v1.0 Quick Reference
 * @author Adal Khan <https://www.github.com/iamadal>
 * 09 JAN 2025
 * */

/**
 * Founation
01. Entry Point >> index.php >> 
02.
03.
04.
05.
06.
07.
08.
09.
10.
 
 * */

# 01. Resquest Object

use Illuminate\Http\Request;

# Now directly pass Request Object as parameter fn(Request $req)
# Or Directly in the route callback 

Route::post('/example', function (Request $request) {
    // Access request data here
});


# Retrieving Input Data

function T1(Request $request) {
	$request->input('key'): Get an input value by key.
	$request->all(): Get all input data as an associative array.
	$request->only(['key1', 'key2']): Retrieve only specific keys.
	$request->except(['key1', 'key2']): Retrieve all except specific keys.
	$request->query('key'): Retrieve query parameters from the URL (?key=value).

}

# Input Validation

$request->has('key'): Check if the request contains a specific input.
$request->hasAny(['key1', 'key2']): Check if the request contains any of the specified keys.
$request->filled('key'): Check if a specific key is present and not empty.
$request->missing('key'): Check if a specific key is missing.

if ($request->has('name')) {
    // Process the name input
}


# Retrieving Uploaded Files

$request->file('key'): Retrieve an uploaded file.
$request->hasFile('key'): Check if a file is present in the request.
$request->file('key')->store('path'): Store the file on disk.



if ($request->hasFile('avatar')) {
    $path = $request->file('avatar')->store('avatars');
}


# URL and Route Information

$request->url(): Get the full URL without query string.
$request->fullUrl(): Get the full URL including query string.
$request->path(): Get the path of the request (/example/path).
$request->route(): Get the current route.

$currentUrl = $request->fullUrl();
$routeName = $request->route()->getName();


# HTTP Methods

$request->method(): Get the HTTP method (GET, POST, etc.).
$request->isMethod('post'): Check if the request uses a specific HTTP method.

if ($request->isMethod('post')) {
    // Handle POST request
}


# Headers and Cookies

$request->header('key'): Get a specific header value.
$request->hasHeader('key'): Check if a header exists.
$request->cookie('key'): Get a specific cookie value


# Validation

$validated = $request->validate([
    'name' => 'required|string|max:255',
    'email' => 'required|email',
]);

// Use validated data
$name = $validated['name'];

// Alternatively, you can use Form Request classes for validation.

# Authorization

$request->user(): Retrieve the authenticated user.
$request->is('pattern'): Check if the request path matches a pattern.
$request->routeIs('name'): Check if the route matches a specific name.

if ($request->user()->isAdmin()) {
    // Perform admin actions
}


# Checking Content Type

$request->isJson(): Check if the request expects a JSON response.
$request->wantsJson(): Check if the client expects JSON.
$request->accepts('type'): Check if the request accepts a specific content type.


if ($request->wantsJson()) {
    return response()->json(['message' => 'Success']);
}


# Custom Attributes

$request->merge(['key' => 'value']);
$customValue = $request->get('key');


// Full Example
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function store(Request $request)
    {
        // Validate input
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
        ]);

        // Store user data
        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']),
        ]);

        return response()->json(['message' => 'User created successfully'], 201);
    }
}

Request::METHOD_HEAD
Request::METHOD_GET
Request::METHOD_POST
Request::METHOD_PUT
Request::METHOD_PATCH
Request::METHOD_DELETE
Request::METHOD_OPTIONS
Request::METHOD_TRACE
Request::HEADER_CACHE_CONTROL
Request::HEADER_CONTENT_TYPE
Request::HEADER_CONTENT_LENGTH
Request::HEADER_DATE
Request::HEADER_EXPIRES
Request::HEADER_HOST
Request::HEADER_PRAGMA
Request::HEADER_USER_AGENT
Request::HEADER_ACCEPT
Request::HEADER_AUTHORIZATION
Request::HEADER_REFERER
Request::HEADER_RANGE

//Reading Query String

public function input(string $key = null, mixed $default = null);
public function all(array $keys = null);
public function only(array $keys);
public function except(array $keys);
public function query(string $key = null, mixed $default = null);
public function has(string|array $key);
public function hasAny(array|string $keys);
public function filled(string|array $key);
public function missing(string|array $key);
public function old(string $key = null, mixed $default = null);


// Uploading Files

public function file(string $key = null, mixed $default = null);
public function hasFile(string $key);
public function files();


// URL and Route Information

public function url();
public function fullUrl();
public function fullUrlWithQuery(array $query);
public function path();
public function decodedPath();
public function segment(int $index, string $default = null);
public function segments();
public function is(...$patterns);
public function routeIs(...$patterns);
public function fullUrlIs(...$patterns);
public function ajax();
public function pjax();

// HTTP Methods 

public function method();
public function isMethod(string $method);

// Header Information

public function header(string $key = null, mixed $default = null);
public function hasHeader(string $key);
public function bearerToken();

// Cookie information

public function cookie(string $key = null, mixed $default = null);

// Validation

public function validate(array $rules, array $messages = [], array $customAttributes = []);
public function validateWithBag(string $errorBag, array $rules, array $messages = [], array $customAttributes = []);


// Authorization

public function user(string $guard = null);
public function hasValidSignature(bool $absolute = true);

// Content Type

public function isJson();
public function wantsJson();
public function accepts(string|array $contentTypes);
public function acceptsAnyContentType();
public function acceptsJson();
public function acceptsHtml();


// Custom attribute

public function merge(array $input);
public function replace(array $input);

// Request Data

public function get(string $key, mixed $default = null);
public function post(string $key = null, mixed $default = null);
public function json(string $key = null, mixed $default = null);


// Server Data

public function server(string $key = null, mixed $default = null);
public function hasServer(string $key);

// Request helper

public function ip();
public function ips();
public function userAgent();
public function fingerprint();
public function getContent(bool $asResource = false);
public function toArray();


use Illuminate\Http\Request;

public function handle(Request $request)
{
    // Input
    $name = $request->input('name');
    $allData = $request->all();

    // URL and Method
    $url = $request->url();
    $method = $request->method();

    // Validation
    $validated = $request->validate([
        'email' => 'required|email',
    ]);

    // Headers
    $authHeader = $request->header('Authorization');

    // Files
    if ($request->hasFile('avatar')) {
        $file = $request->file('avatar');
    }
}

//-----------------------------------------------------------------------------------------------

use Illuminate\Database\Eloquent\Model // use extend to inherit methods from the base class

// Basic Operation

public static function create(array $attributes = []);
public static function forceCreate(array $attributes);
public 		  function update(array $attributes = [], array $options = []);
public        function delete();
public static function destroy(array|int|string $ids);
public        function forceDelete();
public        function save(array $options = []);
public static function firstOrCreate(array $attributes, array $values = []);
public static function firstOrNew(array $attributes, array $values = []);
public static function updateOrCreate(array $attributes, array $values = []);
public        function replicate(array $except = null);
public        function refresh();

// Query

public static function query();
public static function where(string|array $column, mixed $operator = null, mixed $value = null, string $boolean = 'and');
public static function orWhere(string|array $column, mixed $operator = null, mixed $value = null);
public static function whereBetween(string $column, array $values, string $boolean = 'and', bool $not = false);
public static function whereNotBetween(string $column, array $values, string $boolean = 'and');
public static function whereNull(string|array $columns, string $boolean = 'and', bool $not = false);
public static function whereNotNull(string|array $columns, string $boolean = 'and');
public static function whereIn(string $column, array|Traversable $values, string $boolean = 'and', bool $not = false);
public static function whereNotIn(string $column, array|Traversable $values, string $boolean = 'and');
public static function whereDate(string $column, string $operator, string $value, string $boolean = 'and');
public static function whereYear(string $column, string $operator, string $value, string $boolean = 'and');
public static function whereMonth(string $column, string $operator, string $value, string $boolean = 'and');
public static function whereDay(string $column, string $operator, string $value, string $boolean = 'and');
public static function find(int|string $id, array $columns = ['*']);
public static function findOrFail(int|string $id, array $columns = ['*']);
public static function first(array $columns = ['*']);
public static function firstOrFail(array $columns = ['*']);
public static function get(array $columns = ['*']);
public static function paginate(int $perPage = null, array $columns = ['*'], string $pageName = 'page', int $page = null);
public static function simplePaginate(int $perPage = null, array $columns = ['*'], string $pageName = 'page', int $page = null);


// Relationship

public function hasOne(string $related, string $foreignKey = null, string $localKey = null);
public function hasMany(string $related, string $foreignKey = null, string $localKey = null);
public function belongsTo(string $related, string $foreignKey = null, string $ownerKey = null, string $relation = null);
public function belongsToMany(string $related, string $table = null, string $foreignPivotKey = null, string $relatedPivotKey = null, string $parentKey = null, string $relatedKey = null, string $relation = null);
public function morphOne(string $related, string $name, string $type = null, string $id = null, string $localKey = null);
public function morphMany(string $related, string $name, string $type = null, string $id = null, string $localKey = null);
public function morphTo(string $name = null, string $type = null, string $id = null, string $ownerKey = null);
public function morphToMany(string $related, string $name, string $table = null, string $foreignPivotKey = null, string $relatedPivotKey = null, string $parentKey = null, string $relatedKey = null, bool $inverse = false);



// Attribute Accessors & Mutators

public function getAttribute(string $key);
public function setAttribute(string $key, mixed $value);
public function hasGetMutator(string $key);
public function hasSetMutator(string $key);
public function getAttributes();
public function getOriginal(string $key = null, mixed $default = null);
public function getRawOriginal(string $key = null, mixed $default = null);
public function attributesToArray();
public function toArray();
public function toJson(int $options = 0);


// Events

public static function observe(array|string $classes);
public static function saving(\Closure|string $callback);
public static function saved(\Closure|string $callback);
public static function updating(\Closure|string $callback);
public static function updated(\Closure|string $callback);
public static function creating(\Closure|string $callback);
public static function created(\Closure|string $callback);
public static function deleting(\Closure|string $callback);
public static function deleted(\Closure|string $callback);
public static function retrieved(\Closure|string $callback);


// Scope

public static function addGlobalScope($scope, \Closure|null $implementation = null);
public static function withoutGlobalScope($scope);
public static function withoutGlobalScopes(array $scopes = null);
public static function withGlobalScope($identifier, \Closure $scope);

// Casting and Serialization

public function getCasts();
public function getCastType(string $key);
public function isCasted(string $key);
public function hasCast(string $key, array|string $types = null);
public function syncOriginal();
public function syncChanges();
public function getChanges();
public function wasChanged(array|string $attributes = null);


// Other

public function exists();
public function is($model);
public function touch();
public function increment(string $column, float|int $amount = 1, array $extra = []);
public function decrement(string $column, float|int $amount = 1, array $extra = []);
public function join(string $table, string $first, string $operator, string $second, string $type = 'inner', bool $where = false);
public static function truncate();
public static function raw(string $expression);


//----------------------------------------------------------------------------------------------------------------

// Auth

public static bool attempt(array $credentials, bool $remember = false);
public static bool attemptWhen(array $credentials, \Closure $callback, bool $remember = false);
public static bool validate(array $credentials);
public static bool logoutOtherDevices(string $password);
public static bool once(array $credentials);
public static bool onceUsingId($id);

// User Manager

public static void login(\Illuminate\Contracts\Auth\Authenticatable $user, bool $remember = false);
public static void logout();
public static bool hasUser();
public static void forgetUser();
public static \Illuminate\Contracts\Auth\Authenticatable|null user();
public static int|string|null id();
public static bool viaRemember();
public static bool check();
public static bool guest();
public static \Illuminate\Contracts\Auth\Authenticatable|null loginUsingId($id, bool $remember = false);


// Guest and Providers

public static \Illuminate\Contracts\Auth\Guard|mixed guard(string|null $name = null);
public static void shouldUse(string $name);
public static void provider(string $driver, \Closure $callback);


// Event helpers

public static void resolveUsersUsing(\Closure $callback);


//------------------------------------------------------------------------------------------------------------------






