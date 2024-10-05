<?php

namespace Components\Models;

use Components\Base\Database;
use PDO;
use PDOException;

class User {
    private $pdo;
    public function __construct() {$this->pdo = Database::init(); }

    public function all() {
        $sql = "SELECT * FROM users"; 
        $stmt = $this->pdo->query($sql);
        return $stmt->fetchAll();
    }




     public function auth($username, $password) {
        $query = 'SELECT * FROM users WHERE username = :username';
        $stmt = $this->pdo->prepare($query);
        $stmt->bindParam(':username', $username);

        try {
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if ($users && password_verify($password, $users['password'])) {
                return $users;
            } else {
                return false; // Return along with Data
            }
        } catch (PDOException $e) {
            die('Error authenticating users: ' . $e->getMessage());
        }
    }


    public function findUser($username) {
        $sql = "SELECT * FROM users WHERE username = :username"; 
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['username' => $username]);
        return $stmt->fetch();
    }

       public function create($username, $password, $first_name, $last_name, $phone, $image_url) {
        $sql = "INSERT INTO users (username, password, first_name, last_name, phone, image_url) 
                VALUES (:username, :password, :first_name, :last_name, :phone, :image_url)"; 
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([
            'username' => $username,
            'password' => password_hash($password, PASSWORD_BCRYPT),  // Hashing the password for security
            'first_name' => $first_name,
            'last_name' => $last_name,
            'phone' => $phone,
            'image_url' => $image_url
        ]);
    }

   public function update($username, $first_name, $last_name, $phone) {
    // Check if the username exists
    $checkSql = "SELECT COUNT(*) FROM users WHERE username = :username";
    $checkStmt = $this->pdo->prepare($checkSql);
    $checkStmt->execute(['username' => $username]);

    if ($checkStmt->fetchColumn() == 0) {
        // If no user with the given username exists
        return "Username not found.";
    }

    // Proceed with update if username exists
    $sql = "UPDATE users 
            SET first_name = :first_name, last_name = :last_name, phone = :phone 
            WHERE username = :username"; 
    $stmt = $this->pdo->prepare($sql);
    
    if ($stmt->execute([
        'first_name' => $first_name, 
        'last_name'  => $last_name, 
        'phone'      => $phone,
        'username'   => $username
    ])) {
        return "Updated";
    } else {
        return "Fail";
    }
}


public function update_role($username, $role_name, $role_designation, $status) {
    $sql = "UPDATE users SET role_name = :role_name, user_status = :status, role_designation=:role_designation WHERE username = :username"; 
    $stmt = $this->pdo->prepare($sql);
    $stmt->execute(['role_name' => $role_name, 'status' => $status, 'role_designation'=>$role_designation, 'username' => $username]);
}




public function deleteUser($username) {
    $user = $this->findUser($username);
    if ($user) {
        $sql = "DELETE FROM users WHERE username = :username";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['username' => $username]);

        return $stmt->rowCount();
    }

    return false; 
}





}
