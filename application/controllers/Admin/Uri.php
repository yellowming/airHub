<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Uri extends Admin_Controller {
    function __construct()
    {
        parent::__construct();
        
    }
	public function index()
	{
        $uris = $this->adminUriModel->getAll();
        $this->viewData['data']['uris'] = $uris;
	}
}
