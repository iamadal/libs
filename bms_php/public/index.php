<?php
/**
 * Front app
 * @author Adal Khan
 * 01. Web::init() - initialize the system for booting
 * 02. Create URI using GET or POST
 * 03. First Sanitize the out Web::sanitizeOutput() then regenerate the token Web::generateCsrfToken() in post request 
 * 04. Call Web::run() for starting request and response handling
 */

require_once __DIR__ . '/../vendor/autoload.php'; 

use Components\Base\Web;
use Components\Base\app;

Web::init();    
                                        // Boot
Web::get('/',                           [app::class,'login']);   // Homepage -> Access login '/login'
Web::get('/dashboard',                  [app::class,'user_dashboard']);   // User Dashboard page
Web::get('/sysadmin',                   [app::class, 'SysAdmin']); // Sysadmin
Web::get('/logout',                     [app::class,'logout']);
Web::get('/admin',                      [app::class,'admin']);
Web::get('/create_user',                [app::class,'create_user']);  
Web::get('/update_user',                [app::class,'update_user']);
Web::get('/info',                       [app::class,'info']);
Web::get('/delete_user',                [app::class,'delete_user']);
Web::get('/admin_update',               [app::class,'admin_update']);


Web::post('/' ,                         [app::class, 'login_submit']); 
Web::post('/sysadmin',                  [app::class, 'SysAdminLogin']); 
Web::post('/create_user',               [app::class, 'create_user_submit']); 
Web::post('/update_user',               [app::class, 'update_user_submit']);
Web::post('/admin_update',              [app::class,'admin_update_submit']);

Web::run();


