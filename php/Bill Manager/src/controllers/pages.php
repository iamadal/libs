<?php

namespace Bms\controllers;

use Twig\Environment;
use Twig\Loader\FilesystemLoader;


class pages{

	private $views;

	public function __construct(){
		$dir         = new FilesystemLoader('src/views');
		$this->views = new Environment($dir);
	}

	public function index(){
		echo $this->views->render('index.html');
		
	}

	public function home(){
		echo "Home";
	}

    public function about(){
		echo "about";
	}

	public function err(){
		echo "Error Pages";
	}
}