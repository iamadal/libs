<?php
/**
 * @author Adal Khan <https://www.github.com/iamadal>
 * Central Controller
 * */
namespace Components\Base;

use Components\Base\Database;
use Components\Models\SysAdmin;
use Components\Models\User;

class app {
 
    
    private static $View;
    public static function init() {
        if (self::$View === null) {
            self::$View = new \Twig\Environment(new \Twig\Loader\FilesystemLoader(__DIR__ . '/../../Views'));
        }
    }

    /*Page Controllers*/
    public static function login(){
       $_SESSION['username_error']=null;
       $_SESSION['password_error']=null;

       if(isset($_SESSION['user'])){
          header('location: /info');
          exit();
        } else {
          self::init();
          $csrf_token = Web::generateCsrfToken();
          echo self::$View->render('index.html',["csrf_token"=>$csrf_token]);
        }


    }
    // 03. Form data(login) Method POST @Route '/login'
    
    public static function login_submit(){
         if(isset($_SESSION['user'])){
            header('location: /info');
            exit();
        } else {
          $username = trim(Web::sanitize($_POST['user_id']));
          $password = trim(Web::sanitize($_POST['password']));
          $db       = new User();
        
          $usr   = $db->auth($username,$password); // This return true if Password Match else False; Now check with if

        if($usr){
            $_SESSION['user'] = $usr['username'];
             header('location: /info');
        } else {
            $_SESSION['username_err'] = "আপনি ভুল পাসওয়ার্ড অথবা ইউজার আইডি দিয়ে চেষ্টা করছেন";
            header('location: /');
            exit();
        }

        }
    }

    //
 public static function create_user(){
        self::init();
        $csrf_token = Web::generateCsrfToken();

        echo self::$View->render('create_user.html',[
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

        // input validation
        $db = new User();
        $re = $db->findUser($username);
        if(!$re){
            if( ($pass1 !==$pass2) || strlen($pass1)<8 || strlen($pass2)<8 ){
               $_SESSION['password_error']="দুঃখিত, পাসওয়ার্ড মিল নেই। 8 ডিজিটের চেয়ে বড় পাসওয়ার্ড দিন।";
                header('location: /create_user');

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

    // Update

    public static function update_user(){
        if(isset($_SESSION['user'])){
             self::init();
            $csrf_token = Web::generateCsrfToken();
            echo self::$View->render('update_user.html',[
                "csrf_token"=>$csrf_token,
                "user" => $_SESSION['user']
            ]);
        } else {
            header('location: /');
        }
       
    }





    public static function update_user_submit(){
        // No validation. User is responsible for updating the data
        $user       = trim(Web::sanitize($_POST['username']));
        $first_name = trim(Web::sanitize($_POST['first_name']));
        $last_name  = trim(Web::sanitize($_POST['last_name']));
        $phone      = trim(Web::sanitize($_POST['phone']));

        $db  = new User();
        $res = $db->update($user,$first_name,$last_name,$phone); 
        header('location: /');

    }








    public static function info(){
        if(!isset($_SESSION['user'])){
            header('location: /');
        } else {
           $db   = new User();
           $data = $db->findUser($_SESSION['user']);

     
         
         
           self::init();
           $info = '';
           echo self::$View->render('info.html',[
            "info"=>$info, 
            "user"=>$_SESSION['user'],
            "first_name" => $data['first_name'],
             "last_name" => $data['last_name'],
                 "phone" => $data['phone'],
                 "role_designation"=> $data['role_designation'],
                 "role_name"=>$data['role_name']
        ]);
        }
       
    }
 





    // 04. Pages for sysadmin and setup. @Route '/sysadmin' $table=sysadmin. if user=sysadmin not found redirect to setup page

    public static function SysAdmin(){
        $_SESSION['username_error']=null;
        if(isset($_SESSION['username'])=="__admin"){
            header('location: /admin');
        }else {
          self::init();
          echo self::$View->render('sysadmin.html',["csrf_token"=>Web::generateCsrfToken()]);    
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
        
          $admin    = $db->auth($username,$password); // This return true if Password Match else False; Now check with if

        if($admin){
            $_SESSION['username'] = $admin['username'];
            $_SESSION['app_mode'] = $admin['app_mode'];
            header('location: /admin');
        } else {
            return "Invalid Info";
        }

        }
    }
    
    // Admin Panel
        public static function admin(){
        if( isset($_SESSION['username'])=="__admin"){
          self::init();
          $users = new User();
          $data  = $users->all();
          
          echo self::$View->render('admin.html',["admin"=>$_SESSION['username'],"users"=>$data]);

      
        } else {
            header('location: /sysadmin');
            exit();
        }
    }


   public static function delete_user(){
      $username = trim(Web::sanitize($_GET['username']));
      if(isset($_SESSION['username'])=="___admin"){
         $db = new User();
         $res = $db->deleteUser($username);
         header('location: /admin');
         exit();
      } else {
         header('location: /admin');
      }

   }

   public static function admin_update(){
    if(isset($_SESSION['username'])=="__admin"){
          self::init();
          echo self::$View->render('admin_update.html',["csrf_token"=>Web::generateCsrfToken(),"username_error"=>$_SESSION['username_error']]);
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

    $user = new User();
    $data = $user->findUser($username);

    if($data){
        $user->update_role($username,$role,$role_d,$status);
        header('location: /admin');
    } else {
      $_SESSION['username_error'] = "এই নামে কোন ইউজার নেই।";
      header('location: /admin_update');
    }
       
   }

    // 04.1 Sysadmin setup.@Route '/sysadmin/init' Generate init>>  View >> enter username and password and app_mode('maintanance,ready')

    /*End of Pages*/

    public static function logout(){
            session_unset();
            session_destroy();
            header('Location: /');
            exit;
    }
    

}
