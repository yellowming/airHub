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
        $this->load->library('form_validation');
        if($this->input->method() === 'post'){
            $this->form_validation->set_rules('email', '邮箱', ['trim','required','valid_email']);
            $this->form_validation->set_rules('password', '密码', ['required','min_length[5]','max_length[20]']);
            if($this->form_validation->run()){
                $user = $this->adminUserModel->getOneByEmail(trim($this->input->post('email')));
                if($user === null) return $this->alert('账户不存在或密码不正确','danger');
                if(password_verify($this->input->post('password'), $user['pwd'] )){
                    $_SESSION['admin_logined'] = true;
                    redirect('/admin');
                }else{
                    return $this->alert('账户不存在或密码不正确','danger');
                }
            }
            
        }
    }
    public function logout(){
        unset($_SESSION['admin_logined']);
    }

    public function add()
	{
        $this->load->library('form_validation');
        $this->breadcrumb();
        $this->setData('is_post',false);
        if($this->input->method() === 'post'){
            $this->setData('is_post',true);
            $this->form_validation->set_rules('username', '用户名', ['trim','required','min_length[2]','max_length[10]',['is_unique',function($username){
                $user = $this->adminUserModel->getOneByName($username);
                return $user===null?true:false;
            }]]);
            $this->form_validation->set_rules('email', '邮箱', ['trim','required','valid_email',['is_unique',function($email){
                $user = $this->adminUserModel->getOneByEmail($email);
                return $user===null?true:false;
            }]]);
            $this->form_validation->set_rules('password', '密码', ['required','min_length[5]','max_length[20]']);
            $this->form_validation->set_rules('password_confirm', '重复密码', ['required','matches[password]']);
            if($this->form_validation->run()){
                $this->load->library('encryption');
                $insert = [
                    'name' => trim($this->input->post('username')),
                    'email' => trim($this->input->post('email')),
                    'pwd' => password_hash($this->input->post('password'),PASSWORD_DEFAULT),
                    'role_id' => $this->input->post('role_id')
                ];
                $insertResult = $this->adminUserModel->insert($insert);
                if($insertResult->getInsertedCount() === 0) return $this->alert('新增用户失败，请联系程序员','danger');
                redirect('/admin/user');
            }
        }
    }

}
