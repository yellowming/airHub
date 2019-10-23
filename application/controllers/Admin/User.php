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
        $this->breadcrumb();
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
        $this->breadcrumb();
        $this->load->library('form_validation');
        $this->form_validation->set_rules('email', '邮箱', ['required',['is_unique',function($email){
            $user = $this->adminUserModel->getOneByEmail($email);
            return $user===null?true:false;
        }]]);
        $this->form_validation->set_rules('username', '用户名', ['required',['is_unique',function($username){
            $user = $this->adminUserModel->getOneByName($username);
            return $user===null?true:false;
        }]]);
        $this->form_validation->set_rules('password', '密码', 'required');
        $this->form_validation->set_rules('password_confirm', '重复密码', 'required');
        
        
        if($this->input->method() === 'post'){
            if($this->form_validation->run()){
                redirect('/admin/user');
            }else{
                $this->alert(validation_errors(),'danger');
            }
            
        return;
            $postData = $this->input->post();
            if(empty($postData['email'])) return $this->alert('请输入邮箱！','danger');
            if(empty($postData['username'])) return $this->alert('请输入用户名！','danger');
            if(empty($postData['password'])) return $this->alert('请输入密码！','danger');
            if(empty($postData['passwordConfirm'])) return $this->alert('请输入重复密码！','danger');

            
        }
    }

    private function isUniqueEmail(){

    }
}
