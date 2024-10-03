<?php
/**
 * @author Adal Khan <https://www.github.com/iamadal>
 * Central Controller
 * */
namespace Components\Base;

class Controller {
    private static $View;
    public static function init() {
        if (self::$View === null) {
            self::$View = new \Twig\Environment(new \Twig\Loader\FilesystemLoader(__DIR__ . '/../../Views'));
        }
    }

    /*Page Controllers*/
    public static function index(){
        self::init();
        $csrf_token = Web::generateCsrfToken();
        echo self::$View->render('form.html',["csrf_token"=>$csrf_token]);

    }

    public static function submit() {
        $name = Web::sanitizeOutput($_POST['name']);
        echo 'Form submission successful! Name: ' . $name;
    }

    public static function home(){
        echo 'Your are in Homepage';
    }
}
