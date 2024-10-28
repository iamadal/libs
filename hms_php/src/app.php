<?php
/**
 * App Kernel - @author Adal Khan 
 */

namespace Biam\Hms;

use Biam\Hms\Router;
use Biam\Hms\db;

class app {
    private static $view;
    
    public static function init() {
        if (self::$view === null) {
            self::$view = new \Twig\Environment(new \Twig\Loader\FilesystemLoader(__DIR__ . '/../views'));
        }
    }

	public static function index(){
		self::init();
		echo self::$view->render('index._vsx',['csrf_token'=>Router::generateCsrfToken()]);
	}

	public static function login(){
		  DB::init(__DIR__ . '/../data/users.db');
		  $email    = trim(Router::sanitize($_POST['email']));
		  $password = trim(Router::sanitize($_POST['psw']));
		  $response = DB::login($email,$password);
		  if($response){
		  	 $_SESSION['email'] = $email;
		  	 header('location: /dashboard');
		  	 exit();
		  } else {
		  	header('location: /');
		  	exit();
		  }

	}

public static function dashboard()
{
    $admin_users = DB::all();

    // Check if the required parameters are set
    if (isset($_GET['sid'])  && isset($_SESSION['email'])) {
        $sid         = trim(Router::sanitize($_GET['sid']));
        $name        = trim(Router::sanitize($_GET['name']));
        $designation = trim(Router::sanitize($_GET['designation']));
        $office      = trim(Router::sanitize($_GET['office']));
        $hpr         = trim(Router::sanitize($_GET['hpr']));
        DB::addSpeaker($sid, $name, $designation, $office, $hpr);
        header('location: /dashboard');
        exit();
    }
     $speakers    = DB::all_speakers();
    self::init();
    echo self::$view->render('dashboard._vsx', [
        "user_info" => $_SESSION['email'],
        "admin_users" => $admin_users,
        "speakers"=> $speakers
    ]);
}


	public static function create(){
		if(isset($_SESSION['email'])){
			if($_SESSION['email']=="admin"){
				if(isset($_GET['email']) && isset($_GET['password'])){
					DB::create($_GET['email'],$_GET['password']);
				} else {
					header('location: /');
					exit();
				}
			} else {
				header('location: /');
					exit();
			}
		} else {
			header('location: /');
					exit();
		}
	}

	public static function delete(){
		if(isset($_GET['delete'])){
			if($_GET['delete'] !="admin") {
				DB::delete($_GET['delete']);
			    header('location: /dashboard');
		    	exit();
			} else {
				header('location: /dashboard');
				exit();
			}
		}
	}

	public static function logout(){
		session_unset();
		session_destroy();
		header('location: /');
		exit();
	}

	
}