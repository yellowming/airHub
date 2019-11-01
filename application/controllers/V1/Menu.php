<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Menu extends Admin_Controller {
    function __construct(){
        parent::__construct();
        
    }
	public function getAll(){
        $uriTree = $this->adminUriModel->getTree();
        $this->output
        ->set_content_type('application/json')
        ->set_output(json_encode($uriTree));
	}
}
