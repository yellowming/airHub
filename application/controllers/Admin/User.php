<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends Admin_Controller {
    function __construct()
    {
        parent::__construct();
        $this->load->model('adminUserModel');
    }
	public function index()
	{
        $users = $this->adminUserModel->getAll();
        $this->viewData['data']['users'] = $users;
    }
    public function login()
	{
        if($this->input->method() === 'post'){
            $_SESSION['admin_logined'] = true;
            redirect('/admin');
        }
    }
    public function logout(){
        unset($_SESSION['admin_logined']);
    }

    public function add()
	{
        if($this->input->method() === 'post'){
            $this->viewData['tips']=
        }
    }
}
