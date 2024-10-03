<?php
 
 namespace Components\Base;

use PDO;
use PDOException;

abstract class Model {
    protected $db; 
    protected $table; 

    public function __construct(PDO $db) {
        $this->db = $db;
    }

    public function create(array $data): bool {
        $columns = implode(", ", array_keys($data));
        $placeholders = implode(", ", array_fill(0, count($data), '?'));
        $sql = "INSERT INTO {$this->table} ({$columns}) VALUES ({$placeholders})";

        try {
            $stmt = $this->db->prepare($sql);
            return $stmt->execute(array_values($data));
        } catch (PDOException $e) {
            $this->handleError($e);
            return false;
        }
    }

    public function find(int $id): ?array {
        $sql = "SELECT * FROM {$this->table} WHERE id = ?";
        try {
            $stmt = $this->db->prepare($sql);
            $stmt->execute([$id]);
            return $stmt->fetch(PDO::FETCH_ASSOC) ?: null;
        } catch (PDOException $e) {
            $this->handleError($e);
            return null;
        }
    }

    public function update(int $id, array $data): bool {
        $setPart = implode(", ", array_map(fn($col) => "$col = ?", array_keys($data)));
        $sql = "UPDATE {$this->table} SET {$setPart} WHERE id = ?";

        try {
            $stmt = $this->db->prepare($sql);
            return $stmt->execute(array_merge(array_values($data), [$id]));
        } catch (PDOException $e) {
            $this->handleError($e);
            return false;
        }
    }

    public function delete(int $id): bool {
        $sql = "DELETE FROM {$this->table} WHERE id = ?";
        try {
            $stmt = $this->db->prepare($sql);
            return $stmt->execute([$id]);
        } catch (PDOException $e) {
            $this->handleError($e);
            return false;
        }
    }

    public function all(): array {
        $sql = "SELECT * FROM {$this->table}";
        try {
            $stmt = $this->db->query($sql);
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            $this->handleError($e);
            return [];
        }
    }

    protected function handleError(PDOException $e): void {
        error_log($e->getMessage());
    }
}
