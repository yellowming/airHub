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

    public $viewData = [];
    public function _remap($method, $params = array())
    {
        
        $is_ajax = $this->input->is_ajax_request();
        if($is_ajax) $method = $method.'_'.$this->input->method();
        if (method_exists($this, $method))
        {
            call_user_func_array(array($this, $method), $params);
            if($is_ajax){
                $this->output
                    ->set_content_type('application/json')
                    ->set_output(json_encode($this->viewData));
            }else{
                $this->load->view($this->router->directory.$this->router->class.'_'.$this->router->method,$this->viewData);
            }
        }else{
            show_404();
        }
    }

    public function _output($output)
    {
        
        echo $output;
    }

    
}