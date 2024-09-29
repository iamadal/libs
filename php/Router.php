<?php

/**
 * @author ADAL KHAN 29 SEP 2024
 * Routing System v1.0
 */

namespace Bms\Core;

class Router {
    protected static $routes = [];
    protected static $csrfTokens = [];
    protected static $rateLimit = [];
    protected static $rateLimitWindow = 60; 
    protected static $rateLimitMaxRequests = 100; 
    protected static $cacheFile = __DIR__ . '/../cache/routes.php';

    public static function get($uri, $action) {
        self::addRoute('GET', $uri, $action);
    }

    public static function post($uri, $action) {
        self::addRoute('POST', $uri, $action);
    }

    private static function addRoute($method, $uri, $action) {
        self::$routes[] = ['method' => $method, 'uri' => self::normalizeUri($uri), 'action' => $action];
    }

    public static function run() {
        self::rateLimitProtection();  
        $method = $_SERVER['REQUEST_METHOD'];
        $uri = self::getRequestUri();

        foreach (self::$routes as $route) {
            if (self::matchRoute($route, $method, $uri)) {
                if ($method === 'POST') {
                    self::csrfVerify();  
                }
                call_user_func($route['action']);
                return;
            }
        }

        self::handle404();
    }

    private static function matchRoute($route, $method, $uri) {
        return $method === $route['method'] && $uri === $route['uri'];
    }

    private static function getRequestUri() {
        return trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
    }

    private static function normalizeUri($uri) {
        return trim($uri, '/');
    }

    public static function csrfToken() {
        $token = bin2hex(random_bytes(32)); 
        self::$csrfTokens[] = $token; 
        return $token;
    }

    public static function csrfVerify() {
        if (!isset($_POST['_csrf']) || !in_array($_POST['_csrf'], self::$csrfTokens)) {
            http_response_code(403);
            echo "Forbidden: Invalid CSRF token.";
            exit;
        }
        
        self::$csrfTokens = array_diff(self::$csrfTokens, [$_POST['_csrf']]);
    }

    private static function rateLimitProtection() {
        $ip = $_SERVER['REMOTE_ADDR'];
        $currentTime = time();

        if (!isset(self::$rateLimit[$ip])) {
            self::$rateLimit[$ip] = [
                'requests' => 1,
                'start_time' => $currentTime
            ];
        } else {
            $timePassed = $currentTime - self::$rateLimit[$ip]['start_time'];
            if ($timePassed < self::$rateLimitWindow) {
                if (self::$rateLimit[$ip]['requests'] >= self::$rateLimitMaxRequests) {
                    http_response_code(429);
                    echo "Too Many Requests";
                    exit;
                }
                self::$rateLimit[$ip]['requests']++;
            } else {
                self::$rateLimit[$ip] = [
                    'requests' => 1,
                    'start_time' => $currentTime
                ];
            }
        }
    }

    // Custom 404 page handler
    private static function handle404() {
        http_response_code(404);
        echo "404 - Page Not Found";
        exit();
    }
}
