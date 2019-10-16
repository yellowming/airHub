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
    public $viewData;
    function __construct()
    {
        parent::__construct();
        $this->load->model('adminMenuModel');
        $this->viewData = [
            'metal' => [],
            'menutree' => $this->adminMenuModel->get_tree(),
            'title' => '',
            'data' => [],
            'template' => [
                'path' => $this->router->directory.$this->router->class.'_'.$this->router->method,
                'prepend' => '',
                'append' => ''
            ]
        ];
    }

    public function _remap($method, $params = array())
    {
        $is_ajax = $this->input->is_ajax_request();
        $is_pjax = $this->input->server('HTTP_X_PJAX');
        if($is_ajax && !$is_pjax) $method = $method.'_'.$this->input->method();
        if (method_exists($this, $method)){
            call_user_func_array(array($this, $method), $params);
            if($is_pjax){
                echo $this->viewData['template']['prepend'];
                echo $this->load->view($this->viewData['template']['path'],$this->viewData['data'],true);
                echo $this->viewData['template']['prepend'];
                return;
            }
            if($is_ajax) return $this->output->set_content_type('application/json')->set_output(json_encode($this->viewData['data']));
            $dirArr = explode("/", rtrim($this->router->directory, "/"));
            return $this->load->view($dirArr[0].'/index', $this->viewData);
        }else{
            show_404();
        }
    }

    public function _output($output)
    {
        echo $output;
    }

    
}