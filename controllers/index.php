<?php 
namespace Controllers;

class Index extends \App\Controller
{
	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		$this->view->title = "Home | MVC System";
		$this->view->render("index/index");
	}
}