<?php
/**
 * Data Model
 * 
 */

namespace Biam\Hms;

use PDO;
use PDOException;

class DB {
    private static $pdo;

    // Constructor to initialize the PDO connection for SQLite
    public static function init($dbFile) {
        try {
            self::$pdo = new PDO("sqlite:$dbFile");
            self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }

    public static function create($email,$password){
        $dbFile = __DIR__ . '/../data/users.db';
        self::$pdo = new PDO("sqlite:$dbFile");
        self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $pass = password_hash($password, PASSWORD_BCRYPT);
        $stmt = self::$pdo->prepare("INSERT INTO users(email,password) VALUES (:email, :password) ");

        try {
         $stmt->execute([':email' => $email, ':password' => $pass]);
         echo "User registered successfully!";
        } catch (PDOException $e) {
         echo "Error: " . $e->getMessage();
        }

    }

public static function all()
{
    $dbFile = __DIR__ . '/../data/users.db';
    
    if (self::$pdo === null) {
        self::$pdo = new PDO("sqlite:$dbFile");
        self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    $stmt = self::$pdo->prepare("SELECT * FROM users");
    $stmt->execute();


    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

public static function all_speakers()
{
    $dbFile = __DIR__ . '/../data/speakers.db';

    if (self::$pdo instanceof PDO) {
        self::$pdo = null;
    }

    try {
        self::$pdo = new PDO("sqlite:$dbFile");
        self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        echo "Database error: " . $e->getMessage();
        return [];
    }

    $stmt = self::$pdo->prepare("SELECT * FROM speakers ORDER BY sid DESC");
    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}



public static function delete($email)
{
    if($emil !="admin"){
     $dbFile = __DIR__ . '/../data/users.db';
    
    if (self::$pdo === null) {
        self::$pdo = new PDO("sqlite:$dbFile");
        self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    $stmt = self::$pdo->prepare("DELETE FROM users WHERE email = :email");
    $stmt->bindParam(':email', $email, PDO::PARAM_STR);
    $stmt->execute();

    return $stmt->rowCount();
    }
}

 public static function addSpeaker($sid, $name, $designation, $office, $hpr)
{
    $databasePath = __DIR__ . '/../data/speakers.db';

    try {
        $pdo = new PDO("sqlite:$databasePath");
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->exec("CREATE TABLE IF NOT EXISTS speakers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            sid TEXT NOT NULL UNIQUE,
            name TEXT NOT NULL,
            designation TEXT NOT NULL,
            office TEXT NOT NULL,
            hpr INTEGER
        )");

        $stmt = $pdo->prepare("INSERT INTO speakers (sid, name, designation, office, hpr) VALUES (:sid, :name, :designation, :office, :hpr)");
        $stmt->execute([
            "sid" => $sid,
            "name" => $name,
            "designation" => $designation,
            "office" => $office,
            "hpr" => $hpr 
        ]);
    } catch (PDOException $e) {
        echo "Database error: " . $e->getMessage();
    }
}



    public static function login($email, $password) {
        if (!self::$pdo) {
            return "Database connection not initialized.";
        }

        try {
            $stmt = self::$pdo->prepare("SELECT password FROM users WHERE email = ?");
            $stmt->execute([$email]);
            $result = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($result && password_verify($password, $result['password'])) {
                return true;
            } else {
                return false;
            }
        } catch (PDOException $e) {
            return "Error during login: " . $e->getMessage();
        }
    }
}

