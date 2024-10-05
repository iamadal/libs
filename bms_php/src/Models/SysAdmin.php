<?php

namespace Components\Models;

use Components\Base\Database;
use PDO;
use PDOException;

class SysAdmin extends Database {
    private $db;
    public function __construct() { $this->db = Database::init(); }

    public function auth($username, $password) {
        $query = 'SELECT * FROM sysadmin WHERE username = :username';
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':username', $username);

        try {
            $stmt->execute();
            $sysadmin = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if ($sysadmin && password_verify($password, $sysadmin['password'])) {
                return $sysadmin;
            } else {
                return false; // Return along with Data
            }
        } catch (PDOException $e) {
            die('Error authenticating admin: ' . $e->getMessage());
        }
    }
}
