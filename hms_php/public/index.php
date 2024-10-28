<?php
/**
 * Honorarium Management System - HMS
 * @author: Adal Khan
 * */



require_once __DIR__ . '/../vendor/autoload.php'; 

use Biam\Hms\Router;
use Biam\Hms\App;


Router::get('/', 			[app::class,'index']);
Router::get('/dashboard',   [app::class,'dashboard']);
Router::get('/logout',      [app::class,'logout']);
Router::get('/create',      [app::class,'create']);
Router::get('/delete',      [app::class,'delete']);


Router::post('/',           [app::class,'login']);

Router::run();




// use Biam\Hms\init;init::run();