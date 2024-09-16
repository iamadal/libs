<?php 
/**
 * Routing System v1.0
 * 10 SEP 2024
 * @author Adal Khan <mdadalkhan@gmail.com>
 * $cbFn   = callback Function
 * $cbfErr = callback Function responsible for handling errors.
 */

namespace Bms;

class router {
    protected static $routes = [];
    protected static $cbfErr;

    public static function read($method, $uri, $cbFn) {
        $method = strtoupper($method);
        if (!in_array($method, ['GET', 'POST', 'PUT', 'DELETE'])) {
            throw new \InvalidArgumentException("Unsupported method: $method");
        }
        self::$routes[$method][$uri] = $cbFn;
    }

    public static function readErr($cbFn) {
        self::$cbfErr = $cbFn;
    }

    public static function run() {
        $method = $_SERVER['REQUEST_METHOD'];
        $uri = filter_var($_SERVER['REQUEST_URI'], FILTER_SANITIZE_URL);

        if (substr($uri, -1) === '/' && $uri !== '/') {
            $uri = rtrim($uri, '/');
        }

        if (isset(self::$routes[$method][$uri])) {
            $cbFn = self::$routes[$method][$uri];
            if (is_callable($cbFn)) {
                call_user_func($cbFn);
            } else {
                self::Err();
            }
        } else {
            self::Err();
        }
    }

    protected static function Err() {
        if (isset(self::$cbfErr) && is_callable(self::$cbfErr)) {
            call_user_func(self::$cbfErr);
        } else {
            echo '<h1>Error 404: Not Found</h1>';
        }
    }
}

