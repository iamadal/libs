<?php

namespace Components\Database;

use PDO;
use PDOException;

class DB {
    private $pdo;

    public function __construct($iniFilePath = 'db.ini') {
        $dbConfig = parse_ini_file($iniFilePath, true);
        $host     = $dbConfig['database']['host'];
        $dbName   = $dbConfig['database']['database'];
        $username = $dbConfig['database']['username'];
        $password = $dbConfig['database']['password'];

        try {
            $this->pdo = new PDO("mysql:host=$host;charset=utf8mb4", $username, $password);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->pdo->exec("CREATE DATABASE IF NOT EXISTS `$dbName` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
            $this->pdo->exec("USE `$dbName`");
        } catch (PDOException $e) {
        }
    }

    public function createSysadminTable() {
        $query = "
            CREATE TABLE IF NOT EXISTS sysadmin (
                id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(50) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                app_mode VARCHAR(25) NOT NULL DEFAULT 'dev',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            );
        ";
        $this->pdo->exec($query);
    }

    public function createUsersTable() {
        $query = "
            CREATE TABLE IF NOT EXISTS users (
                id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(50) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                first_name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
                last_name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
                phone VARCHAR(255) NOT NULL,
                image_url VARCHAR(255) NULL,
                role_name VARCHAR(255) DEFAULT 'user',
                role_designation VARCHAR(255) DEFAULT 'employee',
                user_status VARCHAR(50) DEFAULT 'inactive',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            );
        ";
        $this->pdo->exec($query);
    }

    public function createBillsTable() {
        $query = "
            CREATE TABLE IF NOT EXISTS bills (
                   id INT AUTO_INCREMENT PRIMARY KEY,
                    bill_id VARCHAR(50) UNIQUE,
                    description VARCHAR(255),
                    food_bill DECIMAL(10, 2) DEFAULT 0.00,
                    hall_rent DECIMAL(10, 2) DEFAULT 0.00,
                    total_amount DECIMAL(10, 2) DEFAULT 0.00,
                    paid_amount DECIMAL(10, 2) DEFAULT 0.00,
                    due_amount DECIMAL(10, 2) DEFAULT 0.00,
                    mr_no VARCHAR(50) DEFAULT 'unpaid',
                    submitted_by VARCHAR(50) DEFAULT 'user',
                    hall_rent_added_by VARCHAR(50) DEFAULT 'user',
                    money_received_by VARCHAR(50) DEFAULT 'cashier',
                    tag VARCHAR(50) DEFAULT 'none',
                    fw_status VARCHAR(50) DEFAULT 'none',
                    
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                    
                    -- Adding indexes to frequently searched columns
                    INDEX (bill_id),
                    INDEX (mr_no),
                    INDEX (submitted_by),
                    INDEX (hall_rent_added_by),
                    INDEX (money_received_by),
                    INDEX (tag)
                );
        ";
        $this->pdo->exec($query);
    }

    public function addDefaultAdmin($username = '___admin', $password = '55761910') {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $query = "INSERT IGNORE INTO sysadmin (username, password) VALUES (:username, :password)";
        $stmt = $this->pdo->prepare($query);
        $stmt->execute([':username' => $username, ':password' => $hashedPassword]);
    }

    public function run() {
        $this->createSysadminTable();
        $this->createUsersTable();
        $this->createBillsTable();
        $this->addDefaultAdmin();
    }
}


