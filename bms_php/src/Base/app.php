<?php
/**
 * @author Adal Khan <https://www.github.com/iamadal>
 * The App Kernel 
 * */
namespace Components\Base;

use Components\Base\Database;
use Components\Models\SysAdmin;
use Components\Models\User;
use Components\Models\Bill;

class app {
    private static $View;
    
    public static function init() {
        if (self::$View === null) {
            self::$View = new \Twig\Environment(new \Twig\Loader\FilesystemLoader(__DIR__ . '/../../Views'));
        }
    }
    public static function login(){
       $_SESSION['username_error']=null;
       $_SESSION['password_error']=null;
       if(isset($_SESSION['user'])){
          header('location: /info');
          exit();
        } else {
          self::init();
          $csrf_token = Web::generateCsrfToken();
          echo self::$View->render('index.cs_',["csrf_token"=>$csrf_token]);
        }
    }
    public static function login_submit(){
         if(isset($_SESSION['user'])){
            header('location: /info');
            exit();
        } else {
          $username = trim(Web::sanitize($_POST['user_id']));
          $password = trim(Web::sanitize($_POST['password']));
          $db       = new User();   
          $usr      = $db->auth($username,$password); 
          $role  = $db->findUser($username);
        if($usr){
            $_SESSION['user']             = $role['username'];
            $_SESSION['role']             = $role['role_name'];
            $_SESSION['role_designation'] = $role['role_designation'];
            switch($role['role_name']){
                
                case 'director_general':
                header('location: /director_general');
                exit();
                break;
                
                case 'director_admin':
                header('location: /director_admin');
                exit();
                break;

                case 'ad_admin':
                header('location: /ad_admin');
                exit();
                break;
                
                case 'canteen_manager':
                header('location: /canteen_manager');
                exit();
                break;

                case 'admin_officer':
                header('location: /admin_officer');
                exit();
                break;

                case 'computer_operator':
                header('location: /computer_operator');
                exit();
                break;

                case 'cashier':
                header('location: /cashier');
                exit();
                break;

                default:
                header('location: /info');
                exit();
                break;
            }
        
        } else {
            $_SESSION['username_err'] = "আপনি ভুল পাসওয়ার্ড অথবা ইউজার আইডি দিয়ে চেষ্টা করছেন";
            header('location: /');
            exit();
        }
      }
    }
    public static function create_user(){
        self::init();
        $csrf_token = Web::generateCsrfToken();

        echo self::$View->render('create_user.cs_',[
            "csrf_token"=>$csrf_token,
            "username_error"=>$_SESSION['username_error'],
            "password_error"=>$_SESSION['password_error']
        ]);     
    }
    public static function create_user_submit() {
        $username      = trim(Web::sanitize($_POST['username']));
        $pass1         = trim(Web::sanitize($_POST['pass1']));
        $pass2         = trim(Web::sanitize($_POST['pass2']));
        $first_name    = trim(Web::sanitize($_POST['first_name']));
        $last_name     = trim(Web::sanitize($_POST['last_name']));
        $phone         = trim(Web::sanitize($_POST['phone']));
        $img_url       = "unset";

        $db = new User();
        $re = $db->findUser($username);
        if(!$re){
            if( ($pass1 !==$pass2) || strlen($pass1)<8 || strlen($pass2)<8 ){
               $_SESSION['password_error']="দুঃখিত, পাসওয়ার্ড মিল নেই। 8 ডিজিটের চেয়ে বড় পাসওয়ার্ড দিন।";
                header('location: /create_user');
                exit();
            } else {
               $db->create($username,$pass1,$first_name,$last_name,$phone,$img_url);
                header('location: /');
                exit();
            }
        } else {
           $_SESSION["username_error"] = "দুঃখিত, আপনার দেওয়া ইউজারনেমটি নিবন্ধিত আছে। অনুগ্রহ করে অন্য একটি নাম চেষ্টা করুন।";
           header('location: /create_user');
           exit();
        }
    }
    public static function update_user(){
        if(isset($_SESSION['user'])){
             self::init();
            $csrf_token = Web::generateCsrfToken();
            echo self::$View->render('update_user.cs_',[
                "csrf_token"=>$csrf_token,
                "user" => $_SESSION['user']
            ]);
        } else {
            header('location: /');
            exit();
        }
       
    }
    public static function update_user_submit(){
        $user       = trim(Web::sanitize($_POST['username']));
        $first_name = trim(Web::sanitize($_POST['first_name']));
        $last_name  = trim(Web::sanitize($_POST['last_name']));
        $phone      = trim(Web::sanitize($_POST['phone']));
        $db         = new User();
        $res        = $db->update($user,$first_name,$last_name,$phone); 
        header('location: /');
        exit();
    }
    public static function info(){
        if(!isset($_SESSION['user'])){
            header('location: /');
            exit();
        } else {
           $db   = new User();     
           if($data = $db->findUser($_SESSION['user'])){
             self::init();
             echo self::$View->render('info.cs_',[
              "user"=>$_SESSION['user'],
              "first_name" => $data['first_name'],
              "last_name" => $data['last_name'],
              "phone" => $data['phone'],
              "role_designation"=> $data['role_designation'],
              "role_name"=>$data['role_name'],
              "dashboard"=>$data['role_name'],
              "username"=>$data['username'],
              "csrf_token"=>Web::generateCsrfToken()
        ]);
          } else {
            session_unset();
            session_destroy();
            header('location: /');
            exit();
          }
        }
    }
    public static function SysAdmin(){
        $_SESSION['username_error']=null;
        if(isset($_SESSION['username'])=="__admin"){
            header('location: /admin');
            exit();
        }else {
          self::init();
          echo self::$View->render('sysadmin.cs_',["csrf_token"=>Web::generateCsrfToken()]);    
        }   
    }
    public static function SysAdminLogin(){
        if(isset($_SESSION['username'])=="__admin"){
            header('location: /admin');
            exit();
        } else {
          $username = trim(Web::sanitize($_POST['username']));
          $password = trim(Web::sanitize($_POST['pass']));
          $db       = new SysAdmin();   
          $admin    = $db->auth($username,$password); 
          if($admin){
            $_SESSION['username'] = $admin['username'];
            $_SESSION['app_mode'] = $admin['app_mode'];
            header('location: /admin');
            exit();
         } else {
            return "Invalid Info";
          }
        }
    }
    public static function admin(){
        if( isset($_SESSION['username'])=="__admin"){
          self::init();
          $users = new User();
          $data  = $users->all();      
          echo self::$View->render('admin.cs_',["admin"=>$_SESSION['username'],"users"=>$data]);
        } else {
            header('location: /sysadmin');
            exit();
        }
    }
   public static function delete_user(){
      $username = trim(Web::sanitize($_GET['username']));
      if(isset($_SESSION['username'])=="___admin"){
          $img = 'img/users' . '/' . $_GET['username'] . '.png';
          $db  = new User();
          $res = $db->deleteUser($username);
         if(file_exists($img)){unlink($img);}
             header('location: /admin');
             exit();
       } else {
         header('location: /admin');
         exit();
      }
   }
   public static function admin_update(){
    if(isset($_SESSION['username'])=="__admin"){
          self::init();
          echo self::$View->render('admin_update.cs_',["csrf_token"=>Web::generateCsrfToken(),"username_error"=>$_SESSION['username_error']]);
    } else {
     header('location: /sysadmin');
     exit();
   }
}
    public static function admin_update_submit(){
    $username = trim(Web::sanitize($_POST['username']));
    $role     = trim(Web::sanitize($_POST['role']));
    $role_d   = trim(Web::sanitize($_POST['role_designation']));
    $status   = trim(Web::sanitize($_POST['status']));
    $user     = new User();
    $data     = $user->findUser($username);
    if($data){
        $user->update_role($username,$role,$role_d,$status);
        header('location: /admin');
        exit();
    } else {
      $_SESSION['username_error'] = "এই নামে কোন ইউজার নেই।";
      header('location: /admin_update');
      exit();
    }
       
   }
    public static function director_general(){    
        if($_SESSION['role'] == "director_general"){
                self::init();
           echo self::$View->render('director_general.cs_');
        } else {
            session_unset();
            session_destroy();
            header('location: /');
            exit();
        }
    }
    public static function director_admin(){
       if($_SESSION['role'] == "director_admin"){
                self::init();
           echo self::$View->render('director_admin.cs_');
        } else {
            session_unset();
            session_destroy();
            header('location: /');
            exit();
        }
    }
    public static function ad_admin(){
       if($_SESSION['role'] == "ad_admin"){
                self::init();
           echo self::$View->render('ad_admin.cs_');
        } else {
            session_unset();
            session_destroy();
            header('location: /');
            exit();
        }
    }
    public static function canteen_manager(){
        if($_SESSION['role'] == "canteen_manager"){
                self::init();
           echo self::$View->render('canteen_manager.cs_');
        } else {
            session_unset();
            session_destroy();
            header('location: /');
            exit();
        }
    }
    public static function admin_officer(){
      if($_SESSION['role'] == "admin_officer"){
                self::init();
           echo self::$View->render('admin_officer.cs_');
        } else {
            session_unset();
            session_destroy();
            header('location: /');
            exit();
        }
    }
    public static function computer_operator(){
       if($_SESSION['role'] == "computer_operator"){
            $db   = new User();
            $data = $db->findUser($_SESSION['user']); 
                self::init();
           echo self::$View->render('computer_operator.cs_',[
            "username"=>$_SESSION['user'],
            "first_name"=>$data['first_name'],
            "last_name"=>$data['last_name'],
            "role_name"=>$data['role_designation']]);
        } else {
            session_unset();
            session_destroy();
            header('location: /');
            exit();
        }
    }
    public static function cashier(){
        if($_SESSION['role'] == "cashier"){
                self::init();
           echo self::$View->render('cashier.cs_');
        } else {
            session_unset();
            session_destroy();
            header('location: /');
            exit();
        }
    }
    public static function findBill(){
        $result = '';
        if(isset($_GET['action'])) {
            $db  = new Bill();
            $response = $_GET['action'];
            
            switch($response){
            case 'all':
            $result = $db->all(); 
            break;

            case 'food_bill':
            $msg = "Food bill list shown";
            break;

            case 'hall_rent':
            $msg = "Hall Rent list Shown";
            break;

            case 'unpaid':
            $msg = "Unpaid bills";
            break;

            default:
            $msg = "No Bill selected";
            break;
          }
        } 
        self::init();
        echo self::$View->render('bill_query.cs_',["users"=>$result]);
    }
    public static function logout(){
        session_unset();
        session_destroy();
        header('Location: /');
        exit();
    }
}
