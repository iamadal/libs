<?php
 /**
  * @author Adal Khan
  * Rendering Engine
  * */

namespace Components;

use Components\Base\View;
use Components\Base\Web;

class Pages{
    private static $dir = __DIR__ . '/views';

    public static function index(){
        echo Web::csrfToken();
   }

public static function login_view() {
        $csrf = Web::csrfToken();
        $view = View::Init(self::$dir);
        $name = "adal";
        echo $view->render('login.html',['_csrf' => $csrf ]);
   }

   public static function login() {
        Web::csrfVerify();
        $view = View::Init(self::$dir);
        $name = "adal";
        echo $view->render('login.html');
   }
}