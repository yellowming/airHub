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

    public function _remap($method, $params = array())
    {
        echo '<pre>';
        var_dump($this->router->directory);
        var_dump($this->router->class);
        var_dump($this->router->method);
        echo '</pre>';
        //$method = 'process_'.$method;
        if (method_exists($this, $method))
        {
            return call_user_func_array(array($this, $method), $params);
        }
        show_404();
    }
}