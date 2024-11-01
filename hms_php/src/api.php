<?php

$user_db   = __DIR__ . '/../data/users.db';
$course_db = __DIR__ . '/../data/course.db';

function dbConnect($path) {
    try {
        $db = new PDO("sqlite:" . $path);
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        return $db;
    } catch (PDOException $e) {
        error_log("Database connection error: " . $e->getMessage());
        return null;
    }
}

function readSpeakers() {
    global $user_db;
    $db = dbConnect($user_db);

    if ($db) {
        try {
            $stmt = $db->prepare('SELECT * FROM speakers');
            $stmt->execute();
            $speakers = $stmt->fetchAll();
            return $speakers;
        } catch (Exception $e) {
            error_log("Failed to read speakers: " . $e->getMessage());
            return false;
        } finally {
            $db = null;
        }
    } else {
        return false;
    }
}

function addSpeakers($sid, $name, $designation, $office, $hpr) {
    global $user_db;
    $db = dbConnect($user_db);

    if ($db) {
        try {
            $stmt = $db->prepare('INSERT INTO speakers(sid, name, designation, office, hpr) VALUES (:sid, :name, :designation, :office, :hpr)');
            $stmt->execute([
                'sid' => $sid,
                'name' => htmlspecialchars($name),
                'designation' => htmlspecialchars($designation),
                'office' => htmlspecialchars($office),
                'hpr' => htmlspecialchars($hpr)
            ]);
            return true;
        } catch (Exception $e) {
            error_log("Failed to add speaker: " . $e->getMessage());
            return false;
        } finally {
            $db = null;
        }
    } else {
        return false;
    }
}

function readSpeakerByName($speakerName) {
    global $user_db;
    $db = dbConnect($user_db);

    if ($db) {
        try {
            $stmt = $db->prepare('SELECT * FROM speakers WHERE name LIKE :name');
            $stmt->execute(['name' => '%' . htmlspecialchars($speakerName) . '%']);
            $speakers = $stmt->fetchAll();
            return $speakers;
        } catch (Exception $e) {
            error_log("Failed to search speakers by name: " . $e->getMessage());
            return false;
        } finally {
            $db = null;
        }
    } else {
        return false;
    }
}

// Ajax Request Handling

function jsonResponse($data, $status = 200) {
    header('Content-Type: application/json');
    http_response_code($status);
    echo json_encode($data);
    exit;
}

function readSpeakersJSON() {
    global $user_db;
    $db = dbConnect($user_db);

    if ($db) {
        try {
            $stmt = $db->prepare('SELECT * FROM speakers');
            $stmt->execute();
            $speakers = $stmt->fetchAll();
            jsonResponse(['status' => 'success', 'data' => $speakers]);
        } catch (Exception $e) {
            error_log("Failed to read speakers: " . $e->getMessage());
            jsonResponse(['status' => 'error', 'message' => 'Failed to retrieve speakers.'], 500);
        } finally {
            $db = null;
        }
    } else {
        jsonResponse(['status' => 'error', 'message' => 'Database connection failed.'], 500);
    }
}

function addSpeakersJSON($sid, $name, $designation, $office, $hpr) {
    global $user_db;
    $db = dbConnect($user_db);

    if ($db) {
        try {
            $stmt = $db->prepare('INSERT INTO speakers (sid, name, designation, office, hpr) VALUES (:sid, :name, :designation, :office, :hpr)');
            $stmt->execute([
                'sid' => $sid,
                'name' => htmlspecialchars($name),
                'designation' => htmlspecialchars($designation),
                'office' => htmlspecialchars($office),
                'hpr' => htmlspecialchars($hpr)
            ]);
            jsonResponse(['status' => 'success', 'message' => 'Speaker added successfully.'], 201);
        } catch (Exception $e) {
            error_log("Failed to add speaker: " . $e->getMessage());
            jsonResponse(['status' => 'error', 'message' => 'Failed to add speaker.'], 500);
        } finally {
            $db = null;
        }
    } else {
        jsonResponse(['status' => 'error', 'message' => 'Database connection failed.'], 500);
    }
}

function readSpeakerByNameJSON($speakerName) {
    global $user_db;
    $db = dbConnect($user_db);

    if ($db) {
        try {
            $stmt = $db->prepare('SELECT * FROM speakers WHERE name LIKE :name LIMIT 10');
            $stmt->execute(['name' => '%' . htmlspecialchars($speakerName) . '%']);
            $speakers = $stmt->fetchAll();
            if (!empty($speakers)) {
                jsonResponse(['status' => 'success', 'data' => $speakers]);
            } else {
                jsonResponse(['status' => 'success', 'message' => 'No speakers found.']);
            }
        } catch (Exception $e) {
            error_log("Failed to search speakers by name: " . $e->getMessage());
            jsonResponse(['status' => 'error', 'message' => 'Failed to search for speakers.'], 500);
        } finally {
            $db = null;
        }
    } else {
        jsonResponse(['status' => 'error', 'message' => 'Database connection failed.'], 500);
    }
}
