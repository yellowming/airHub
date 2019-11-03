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
        $this->load->model(['adminUriModel','adminUserModel','adminRoleModel']);
        $this->load->helper(['auth']);
    }

    
    
}