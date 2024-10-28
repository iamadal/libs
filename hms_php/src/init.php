<?php

namespace Biam\Hms;

use PDO;

class Init {
    private static $dbFile = __DIR__ . '/../data/users.db';
    public static function run() {
        try {
            $pdo = new PDO("sqlite:" . self::$dbFile);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE NOT NULL, password TEXT NOT NULL)";
            $pdo->exec($sql);
            self::insertDefaultUser($pdo);
        } catch (\PDOException $e) {
        } finally {
            $pdo = null;
        }
    }

    private static function insertDefaultUser($pdo) {
        $email = 'admin';
        $password = password_hash('biam1234', PASSWORD_BCRYPT);
        $checkUserSql = "SELECT * FROM users WHERE email = :email";
        $stmt = $pdo->prepare($checkUserSql);
        $stmt->bindValue(':email', $email, PDO::PARAM_STR);
        $stmt->execute();
        if ($stmt->rowCount() === 0) {
            $insertSql = "INSERT INTO users (email, password) VALUES (:email, :password)";
            $stmt = $pdo->prepare($insertSql);
            $stmt->bindValue(':email', $email, PDO::PARAM_STR);
            $stmt->bindValue(':password', $password, PDO::PARAM_STR);
            $stmt->execute();
        }
    }
}
