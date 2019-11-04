<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends Admin_Controller {
    function __construct(){
        parent::__construct();
        
    }
	public function login(){
        $input = json_decode($this->input->raw_input_stream);
        $user = $this->adminUserModel->collection->findOne(['email'=>$input->email]);
        $token = $this->jwt->login($user);
        $this->output
        ->set_content_type('application/json')
        ->set_output(json_encode(['token'=>$token]));
	}
}
