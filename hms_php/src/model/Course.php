<?php
namespace Biam\Hms\model;

use PDO;

class Course {
    private $courseDb;

    public function __construct($courseDbPath) {
        $this->courseDb = new PDO("sqlite:$courseDbPath");
        $this->courseDb->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->createHonorariumTable();
        $this->createSpeakersTable();
    }

    private function createHonorariumTable() {
        $sql = "CREATE TABLE IF NOT EXISTS honorarium (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            speaker_id INTEGER NOT NULL,
            Name TEXT NOT NULL,
            Description TEXT,
            Topic TEXT,
            Lecture_date TEXT NOT NULL,
            CST TEXT NOT NULL,
            CET TEXT NOT NULL,
            Duration REAL,
            Honorarium REAL,
            Payment REAL
        )";
        $this->courseDb->exec($sql);
    }

    private function createSpeakersTable() {
        $sql = "CREATE TABLE IF NOT EXISTS speakers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            sid TEXT NOT NULL UNIQUE,
            name TEXT NOT NULL,
            designation TEXT NOT NULL,
            office TEXT NOT NULL,
            hpr INTEGER
        )";
        $this->courseDb->exec($sql);
    }

    public function addHonorarium($speakerId, $name, $description, $topic, $lectureDate, $cst, $cet, $duration, $honorarium, $payment) {
        $stmt = $this->courseDb->prepare("INSERT INTO honorarium (speaker_id, Name, Description, Topic, Lecture_date, CST, CET, Duration, Honorarium, Payment) 
                                           VALUES (:speaker_id, :name, :description, :topic, :lecture_date, :cst, :cet, :duration, :honorarium, :payment)");
        $stmt->bindParam(':speaker_id', $speakerId);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':description', $description);
        $stmt->bindParam(':topic', $topic);
        $stmt->bindParam(':lecture_date', $lectureDate);
        $stmt->bindParam(':cst', $cst);
        $stmt->bindParam(':cet', $cet);
        $stmt->bindParam(':duration', $duration);
        $stmt->bindParam(':honorarium', $honorarium);
        $stmt->bindParam(':payment', $payment);
        return $stmt->execute();
    }

    public function viewHonorarium($speakerId) {
        $stmt = $this->courseDb->prepare("SELECT * FROM honorarium WHERE speaker_id = :speaker_id");
        $stmt->bindParam(':speaker_id', $speakerId);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function all() {
        $stmt = $this->courseDb->prepare("SELECT * FROM honorarium");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function addOrUpdateSpeaker($sid, $name, $designation, $office, $hpr) {
        $stmt = $this->courseDb->prepare("INSERT INTO speakers (sid, name, designation, office, hpr) 
                                          VALUES (:sid, :name, :designation, :office, :hpr)
                                          ON CONFLICT(sid) DO UPDATE SET 
                                              name = excluded.name,
                                              designation = excluded.designation,
                                              office = excluded.office,
                                              hpr = excluded.hpr");

        $stmt->execute([
            "sid" => $sid,
            "name" => $name,
            "designation" => $designation,
            "office" => $office,
            "hpr" => $hpr 
        ]);
    }

    public function close() {
        $this->courseDb = null;
    }
}
