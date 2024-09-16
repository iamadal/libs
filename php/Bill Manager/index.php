<?php

/**
 * @author Adal Khan <https://www.github.com/iamadal>
 * MVC 
 */

require 'vendor/autoload.php';

use Bms\router;
use Bms\Controllers\pages;


$in = new pages();

router::read("GET","/",     [$in,'index']);
router::read("GET","/home", [$in,'home']);
router::read("GET","/about",[$in,'about']);
router::readErr([$in,'err']);
router::run(); 