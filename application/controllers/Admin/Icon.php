<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Icon extends Admin_Controller {
    function __construct()
    {
        parent::__construct();
        
    }
	public function index()
	{
        $menu = $this->adminMenuModel->allMenu;
	}
}
