<?php
/**
 * Honorarium Management System - HMS
 * @author: Adal Khan
 */

require_once __DIR__ . '/../vendor/autoload.php';

use Biam\Hms\Router;
use Biam\Hms\App;

Router::get('/',           [App::class, 'index']);
Router::get('/dashboard',  [App::class, 'dashboard']);
Router::get('/logout',     [App::class, 'logout']);
Router::get('/create',     [App::class, 'create']);
Router::get('/delete',     [App::class, 'delete']);
Router::get('/honorarium', [App::class, 'honorarium']);

Router::post('/',          [App::class, 'login']);

Router::run();
