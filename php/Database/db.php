<?php
function getDbConfig($filename) {
    return parse_ini_file($filename, true)['database'];
}

try {
    $dbConfig = getDbConfig('db.ini');
    $host = $dbConfig['host'];
    $username = $dbConfig['username'];
    $password = $dbConfig['password'];
    $database = $dbConfig['database'];
    
    $pdo = new PDO("mysql:host=$host;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    
    $pdo->exec("CREATE DATABASE IF NOT EXISTS `$database` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
    $pdo->exec("USE `$database`");
    
    
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS roles (
            id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            role_name VARCHAR(50) NOT NULL UNIQUE,
            designation VARCHAR(50) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
    ");
    

    $pdo->exec("
        CREATE TABLE IF NOT EXISTS users (
            id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(50) NOT NULL UNIQUE,
            phone VARCHAR(15) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role_id INT(11) UNSIGNED,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL
        )
    ");
    
    
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS bills (
            bill_id CHAR(12) PRIMARY KEY,
            bill_amount DECIMAL(10, 2) NOT NULL,
            organization VARCHAR(100) NOT NULL,
            status ENUM('due', 'paid') NOT NULL,
            hall_rent_amount DECIMAL(10, 2) NOT NULL,
            total_bill DECIMAL(10, 2) NOT NULL,
            bill_creator VARCHAR(50) NOT NULL,
            hall_rent_added_by VARCHAR(50) NOT NULL,
            mr_no VARCHAR(50) NOT NULL,
            received_by VARCHAR(50) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
    ");
    
    echo "Database and tables created successfully.<br>";

} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
