<?php
namespace Components\Base;

use PDO;
use PDOException;

class Database {
    private static $instance = null;
    private function __construct() {}

    public static function init() {
        if (self::$instance === null) {
            $config = parse_ini_file(__DIR__ . '/../Database/db.ini', true); 
            $dbConfig = $config['database'];

            try {
                self::$instance = new PDO(
                    'mysql:host=' . $dbConfig['host'] . ';dbname=' . $dbConfig['database'] . ';charset=utf8mb4',$dbConfig['username'],$dbConfig['password']
                );
                self::$instance->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                self::$instance->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
                self::$instance->exec("SET NAMES utf8mb4");
            } catch (PDOException $e) {
                die('Database connection failed: ' . $e->getMessage());
            }
        }
        return self::$instance;
    }
}
