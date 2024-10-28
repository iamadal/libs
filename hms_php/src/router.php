<?php
/**
 * Routing System
 * @author Adal Khan
 */

namespace Biam\Hms;

class Router {
    private static $routes = [];
    private static $requestLimit = 100;
    private static $timeFrame = 3600;
    private static $requests = [];
    private static $csrfTokenLifetime = 3600;

    public static function init() { 
        self::startSession(); 
    }

    private static function startSession() { 
        if (session_status() === PHP_SESSION_NONE) { 
            session_start(); 
        } 
    }

    public static function get($path, $callback) { 
        self::$routes['GET'][$path] = $callback; 
    }

    public static function post($path, $callback) { 
        self::$routes['POST'][$path] = $callback; 
    }

    public static function run() {
        self::init();
        self::setSecureHeaders();

        $method = $_SERVER['REQUEST_METHOD'];

        // Use parse_url to get only the path, ignoring the query string
        $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

        self::limitRequests();

        if ($method !== 'GET') {
            self::validateCsrfToken();
        }

        // Match the sanitized path without query strings
        if (isset(self::$routes[$method][$path])) {
            call_user_func(self::$routes[$method][$path]);
        } else {
            http_response_code(404);
            echo "404 Not Found";
        }
    }

    private static function setSecureHeaders() {
        header("X-Content-Type-Options: nosniff");
        header("X-XSS-Protection: 1; mode=block");
        header("Content-Security-Policy: default-src 'self';");
        header("X-Frame-Options: DENY");
        header("Referrer-Policy: no-referrer");
    }

    private static function limitRequests() {
        $ip = $_SERVER['REMOTE_ADDR'];
        $currentTime = time();

        if (!isset(self::$requests[$ip])) {
            self::$requests[$ip] = ['count' => 0, 'start' => $currentTime];
        }

        if ($currentTime - self::$requests[$ip]['start'] > self::$timeFrame) {
            self::$requests[$ip] = ['count' => 1, 'start' => $currentTime];
        } else {
            self::$requests[$ip]['count']++;
            if (self::$requests[$ip]['count'] > self::$requestLimit) {
                http_response_code(429);
                exit("Too many requests. Please try again later.");
            }
        }
    }

    public static function generateCsrfToken() {
        if (empty($_SESSION['csrf_token']) || empty($_SESSION['csrf_token_expiry']) || time() > $_SESSION['csrf_token_expiry']) {
            $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
            $_SESSION['csrf_token_expiry'] = time() + self::$csrfTokenLifetime;
        }
        return $_SESSION['csrf_token'];
    }

    private static function validateCsrfToken() {
        if (empty($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
            http_response_code(403);
            exit("Invalid CSRF token.");
        }
        if (time() > $_SESSION['csrf_token_expiry']) {
            http_response_code(403);
            exit("CSRF token has expired.");
        }
        unset($_SESSION['csrf_token']);
        unset($_SESSION['csrf_token_expiry']);
    }

    public static function sanitize($data) {
        return htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    }
}

