<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class MY_Controller extends CI_Controller 
{
    function __construct()
    {
		parent::__construct();
        
	}
}

class Admin_Controller extends MY_Controller
{
    function __construct()
    {
        parent::__construct();
        
    }

    public function _remap($method, $params = array()){
        $input_method = $this->input->method();
        if($input_method === 'options'){
            return $this->setJwtHeader();
        }
        $this->setJwtHeader();
        $method = $method.'_'.$input_method;
        if (method_exists($this, $method)){
            $this->setJwtHeader();
            if($this->uri->uri_string() !== 'auth/login'){
                if(!$this->jwt->verify($this->input->get_request_header('Authorization', TRUE))){
                    return $this->output
                        ->set_content_type('application/json')
                        ->set_output(json_encode(['message'=>'Unauthorized']))
                        ->set_status_header(401);
                }
            }
            $this->load->model(['adminUriModel','adminUserModel','adminRoleModel']);
            return call_user_func_array(array($this, $method), $params);
        }
        $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode(['message'=>'NotFound']))
            ->set_status_header(404);
    }

    public function _output($output){
        echo $output;
    }

    private function setJwtHeader(){
        $this->output->set_header("Access-Control-Allow-Origin: * ");
        $this->output->set_header("Access-Control-Allow-Headers: content-type,Authorization");
        $this->output->set_header("Access-Control-Allow-Methods: GET, POST, PUT,DELETE,OPTIONS,PATCH");
    }

    
    
}