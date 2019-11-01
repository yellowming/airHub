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
        if($this->input->post('_id')){
            $deleteResult = $this->adminUserModel->collection->deleteOne(['_id'=>new MongoDB\BSON\ObjectId($this->input->post('_id'))]);
            if($deleteResult->getDeletedCount() === 0){
                $this->alert('删除失败！','danger');
            }else{
                $this->alert('删除成功！');
            }
        }
        $users = $this->adminUserModel->collection->find();
        foreach($users as $k=>$user){
            //dump(cursor2array($user["roles"]));
            //$users[$k]["roles"] = $this->adminRoleModel->collection->find(["_id"=>['$in'=>cursor2array($user["roles"])]]);
        }
        dump(cursor2array($users));
        $this->setData('users',$users);
        $js = <<<EOF
        <script>
            $('#userDeleConfirmModal').on('show.bs.modal', function (event) {
                var button = $(event.relatedTarget),
                    userID = button.data('id'),
                    userName = button.data('name')
                    modal = $(this)
                modal.find('#confirmUserName').text(userName)
                modal.find('#confirmUserId').val(userID)
            })
        </script>
EOF;
        $this->viewAppend($js);
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
                    $_SESSION['admin_logined'] = $user['_id'];
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
        $this->form_validation->set_rules('email', '邮箱', ['trim','required','valid_email',['is_unique',function($email){
            $user = $this->adminUserModel->getOneByEmail($email);
            return $user===null?true:false;
        }]]);
        $this->form_validation->set_rules('username', '用户名', ['trim','required','min_length[3]','max_length[12]',['is_unique',function($username){
            $user = $this->adminUserModel->getOneByName($username);
            return $user===null?true:false;
        }]]);
        $this->form_validation->set_rules('password', '密码', ['required','min_length[5]','max_length[20]']);
        $this->setData('is_post',false);
        if($this->input->method() === 'post'){
            $this->setData('is_post',true);
            if($this->form_validation->run()){
                $insert = [
                    'email' => trim($this->input->post('email')),
                    'name' => trim($this->input->post('username')),
                    'pwd' => password_hash($this->input->post('password'),PASSWORD_DEFAULT),
                    //'role_id' => $this->input->post('role_id'),
                    'avatar' => null
                ];
                $insertResult = $this->adminUserModel->insert($insert);
                if($insertResult->getInsertedCount()===0){
                    $this->alert('新增失败，请联系程序员','danger');
                }else{
                    redirect('/admin/user');
                }   
            }
        }
    }

    public function edit($id = null){
        if(!$id) show_404();
        try {$ObjectId = new MongoDB\BSON\ObjectId($id); } catch (\Throwable $th)  {show_404();}
        $user = $this->adminUserModel->collection->findOne(['_id'=>$ObjectId]);
        if(!$user) show_404();
        foreach($user as $key=>$item){
            $this->setData($key,$item);
        }
        $this->load->library('form_validation');
        $this->setData('is_post',false);
        $this->setData('roleAll',$this->adminRoleModel->collection->find());
        if($this->input->method() === 'post'){
            $this->setData('is_post',true);
            $this->form_validation->set_rules('email', '邮箱', ['trim','required','valid_email',['is_unique',function($email) use ($user){
                if($email === $user['email']) return true;
                $user = $this->adminUserModel->getOneByEmail($email);
                return $user===null?true:false;
            }]]);
            $this->form_validation->set_rules('name', '用户名', ['trim','required','min_length[3]','max_length[12]',['is_unique',function($name) use ($user){
                if($name === $user['name']) return true;
                $user = $this->adminUserModel->getOneByName($name);
                return $user===null?true:false;
            }]]);
            $this->form_validation->set_rules('pwd', '密码', ['min_length[5]','max_length[20]']);
            if($this->form_validation->run()){
                $update = [
                    'email' => trim($this->input->post('email')),
                    'name' => trim($this->input->post('name')),
                    'roles' => [],
                    'avatar' => null
                ];
                $roles = $this->input->post('roles');
                if(!empty($roles)){
                    foreach($roles as $role) $update['roles'][] = new MongoDB\BSON\ObjectId($role);
                }
                $update['pwd'] = empty($this->input->post('pwd'))?$user['pwd']:password_hash($this->input->post('pwd'),PASSWORD_DEFAULT);
                $updateResult = $this->adminUserModel->update(['_id' => $ObjectId],[ '$set' => $update]);
                if($updateResult->getModifiedCount()===0 || $updateResult->getMatchedCount()===0){
                    $this->alert('没有改动');
                }else{
                    redirect('/admin/user');
                }
            }
        }
    }
}