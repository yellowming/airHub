<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends Admin_Controller {
    function __construct(){
        parent::__construct();
    }
	public function many_get(){
        $params = $this->input->get();
        $where = [];
        $count = $this->adminUserModel->collection->count($where);
        $users = $this->adminUserModel->collection->find($where,[
            'projection' => [
                'name' => 1,
                'avatar' => 1,
                'email' => 1,
                'roles' => 1
            ],
            'limit' => (int)$params['itemsPerPage'],
            'skip' => ((int)$params['page']-1)*(int)$params['itemsPerPage'],
            'sort' => [$params['mustSort'] => -1]
        ]);
        $users = $users ? MongoVal($users) : [];
        $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode(['users'=>$users, 'params'=>$params, 'count'=>$count]));
    }

    public function one_delete($_id){
        $_id = $this->input->get('_id');
        $deleteResult = $this->adminUserModel->collection->deleteOne(['_id'=>new MongoDB\BSON\ObjectId($_id)]);
        if($deleteResult->getDeletedCount() === 1){
            $this->output
            ->set_content_type('application/json')
            ->set_status_header(204);
        }else{
            $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode(['message'=>'not found']))
            ->set_status_header(404);
        }
    }

    public function one_post($_id){
        $params = json_decode($this->input->raw_input_stream, true);
        $this->load->library('form_validation');
        $this->form_validation->set_data($params);
        $this->form_validation->set_rules('email', '邮箱', ['trim','required','valid_email',['is_unique',function($email){
            $user = $this->adminUserModel->getOneByEmail($email);
            return $user===null?true:false;
        }]]);
        $this->form_validation->set_rules('name', '用户名', ['trim','required','min_length[2]','max_length[12]',['is_unique',function($name){
            $user = $this->adminUserModel->getOneByName($name);
            return $user===null?true:false;
        }]]);

        $this->form_validation->set_rules('password', '密码', ['required','min_length[5]','max_length[20]']);

        if($this->form_validation->run()){
            $insert = [
                'email' => trim($params['email']),
                'name' => trim($params['name']),
                'pwd' => password_hash($params['password'],PASSWORD_DEFAULT),
                'roles' => $params['roles'],
                'avatar' => null
            ];
            $insertResult = $this->adminUserModel->insert($insert);
            if($insertResult->getInsertedCount()===0){
                $this->output
                ->set_content_type('application/json')
                ->set_output(json_encode(['message'=>'unknow error']))
                ->set_status_header(500);
            }else{
                $this->output
                ->set_content_type('application/json')
                ->set_output(json_encode(['message'=>'success']))
                ->set_status_header(201);
            } 
        }else{
            $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode(['message'=>'filed error','errors'=>$this->form_validation->error_array()]))
            ->set_status_header(403);
        }
        
    }
    public function one_put($_id){
        $input = $this->input->get();
        if(!isset($input['_id'])) show_404();
        try {$ObjectId = new MongoDB\BSON\ObjectId($input['_id']); } catch (\Throwable $th)  {show_404();}
        $user = $this->adminUserModel->collection->findOne(['_id'=>$ObjectId]);
        if(!$user) show_404();
        $user = MongoVal($user);
        $this->load->library('form_validation');
        $this->form_validation->set_data($input);
        $this->form_validation->set_rules('email', '邮箱', ['trim','required','valid_email',['is_unique',function($email) use ($user){
            if($email === $user['email']) return true;
            $user = $this->adminUserModel->getOneByEmail($email);
            return $user===null?true:false;
        }]]);
        $this->form_validation->set_rules('name', '用户名', ['trim','required','min_length[2]','max_length[12]',['is_unique',function($name) use ($user){
            if($name === $user['name']) return true;
            $user = $this->adminUserModel->getOneByName($name);
            return $user===null?true:false;
        }]]);
        $this->form_validation->set_rules('pwd', '密码', ['min_length[5]','max_length[20]']);
        if($this->form_validation->run()){
            $update = [];
            if(isset($input['name'])) $update['name'] = $input['name'];
            if(isset($input['email'])) $update['email'] = $input['email'];
            if(isset($input['roles'])) $update['roles'] = $input['roles'];
            if(isset($input['password'])) $update['pwd'] = password_hash($input['password'],PASSWORD_DEFAULT);
            $updateResult = $this->adminUserModel->update(['_id' => $ObjectId],[ '$set' => $update]);
            if($updateResult->getModifiedCount()===0 || $updateResult->getMatchedCount()===0){
                $this->output->set_content_type('application/json')
                ->set_output(json_encode(['message'=>'filed error']))
                ->set_status_header(403);
            }else{
                $this->output->set_content_type('application/json')
                ->set_output(json_encode(['message'=>'ok']));
            }
        }else{
            $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode(['message'=>'filed error','errors'=>$this->form_validation->error_array()]))
            ->set_status_header(403);
        }
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
