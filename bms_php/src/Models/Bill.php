<?php

namespace Components\Models;

use PDO;
use PDOException;
use Components\Base\Database;

class Bill extends Database {
    protected $table = 'bills';
    private   $pdo;

    public function __construct() {
        $this->pdo = Database::init();
    }

    public function all() {
        // Correct SQL query: fw_status should be in quotes
        $sql = "SELECT * FROM " . $this->table . " WHERE fw_status = 'released'";

        try {
            $stmt = $this->pdo->query($sql);
            return $stmt->fetchAll(PDO::FETCH_ASSOC); // Fetch all results as an associative array
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
            return []; 
        }
    }

    public function due_amount() {
        // Refined query to focus on bills with a due amount
        $sql = "SELECT * FROM " . $this->table . " WHERE due_amount > 0";

        try {
            $stmt = $this->pdo->query($sql);
            return $stmt->fetchAll(PDO::FETCH_ASSOC); // Fetch all results as an associative array
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
            return []; 
        }
    }

    public function food() {
        // Refined query to focus on bills with no hall rent
        $sql = "SELECT * FROM " . $this->table . " WHERE hall_rent = 0";

        try {
            $stmt = $this->pdo->query($sql);
            return $stmt->fetchAll(PDO::FETCH_ASSOC); // Fetch all results as an associative array
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
            return []; 
        }
    }

    public function hall() {
        // Refined query to focus on bills with hall rent
        $sql = "SELECT * FROM " . $this->table . " WHERE hall_rent > 0";

        try {
            $stmt = $this->pdo->query($sql);
            return $stmt->fetchAll(PDO::FETCH_ASSOC); // Fetch all results as an associative array
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
            return []; 
        }
    }

        public function paid() {
        // Refined query to focus on bills with hall rent
        $sql = "SELECT * FROM " . $this->table . " WHERE due_amount = 0";

        try {
            $stmt = $this->pdo->query($sql);
            return $stmt->fetchAll(PDO::FETCH_ASSOC); // Fetch all results as an associative array
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
            return []; 
        }
    }





    public function search($query) {
        $sql = "SELECT * FROM " . $this->table . " WHERE bill_id LIKE :query OR tag LIKE :query";
        
        try {
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute([':query' => "%$query%"]);
            return $stmt->fetchAll(PDO::FETCH_ASSOC); 
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
            return []; 
        }
    }


          public function create($bill_id, $description, $food_bill, $hall_rent, $total_amount, $received_amount, $due_amount, $mr_no, $submitted_by, $fw_status) {
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



}
