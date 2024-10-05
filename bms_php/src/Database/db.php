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

    // Create the PDO instance and set the character set
    $pdo = new PDO("mysql:host=$host;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Create the database if it doesn't exist
    $pdo->exec("CREATE DATABASE IF NOT EXISTS `$database` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
    $pdo->exec("USE `$database`");
    
    // Create the users table
    $pdo->exec("
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
        )
    ");
    
    // Create the bills table
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS bills (
            bill_id CHAR(12) PRIMARY KEY,
            food_bill_amount DECIMAL(10, 2) DEFAULT 0.00 NOT NULL,
            organization VARCHAR(100) NOT NULL,
            status ENUM('unpaid', 'paid') DEFAULT 'unpaid' NOT NULL,
            hall_rent_amount DECIMAL(10, 2) DEFAULT 0.00 NOT NULL,
            total_bill DECIMAL(10, 2) DEFAULT 0.00 NOT NULL,
            bill_creator VARCHAR(50) NOT NULL,
            hall_rent_added_by VARCHAR(50) NOT NULL,
            mr_no VARCHAR(50) NOT NULL,
            money_received_by VARCHAR(50) DEFAULT NULL, 
            reviewed_by VARCHAR(50) DEFAULT 'none', 
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
    ");

    // Create the sysadmin table
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS sysadmin (
            id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(50) NOT NULL UNIQUE DEFAULT 'admin', 
            app_mode VARCHAR(25) NOT NULL DEFAULT 'dev',           
            password VARCHAR(255) NOT NULL,                       
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
    ");
    
    echo "Database and tables created successfully.<br>";

} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
