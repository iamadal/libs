<?php

namespace Biam\Hms;

use Biam\Hms\Router;
use Biam\Hms\DB;
use Biam\Hms\Model\Course;

use PDO;
use PDOException;


class App {
    private static $view;

    public static function init() {
        if (self::$view === null) {
            self::$view = new \Twig\Environment(new \Twig\Loader\FilesystemLoader(__DIR__ . '/../views'));
        }
    }

    public static function index() {
        self::init();
        echo self::$view->render('index._vsx', ['csrf_token' => Router::generateCsrfToken()]);
    }

    public static function login() {
        DB::init(__DIR__ . '/../data/users.db');
        $email = trim(Router::sanitize($_POST['email']));
        $password = trim(Router::sanitize($_POST['psw']));
        $response = DB::login($email, $password);

        if ($response) {
            $_SESSION['email'] = $email;
            header('Location: /dashboard');
            exit();
        } else {
            header('Location: /');
            exit();
        }
    }

    public static function dashboard() {
        $admin_users = DB::all(__DIR__ . '/../data/users.db');

        if (isset($_GET['sid'], $_GET['name'], $_SESSION['email'])) {
            $sid = trim(Router::sanitize($_GET['sid']));
            $name = trim(Router::sanitize($_GET['name']));
            $designation = trim(Router::sanitize($_GET['designation']));
            $office = trim(Router::sanitize($_GET['office']));
            $hpr = trim(Router::sanitize($_GET['hpr']));
            DB::addSpeaker($sid, $name, $designation, $office, $hpr);
            header('Location: /dashboard');
            exit();
        }

        if (isset($_GET['remove'])) {
            DB::remove(trim(Router::sanitize($_GET['remove'])));
            header('Location: /dashboard');
            exit();
        }




        if (isset($_SESSION['email']) && isset($_GET['new_course'])) {
             $courseList = [];
            try {
                $db = new PDO('sqlite:' . __DIR__ . '/../data/course.db');
                $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                $query = "CREATE TABLE IF NOT EXISTS course_info (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    tracking_id TEXT UNIQUE,
                    description TEXT UNIQUE,
                    started DATETIME DEFAULT CURRENT_TIMESTAMP,
                    created_by TEXT
                )";
                $db->exec($query);

                $description = trim(Router::sanitize($_GET['new_course']));
                $created_by = $_SESSION['email'];

                do {
                    $tracking_id = sprintf('%07d', rand(0, 9999999));
                    $stmt = $db->prepare("SELECT COUNT(*) FROM course_info WHERE tracking_id = :tracking_id");
                    $stmt->execute(['tracking_id' => $tracking_id]);
                    $count = $stmt->fetchColumn();
                } while ($count > 0);

                $stmt = $db->prepare("INSERT INTO course_info (tracking_id, description, created_by) VALUES (:tracking_id, :description, :created_by)");
                $stmt->execute([
                    "tracking_id" => 'CID' . $tracking_id,
                    "description" => $description,
                    "created_by" => $created_by
                ]);
                header('Location: /dashboard');
                exit();
            } catch (PDOException $e) {
                header('Location: /dashboard');
                exit();
            }
        }


if (isset($_SESSION['email']) && isset($_GET['courseDelete'])) {
    try {
        $db = new PDO('sqlite:' . __DIR__ . '/../data/course.db');
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $db->prepare("DELETE FROM course_info WHERE tracking_id = :tracking_id");
        $trackingId = Router::sanitize($_GET['courseDelete']);
        $stmt->execute(['tracking_id' => $trackingId]);

        $dropStmt = $db->prepare("DROP TABLE IF EXISTS `$trackingId`");
        $dropStmt->execute();

        header('Location: /dashboard');
        exit();
    } catch (PDOException $e) {
        error_log($e->getMessage());
        echo "An error occurred while deleting the course. Please try again.";
    }
}


        $db = new PDO('sqlite:' . __DIR__ . '/../data/course.db');
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $ex = $db->prepare("SELECT * from course_info WHERE created_by=:created_by");
        $ex->execute(["created_by"=>$_SESSION['email']]);


        // Rendering the View
        $courseList = $ex->fetchAll(PDO::FETCH_ASSOC);
        
        $speakers = DB::all_speakers();
        self::init();
        echo self::$view->render('dashboard._vsx', [
            "user_info" => $_SESSION['email'],
            "admin_users" => $admin_users,
            "speakers" => $speakers,
            "courseList"=>$courseList
        ]);
    }



    



    public static function create() {
        if (isset($_SESSION['email']) && $_SESSION['email'] === "admin") {
            if (isset($_GET['email'], $_GET['password'])) {
                DB::create(trim($_GET['email']), trim($_GET['password']));
            } 
            header('Location: /dashboard');
            exit();
        }
        header('Location: /dashboard');
        exit();
    }

    public static function delete() {
        if (isset($_GET['delete']) && $_GET['delete'] !== "admin") {
            DB::delete(trim($_GET['delete']));
        }
        header('Location: /dashboard');
        exit();
    }



public static function honorarium() {
    $hl = 0;
    if (isset($_GET['id']) && isset($_GET['desc'])) {
        $_SESSION['course_id']   = Router::sanitize($_GET['id']);
        $_SESSION['description'] = Router::sanitize($_GET['desc']);
        $id = preg_replace('/[^a-zA-Z0-9_]/', '', $_GET['id']); // Allow only alphanumeric and underscores
        $desc = htmlspecialchars($_GET['desc']); // Sanitize description

        $db = new PDO('sqlite:' . __DIR__ . '/../data/course.db');
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Create a SQL statement with a dynamic table name
        $sql = "CREATE TABLE IF NOT EXISTS `$id` (
            SID INTEGER PRIMARY KEY CHECK (SID BETWEEN 1000 AND 9999),
            Designation TEXT,
            Topic Text,
            CDate Text,
            CST datetime,
            CET datetime,
            Duration REAL,
            HPH REAL,
            Total REAL,
            VAT REAL,
            Net_Pay REAL
        )";

        try {
            $stmt = $db->prepare($sql);
            $stmt->execute();
            header('location: /honorarium');
            exit();
        
        } catch (PDOException $e) {}
    }


      if (
            isset($_GET['speaker_name']) &&
            isset($_GET['sid']) &&
            isset($_GET['Designation']) &&
            isset($_GET['office']) &&
            isset($_GET['honorarium']) &&
            isset($_GET['lecture_date']) &&
            isset($_GET['cst']) &&
            isset($_GET['cet'])){ 

            //01. Update Speaker info
            //02. Create Honorarium Table

        $HPR = new Course(__DIR__ . "/../data/course.db");


        $speakerId     = Router::sanitize(trim( $_GET['sid'] ));
        $name          = Router::sanitize(trim( $_GET['speaker_name'] ));
        $description   = Router::sanitize(trim( $_GET['Designation'] . ',' . $_GET['office'] ));
        $topic         = Router::sanitize(trim( $_GET['topic']));
        $lectureDate   = Router::sanitize(trim( $_GET['lecture_date']));
        $cst           = Router::sanitize(trim( $_GET['cst'] ));
        $cet           = Router::sanitize(trim( $_GET['cet']));

         $startTime = \DateTime::createFromFormat('H:i', $cst);
           $endTime = \DateTime::createFromFormat('H:i', $cet);

    if ($endTime < $startTime) {
        $endTime->modify('+1 day');
    }

        $duration        = $startTime->diff($endTime);
        $durationString  = $duration->h . ' hours, ' . $duration->i . ' minutes';
        $durationInHours = $duration->h + ($duration->i / 60);
        $honorarium      = $durationInHours * Router::sanitize(trim($_GET['honorarium'])); 
        $payment         = 'Unpaid';
        $HPR->addHonorarium($speakerId,$name,$description,$topic,$lectureDate,$cst,$cet,$durationString,$honorarium,$payment);
        $HPR->close();
        $dbs = new Course(__DIR__ . "/../data/users.db");
        $dbs->addOrUpdateSpeaker(Router::sanitize(trim( $_GET['sid'] )),Router::sanitize(trim( $_GET['speaker_name'] )), Router::sanitize(trim( $_GET['Designation'])) , $_GET['office'], $_GET['honorarium'] );

        header('location: /honorarium');
        exit();
}
            $db = new Course(__DIR__ . "/../data/course.db");
            $honorarium = $db->all();
            $db->close();

           
            if(isset($_GET['hl'])) {$hl=1;}


            self::init();
        echo self::$view->render('honorarium._vsx', ["course_id"=>$_SESSION['course_id'], "description"=>$_SESSION['description'],"user_info"=>$_SESSION['email'],"hr"=>$honorarium,"hl"=>$hl]);

}






    public static function logout() {
        session_unset();
        session_destroy();
        header('Location: /');
        exit();
    }
}



