<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends Admin_Controller {
    function __construct(){
        parent::__construct();
        
    }
	public function login(){
        $user = $this->adminUserModel->collection->findOne(['email'=>$this->input->post('email')]);
        $token = jwt::build($this);
        $this->output
        ->set_content_type('application/json')
        ->set_output(json_encode($user));
	}
}
