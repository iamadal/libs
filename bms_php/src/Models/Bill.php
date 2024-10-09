<?php

namespace Components\Models;

use PDO;
use PDOException;
use Components\Base\Database;

class Bill extends Database {
    protected $table = 'bills';
    private   $pdo;
    public function __construct() { $this->pdo = Database::init(); }

    public function all() {
        $sql = "SELECT * FROM " . $this->table;

        try {
            $stmt = $this->pdo->query($sql);
            return $stmt->fetchAll(PDO::FETCH_ASSOC); // Fetch all results as an associative array
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
            return []; 
        }
    }
}
